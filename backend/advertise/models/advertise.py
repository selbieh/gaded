from django.db import models
from users.models import users
from imagekit.processors import Resize
from imagekit.models import ProcessedImageField
from .utility import *
from django.dispatch.dispatcher import receiver
from django.db.models.signals import post_save
from gaded.tasks import create_notification_task
from django.db import transaction



class advertise(models.Model):
    name           =models.CharField(max_length=255)
    aprroved       =models.BooleanField(default=False)
    reviewed_in    =models.DateTimeField(auto_now=True)
    price          =models.DecimalField(blank=False, decimal_places=2,max_digits=10)
    category       =models.ForeignKey('advertise.category',on_delete=models.SET_NULL,null=True)
    number_of_viewer=models.IntegerField(default=1)
    since           =models.DateField(auto_now=True)
    details        =models.TextField(max_length=255,blank=False,default='not assigned')
    image_1        = ProcessedImageField(upload_to=user_directory_path_1, blank=True,
                                  processors=[Resize(350, 250)],
                                  format='JPEG',
                                  options={'quality': 100})
    image_2 = ProcessedImageField(upload_to=user_directory_path_2, blank=True,
                                  processors=[Resize(350, 250)],
                                  format='JPEG',
                                  options={'quality': 100})
    image_3 = ProcessedImageField(upload_to=user_directory_path_3, blank=True,
                                  processors=[Resize(350, 250)],
                                  format='JPEG',
                                  options={'quality': 100})
    contacts = models.CharField(max_length=11,blank=False,default='01003345516')
    created_by = models.ForeignKey(users, related_name='creator',verbose_name='creator',related_query_name='creator', on_delete=models.SET_NULL, null=True,blank=True)
    reviewed_by = models.ForeignKey(users, related_name='admin',verbose_name='admin', on_delete=models.SET_NULL,related_query_name='admin', null=True,blank=True)



    def __str__(self):
        return self.name

    class Meta:
        app_label = "advertise"



@receiver(post_save,sender=advertise)
def post_save_adv(sender,instance,created,**kwargs):
    if created:
        transaction.on_commit(lambda:create_notification_task.delay(instance.id))#apply_async(args=(instance.id,)))



