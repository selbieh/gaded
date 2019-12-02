from django.db import models
from django.conf import settings
from users.models import users


class notification(models.Model):
    user        =models.ForeignKey(users,on_delete=models.SET_NULL,null=True)
    advertise   =models.ForeignKey('advertise.advertise',on_delete=models.SET_NULL,null=True)
    redirect    =models.CharField(max_length=125,blank=True,null=True)
    seen        =models.BooleanField(default=False)
    pushed      =models.BooleanField(default=False)

    def __str__(self):
        return self.advertise.name+'  to  ' +self.user.mobile

    class Meta:
        app_label='notification'