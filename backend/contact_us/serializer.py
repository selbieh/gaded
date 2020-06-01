from rest_framework import serializers
from .models import conatact_us
class contact_us_serializer(serializers.ModelSerializer):
    class Meta:
        model=conatact_us
        fields='__all__'