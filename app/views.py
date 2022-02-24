from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from app import models
from .models import *
import json


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


def firstAJAX(request):
    ProdjectList = {}

    for i in Prodjects.objects.all():
        ProdjectList[i.id] = i.img.url

    return HttpResponse(json.dumps(ProdjectList), content_type="application/json")
