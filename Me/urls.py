from django.conf.urls.static import static
from django.urls import path
from django.contrib import admin
from Me import settings
from app import views

urlpatterns = [
    path("", views.run, name="run"),
    path("StartAJAX/", views.start_ajax, name="start_ajax"),
    path("skill/<url>/", views.work),
    path("admin/", admin.site.urls),
    path("contact", views.contact, name='contact'),
    path("chat/admin", views.Admin.start, name='admin'),
    path("chat/admin/user", views.Admin.chat, name='admin_chat'),
    path("chat/admin/login", views.Admin.login, name='admin_login'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
