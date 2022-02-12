from django.conf.urls.static import static
from django.urls import path
from django.contrib import admin
from Me import settings
from app import views

urlpatterns = [
    path("",views.run,name="run"),
    path("firstAJAX/",views.firstAJAX,name="firstAJAX"),
    path("work/<url>/",views.work),
    path("admin/",admin.site.urls)
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)