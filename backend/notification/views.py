from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from fcm_django.models import FCMDevice
from rest_framework.permissions import IsAuthenticated
from  .models import subscribe
from advertise.models import category
from rest_framework.status import HTTP_417_EXPECTATION_FAILED
from advertise.serializer import categorySerializer
from .serializer import notificationSerializer
from .models import notification
from advertise.paginaton import custumPaginationClass



class testDjangoFcm(APIView):
    def get(self, request):
        devices = FCMDevice.objects.all()
        devices.send_message(data={'title':'it passed','body':'from backend'})
        #devices.send_message(title='it passed',body='from backend')
        return Response({"message": 'done'})


class testGetNot(APIView):
    def get(self, request):
        return Response({
            'message': 'notification retrieved'
        })


class subscribeView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request,*args,**kwargs):
        user_subscribe=subscribe.objects.all().filter(users=request.user)
        user_category=[item.category for item in user_subscribe]
        serializer=categorySerializer(user_category,many=True,context={'request': request})
        return Response(serializer.data)
    def put(self,request,*args,**kwargs):
        try:
            the_category=category.objects.get(name=request.data.get('category'))
            subscrition_item,created=subscribe.objects.get_or_create(category=the_category)
            subscrition_item.users.add(request.user)
            return Response('subscribed sucssefuly')
        except:
            return Response('ERORR:  category name or users token ',status=HTTP_417_EXPECTATION_FAILED)


    def delete(self,request,*args,**kwargs):
        try:
            the_category = category.objects.get(name=request.data.get('category'))
            subscrition_item, created = subscribe.objects.get_or_create(category=the_category)
            subscrition_item.users.remove(request.user)
            return Response('subscribed sucssefuly')
        except:
            return Response('ERORR:  category name or users token ', status=HTTP_417_EXPECTATION_FAILED)

class getUserNotification(ListAPIView):
    permission_classes = (IsAuthenticated,)
    pagination_class = custumPaginationClass
    serializer_class = notificationSerializer

    def get_queryset(self,):
        return notification.objects.filter(user=self.request.user).order_by('-id')