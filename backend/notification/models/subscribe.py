from django.db import models
from advertise.models import category
from django.conf import settings

class subscribe (models.Model):
    category    =models.ForeignKey(category,null=True,on_delete=models.SET_NULL)
    users        =models.ManyToManyField(settings.AUTH_USER_MODEL)

    def __str__(self):
        return self.category.full_name_string
    class Meta:
        app_label='notification'
