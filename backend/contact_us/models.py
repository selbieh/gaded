from django.db import models
class conatact_us(models.Model):
    username=models.CharField(max_length=15,blank=False)
    email=models.EmailField(blank=False)
    subject=models.CharField(blank=True,max_length=25)
    message=models.TextField(blank=False,max_length=255)
    seen=models.BooleanField(default=False)
    def __str__(self):
        return self.subject

# Create your models here.
