from django.db import models

class Works(models.Model):
    name = models.TextField(blank=False)
    color = models.TextField(blank=False,null=True)

class Prodjects(models.Model):
    name = models.TextField(blank=False)
    img = models.ImageField(blank=False,upload_to="app/media/img")