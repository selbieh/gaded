from rest_framework.views import APIView
from rest_framework.response import Response
from fcm_django.models import FCMDevice





class testDjangoFcm(APIView):
    def get(self,request):
        devices=FCMDevice.objects.all()
        devices.send_message(title='from django',body='from django to console')
        return Response({"message":'done'})


class testGetNot(APIView):
    def get(self,request):
        return Response({
            'message':'notfications retrieved'
        })