from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser,UserManager

class cutomUserManger(UserManager):
    def _create_user(self, mobile, password, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """

        mobile = self.model.normalize_username(mobile)
        #username = self.model.normalize_username(username)
        user = self.model( mobile=mobile, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, mobile, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user( mobile, password, **extra_fields)

    def create_user(self, mobile=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user( mobile, password, **extra_fields)


class users(AbstractUser):
    mobile = models.CharField(max_length=13,unique=True)
    otp=models.IntegerField(default=999999,blank=True)
    otp_is_confirmed=models.BooleanField(default=False)
    otp_attempt=models.IntegerField(default=0)
    update_time=models.DateTimeField(auto_now=True)
    username = None
    USERNAME_FIELD = 'mobile'
    objects = cutomUserManger()


    def __str__(self):
        return self.mobile

