from django.db import models



class category(models.Model):


    name=models.CharField(max_length=600,blank=False,default=None)
    parent=models.ForeignKey('self', on_delete=models.SET_NULL,blank=True,null=True)
    full_name_string=models.CharField(max_length=255,blank=True)



    def full_name_string_fun(self):
        name_list = [self.name]
        parent = self.parent
        while parent is not None:
            name_list.append(parent.name)
            parent = parent.parent
        return name_list


    def __str__(self):
        return ' --> '.join(reversed(self.full_name_string_fun()))


    def save(self,*args,**kwargs):
        self.full_name_string=' '.join(reversed(self.full_name_string_fun()))
        super(category,self).save(*args,**kwargs)



    class Meta:
        app_label = "advertise"
        unique_together = ('name', 'parent',)


