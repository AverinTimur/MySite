from django.urls import re_path
from app import consumers

websocket_urlpatterns = [
    re_path(r'ws/chat/room', consumers.ChatConsumer.as_asgi()),
    re_path(r'ws/chat/admin', consumers.AdminConsumer.as_asgi()),
]
