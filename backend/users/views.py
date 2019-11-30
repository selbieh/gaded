from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import getOtpSerizalizer
from .models import users
from .utility import hahsOtp,sndOtpSms
import datetime
from rest_framework.authtoken.models import Token
import random

class GetOtp(APIView):
    serializer_class=getOtpSerizalizer
    def post(self,request,*args,**kwargs):
        mobile=request.data.get('mobile',None)
        try:
            user=users.objects.get(mobile=mobile)
            #print(user.update_time)
            updte_time_tring= datetime.datetime.strftime(user.update_time, '%Y-%m-%dT%H:%M:%S')
            update_time=datetime.datetime.strptime(updte_time_tring,'%Y-%m-%dT%H:%M:%S')
            now_time_string=datetime.datetime.strftime(datetime.datetime.now(),'%Y-%m-%dT%H:%M:%S')
            now_time_object=datetime.datetime.strptime(now_time_string,'%Y-%m-%dT%H:%M:%S')
            done_wating_time=(now_time_object-update_time).days
            rest_wating_time_inseconds =((now_time_object-update_time).seconds-24*60*60)
            rest_wating_time=(abs(int(rest_wating_time_inseconds/(60*60))))
            # supposed_wating_time=datetime.datetime.strptime("23:59:59",'%H:%M:%S')
            # delta_supposed_wating_time = timedelta(hours=supposed_wating_time.hour, minutes=supposed_wating_time.minute, seconds=supposed_wating_time.second)
            # sill_blockig_time=datetime.datetime.strftime(supposed_wating_time-done_wating_time,'%H:%M:%S')
            #if user.otp_attempt >=3 and (done_wating_time <=delta_supposed_wating_time) :
            if user.otp_attempt >= 3 and done_wating_time <1:

                return Response({'message':'max attempes is used try again after {0} hour'.format(rest_wating_time)})

            else:
                user.otp=random.randint(100000, 999998)
                user.otp_is_confirmed=False
                user.otp_attempt+=1
                user.save()
                print(user.mobile,'    ',user.otp)
                #sndOtpSms(user.mobile,user.otp)
                return Response({"message":'please confirm the new OTP'})
        except:
            otp=random.randint(100000, 999998)
            password=hahsOtp(otp)
            user=users.objects.create_user(mobile=mobile, password=password,otp=otp)
            #sndOtpSms(user.mobile,user.otp)
            print(user.mobile,'    ',user.otp)

            return Response({"MESSAGE":"OTP sent to your mobile"})

class validateOtp(APIView):
    def post(self,request,*args,**kwargs):
        mobile=request.data.get('mobile',None)
        otp=request.data.get('otp',None)
        password=hahsOtp(otp)
        try:
            user=users.objects.get(mobile=mobile,otp=otp)
        except:
            user=None
        if (user  and mobile and otp == str(user.otp)):
            user.otp='999999'
            user.otp_is_confirmed=True
            user.set_password(password)
            user.otp_attempt=0
            user.save()
            token,created=Token.objects.get_or_create(user=user)
            if created:
                return Response({'Token':token.key})
            else:
                token.delete()
                token = Token.objects.create(user=user)
                return Response({'Token':token.key})
        else:
             return Response({'message':'this mobile not registered'})