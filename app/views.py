from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from app import models
from .models import *
import json
import smtplib
from environs import Env
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

env = Env()
env.read_env()

def run(request):
    WorkList = {}

    # WorkList
    for i in Works.objects.all():
        WorkList[len(WorkList) + 1] = i.name

    return HttpResponse(render(request, "Main.html", {"WorkList": WorkList}))


def work(request, url):

    color = Works.objects.get(name=url).color
    descriptionEN = Works.objects.get(name=url).descriptionEN
    descriptionRU = Works.objects.get(name=url).descriptionRU

    return HttpResponse(render(request, "Work.html", {"url": url, "color": color, "descriptionEN": descriptionEN, "descriptionRU": descriptionRU}))


def contact(request):
    if 'name' in request.POST:
        name = request.POST.get('name')
        contact = request.POST.get('contact')
        text = request.POST.get('text')
        massage = MIMEText(f'<p>Name: {name}</p><p>Contact: {contact}</p><p>{text}</p>', 'html')
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(env.str('Email'), env.str('EmailPassword'))
        server.sendmail(env.str('Email'), env.str('Email'), massage.as_string())
        server.quit()

    return HttpResponse(render(request, "Contact.html"))


def firstAJAX(request):
    ProdjectList = {}

    for i in Prodjects.objects.all():
        ProdjectList[i.id] = i.img.url

    return HttpResponse(json.dumps(ProdjectList), content_type="application/json")
