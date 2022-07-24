from django.db import models


class Skills(models.Model):
    name = models.TextField(blank=False,
                            verbose_name='Име',
                            )
    color = models.TextField(blank=False,
                             null=True,
                             verbose_name='Цвет',
                             )
    descriptionRU = models.TextField(blank=False,
                                     null=True,
                                     verbose_name='Описание(Русский)',
                                     )
    descriptionEN = models.TextField(blank=False,
                                     null=True,
                                     verbose_name='Описание(Английский)',
                                     )

    class Meta:
        verbose_name = 'Умение'


class Works(models.Model):
    name = models.TextField(blank=False)
    img = models.ImageField(blank=False, upload_to="app/img", null=True)

    class Meta:
        verbose_name = 'Проект'


class Users(models.Model):
    cookie = models.TextField(blank=False, null=True)
    name = models.TextField(blank=False, null=True)
    chat = models.JSONField(blank=False, null=True)

    class Meta:
        verbose_name = 'Пользователи'
