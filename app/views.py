from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from json import dumps
from smtplib import SMTP_SSL
from environs import Env
from email.mime.text import MIMEText

env = Env()
env.read_env()


def run(request):
    # Main page
    skills_list = dict()

    for i in Skills.objects.all():
        skills_list[len(skills_list) + 1] = i.name

    return HttpResponse(render(request, "Main.html", {"skills_list": skills_list}))


def work(request, url):
    # Work page
    color = Skills.objects.get(name=url).color
    en_description = Skills.objects.get(name=url).descriptionEN
    ru_description = Skills.objects.get(name=url).descriptionRU

    return HttpResponse(render(request, "Work.html", {"url": url,
                                                      "color": color,
                                                      "en_description": en_description,
                                                      "ru_description": ru_description
                                                      }))


def contact(request):
    # Contact page
    if 'name' in request.POST:
        name = request.POST.get('name')
        contact = request.POST.get('contact')
        text = request.POST.get('text')
        massage = MIMEText(f'<p>Name: {name}</p><p>Contact: {contact}</p><p>{text}</p>', 'html')
        server = SMTP_SSL('smtp.gmail.com', 465)
        server.login(env.str('Email'), env.str('EmailPassword'))
        server.sendmail(env.str('Email'), env.str('Email'), massage.as_string())
        server.quit()

    return HttpResponse(render(request, "Contact.html"))


def start_ajax(request):
    # AJAX for main page
    works_list = dict()

    for i in Works.objects.all():
        works_list[i.id] = i.img.url

    return HttpResponse(dumps(works_list), content_type="application/json")

