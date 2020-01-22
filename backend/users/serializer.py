from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from users.models import users
import re




class getOtpSerizalizer(serializers.Serializer):
    mobile=serializers.CharField(max_length=11,min_length=11
                                  # ,validators=[UniqueValidator(queryset=users.objects.all())]
                                 )


    def validate_mobile(self, value):
        regex = re.compile('^01[0-9]{9}$')
        if regex.match(value):
            return value
        else:
            raise serializers.ValidationError('mobile should me like 01XXXXXXXXX')







class checkOtpSerizalizer(serializers.Serializer):
    mobile=serializers.CharField(max_length=11,min_length=11,required=True)

    otp=serializers.CharField(max_length=6,min_length=6,required=True)


    def validate_mobile(self, value):
        regex = re.compile('^01[0-9]{9}$')
        if regex.match(value):
            return value
        else:
            raise serializers.ValidationError('mobile should me like 01XXXXXXXXX')


    def validate_otp(self, vlaue):
        regex=re.compile('^[0-9]{6}$')
        if regex.match(vlaue):
            return vlaue
        else:
            raise serializers.ValidationError('OTP must be 6 digists')