from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from json import dumps
from environs import Env
from django.shortcuts import redirect
from django.urls import reverse
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

env = Env()
env.read_env()


def run(request):
    # Main page
    skills_list = dict()

    for i in Skills.objects.all():
        skills_list[len(skills_list) + 1] = i.name

    return HttpResponse(render(request, 'Main.html', {'skills_list': skills_list}))


def work(request, url):
    # Work page
    color = Skills.objects.get(name=url).color
    en_description = Skills.objects.get(name=url).descriptionEN
    ru_description = Skills.objects.get(name=url).descriptionRU

    return HttpResponse(render(request, 'Work.html', {'url': url,
                                                      'color': color,
                                                      'en_description': en_description,
                                                      'ru_description': ru_description
                                                      }))


def contact(request):
    # Contact page
    cookie = request.META.get('CSRF_COOKIE')
    messages = {}
    if cookie and not Users.objects.filter(cookie=cookie):
        Users.objects.create(cookie=cookie, chat=[])
    else:
        messages = Users.objects.get(cookie=cookie).chat

    name = request.POST.get('name')
    text = request.POST.get('text')

    return HttpResponse(render(request, 'Contact.html', {'messages': messages, 'cookie': cookie}))


class Admin:
    # Functions of admin chats
    def start(self):
        # Admin chat
        users = Users.objects.all()

        if not self.user.is_staff:
            return redirect(reverse('admin_login'))

        return HttpResponse(render(self, 'admin_chat.html', {'users': users}))

    def chat(self):
        # AJAX for admin chat
        if 'cookie' in self.POST:
            messages = Users.objects.get(cookie=self.POST['cookie']).chat

            return HttpResponse(dumps(messages), content_type='application/json')

        return HttpResponse(render(self, '404.html'))

    @csrf_exempt
    def login(self):
        # Admin login-in
        username = self.POST.get('login')
        password = self.POST.get('password')

        if self.POST.get('login') and User.objects.filter(username=username):
            if User.objects.get(username=username).check_password(password):
                if User.objects.get(username=username).is_superuser:
                    User.objects.get(username=username)
                    login(self, authenticate(self, username=username, password=password))
                    return redirect(reverse('admin'))

        return HttpResponse(render(self, 'admin_login.html'))


def start_ajax(request):
    # AJAX for main page
    works_list = dict()

    for i in Works.objects.all():
        works_list[i.id] = i.img.url

    return HttpResponse(dumps(works_list), content_type='application/json')
