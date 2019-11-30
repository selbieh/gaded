from rest_framework import serializers
from .models import category


class categorySerializer(serializers.ModelSerializer):

    class Meta:
        fields='__all__'
        model=category
