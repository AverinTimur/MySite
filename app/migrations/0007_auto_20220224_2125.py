# Generated by Django 3.2.9 on 2022-02-24 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_remove_prodjects_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='works',
            name='descriptionEN',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='works',
            name='descriptionRU',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='prodjects',
            name='img',
            field=models.ImageField(upload_to='app/img'),
        ),
    ]