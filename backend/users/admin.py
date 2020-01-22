from django.contrib import admin

# Register your models here.
from .models import users

# class modelAdmin(admin.ModelAdmin):
#     # fields = ('mobile', 'otp', 'otp_is_confirmed','otp_attempt','update_time','USERNAME_FIELD','')
#     readonly_fields = ("update_time",)

admin.site.register(users)