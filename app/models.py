from django.db import models


class Works(models.Model):
    name = models.TextField(blank=False,
                            verbose_name='Име'
                            )
    color = models.TextField(blank=False,
                             null=True,
                             verbose_name='Цвет'
                             )
    descriptionRU = models.TextField(blank=False,
                                     null=True,
                                     verbose_name='Описание(Русский)'
                                     )
    descriptionEN = models.TextField(blank=False,
                                     null=True,
                                     verbose_name='Описание(Английский)'
                                     )

    class Meta:
        verbose_name = 'Умение'


class Prodjects(models.Model):
    name = models.TextField(blank=False)
    img = models.ImageField(blank=False, upload_to="app/img")

    class Meta:
        verbose_name = 'Проект'
