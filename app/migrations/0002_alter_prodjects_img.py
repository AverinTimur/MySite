# Generated by Django 3.2.9 on 2021-12-11 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prodjects',
            name='img',
            field=models.ImageField(upload_to='app/media/img'),
        ),
    ]
