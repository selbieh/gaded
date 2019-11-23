from django.db import models
from users.models import users
from imagekit.processors import Resize
from imagekit.models import ProcessedImageField
from gaded.advertise.models.utility import *



class advertise(models.Model):
    created_by     =models.ForeignKey(users,related_name='creator',on_delete=models.SET_NULL,null=True)
    reviewed_by    =models.ForeignKey(users,related_name='admin',on_delete=models.SET_NULL,null=True)
    name           =models.CharField(max_length=255)
    number_of_viewer=models.IntegerField(default=1)
    aprroved       =models.BooleanField(default=False)
    reviewed_in    =models.DateTimeField(auto_now=True)
    price          =models.DecimalField(blank=False, decimal_places=2,max_digits=10)
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



    def __str__(self):
        return self.name