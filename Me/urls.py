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
    path("contact", views.contact, name='contact')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
