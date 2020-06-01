from django.contrib import admin
from .models import conatact_us
from django.contrib.admin import ModelAdmin
class contactusAdmin(ModelAdmin):
    list_filter = ('seen',)
    list_display = ('pk','username','seen')

admin.site.register(conatact_us,contactusAdmin)
# Register your models here.
