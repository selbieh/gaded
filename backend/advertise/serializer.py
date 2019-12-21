from rest_framework import serializers
from .models import category ,advertise


class categorySerializer(serializers.ModelSerializer):

    class Meta:
        fields='__all__'
        model=category



class advertiseSerializer(serializers.ModelSerializer):
    category=serializers.SlugRelatedField(
        queryset=category.objects.all(),
        slug_field='full_name_string'
     )


    class Meta:
        model=advertise
        fields = ('name','price','contacts','number_of_viewer','details','image_1','image_2','image_3','category','id','since',)