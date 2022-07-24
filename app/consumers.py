import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Users
from smtplib import SMTP
from environs import Env
from email.mime.text import MIMEText
from asgiref.sync import async_to_sync

env = Env()
env.read_env()


class ChatConsumer(AsyncWebsocketConsumer):
    ip = None
    cookie = None

    async def connect(self):
        cookie = list(self.scope['headers'][10])[1].decode("utf-8")
        self.cookie = cookie[cookie.find('=') + 1: cookie.find(';')]
        del cookie
        await self.channel_layer.group_add(self.cookie, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.cookie, self.channel_name)

    async def receive(self, text_data):
        self.cookie = json.loads(text_data)['cookie']
        text = json.loads(text_data)['text']
        name = json.loads(text_data)['name']
        if text:
            # mail massage
            massage = MIMEText(f'<p>Name: {name}</p><p>{text}</p>', 'html')
            server = SMTP('smtp.gmail.com', 587)
            server.ehlo()
            server.starttls()
            server.login(env.str('EMAIL'), env.str('EMAILPASSWORD'))
            server.sendmail(env.str('EMAIL'), env.str('EMAIL'), massage.as_string())
            server.quit()

            user = Users.objects.get(cookie=self.cookie)
            user.name = name

            user.chat.append({'text': text, 'name': name, 'admin': False})
            user.save()

            await self.channel_layer.group_send(
                self.cookie,
                {
                    'type': 'chat_message',
                    "room_id": self.cookie,
                    'message': text,
                    'admin': False,
                    'name': name,
                }
            )

    async def chat_message(self, text_data):
        self.cookie = text_data['room_id']
        text = text_data['message']
        if text:
            await self.send(text_data=json.dumps(
                {
                    'message': text,
                    'admin': text_data['admin'],
                }
            ))


class AdminConsumer(AsyncWebsocketConsumer):
    ip = None
    cookie = None

    async def connect(self):
        for user in Users.objects.all():
            await self.channel_layer.group_add(user.cookie, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        for user in Users.objects.all():
            await self.channel_layer.group_discard(user.cookie, self.channel_name)

    async def receive(self, text_data):
        self.cookie = json.loads(text_data)['cookie']
        text = json.loads(text_data)['text']

        user = Users.objects.get(cookie=self.cookie)
        user.chat.append({'text': text, 'name': 'admin', 'admin': True})
        user.save()

        await self.channel_layer.group_send(
            self.cookie,
            {
                'type': 'chat_message',
                'room_id': self.cookie,
                'message': text,
                'admin': True,
                'name': 'admin',
            }
        )

    async def chat_message(self, text_data):
        self.cookie = text_data['room_id']
        text = text_data['message']
        if text:
            await self.send(text_data=json.dumps(
                {
                    'message': text,
                    'admin': text_data['admin'],
                }
            ))