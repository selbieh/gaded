from django.db import models
from django.conf import settings
from advertise.models import advertise


class notification(models.Model):
    user        =models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.SET_NULL,null=True)
    avertise   =models.ForeignKey(advertise,on_delete=models.SET_NULL,null=True)
    redirect    =models.CharField(max_length=125,default=None)
    seen        =models.BooleanField(default=False)
    pushed      =models.BooleanField(default=False)

    def __str__(self):
        return self.avertise.name+'  to  ' +self.user.mobile

    class Meta:
        app_label='notification'