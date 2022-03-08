from django.contrib import admin
from .models import *

@admin.register(Skills)
class WorksList(admin.ModelAdmin):
    pass

@admin.register(Works)
class ProdjectsList(admin.ModelAdmin):
    pass