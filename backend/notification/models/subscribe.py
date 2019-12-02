from django.db import models
from advertise.models import category
from users.models import users
class subscribe (models.Model):
    category    =models.ForeignKey('advertise.category',null=True,on_delete=models.SET_NULL)
    users        =models.ManyToManyField(users)

    def __str__(self):
        return self.category.name
    class Meta:
        app_label='notification'
