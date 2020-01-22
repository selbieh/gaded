from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import getOtpSerizalizer,checkOtpSerizalizer
from .models import users
from .utility import sndOtpSms
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.authtoken.models import Token
import random
from django.utils import timezone
from django.shortcuts import get_object_or_404


class GetOtp(APIView):
    serializer_class=getOtpSerizalizer
    def post(self,request):
        serializedMobile=getOtpSerizalizer(data=request.data)
        if serializedMobile.is_valid(raise_exception=True):
            mobile = serializedMobile.validated_data['mobile']
            if mobile:
                user,created=users.objects.get_or_create(**serializedMobile.validated_data)
                if created:
                    user.otp = random.randint(100000, 999998)
                    user.otp_attempt=1
                    user.otp_is_confirmed=False
                    user.save()
                    print(user.otp)
                    # sndOtpSms(user.mobile,user.otp)
                    return Response({'message':'{0} is created'.format(mobile)})
                else:
                    if user.is_staff or user.is_superuser:
                            return Response({'user':'stuff is not allowed to edit'},status=HTTP_400_BAD_REQUEST)
                    else:
                        if user.otp_attempt <3:
                            user.otp=random.randint(100000, 999998)
                            user.otp_attempt = user.otp_attempt+1
                            user.otp_is_confirmed = False
                            user.save()
                            print(user.otp)
                            # sndOtpSms(user.mobile, user.otp)
                            return Response({'message':'OTP Changed'})
                        else:
                            passedTime=timezone.now()-user.update_time
                            if str(passedTime)> '9:00:00':
                                user.otp_attempt=1
                                user.otp= user.otp=random.randint(100000, 999998)
                                user.save()
                                # sndOtpSms(user.mobile, user.otp)
                                print(user.otp)
                                return Response({'message': 'OTP Changed'})
                            else:
                                return Response({'message':'user blocked 12Hr from last wrong OTP'},status=HTTP_400_BAD_REQUEST)
        else:
            return Response(serializedMobile.errors,status=HTTP_400_BAD_REQUEST)



class validateOtp(APIView):
    def post(self,request):
        serializer=checkOtpSerizalizer(data=request.data)
        if serializer.is_valid():
            user=get_object_or_404(users,**serializer.validated_data)
            print( user.otp_is_confirmed)
            if str(user.otp)==serializer.validated_data['otp'] and user.mobile==serializer.validated_data['mobile'] and not user.otp_is_confirmed:
                user.otp=None
                user.otp_attempt=0
                user.otp_is_confirmed=True
                user.save()
                token,created=Token.objects.update_or_create(user=user)
                return Response({'token':str(token)})
            else:
                return Response('not valid',status=HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)
