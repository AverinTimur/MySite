from django.contrib import admin
from .models import *

@admin.register(Works)
class WorksList(admin.ModelAdmin):
    pass

@admin.register(Prodjects)
class ProdjectsList(admin.ModelAdmin):
    pass