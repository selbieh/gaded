from rest_framework import serializers
from .models import notification
from advertise.serializer import advertiseSerializer



class notificationSerializer(serializers.ModelSerializer):
    advertise=advertiseSerializer()
    class Meta:
        model=notification
        fields=("seen",'advertise','id')
        depth=1