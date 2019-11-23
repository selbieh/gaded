from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from users.models import users


class getOtpSerizalizer(serializers.Serializer):
    mobile=serializers.CharField(max_length=13,
                                 validators=[UniqueValidator(queryset=users.objects.all())]
                                 )



    #class Meta:
    #    model=users
    #    fields=['mobile']



