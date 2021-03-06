from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models.category import category
from .models.advertise import advertise
from .paginaton import custumPaginationClass
from rest_framework.parsers import MultiPartParser, FormParser
from .premissions import OwnerEditOrDelete
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .categoryContainsFilter import categoryContainsFilter
from .serializer import categorySerializer,advertiseSerializer
from django.shortcuts import get_object_or_404




class categories(APIView):
    def get(self,request):
        main_categories = category.objects.all()
        parent_id = request.query_params.get('parent_id', None)

        if parent_id :
            filterd_cat=main_categories.filter(parent__id=parent_id)
            serialized_cat = categorySerializer(filterd_cat, many=True)
            return Response(serialized_cat.data)

        else:
            serialized_cat = categorySerializer(main_categories.filter(parent=None), many=True)
            return Response(
                serialized_cat.data
            )


class advertiseView(ModelViewSet):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = advertiseSerializer
    pagination_class = custumPaginationClass
    permission_classes = (OwnerEditOrDelete,IsAuthenticatedOrReadOnly)
    filter_backends = [categoryContainsFilter]
    advertise=advertise

    def get_queryset(self):
        queryset = advertise.objects.order_by('-pk')
        fromRoute=self.request.query_params.get('fromRoute',None)
        if (self.request.auth and fromRoute == 'myAdvertise') or self.request.method in ['DELETE','PUT']:
            return queryset.filter(created_by=self.request.user)
        else:
            return queryset.filter(aprroved=True)

    def retrieve(self, request, pk=None):
        queryset = advertise.objects.order_by('-pk')
        adver= get_object_or_404(queryset, pk=pk)
        serializer=self.serializer_class(adver)
        if request.user == advertise.created_by:
            return Response(serializer.data)
        else:
            adver.number_of_viewer=adver.number_of_viewer+1
            adver.save()
            return Response(serializer.data)

    def perform_create(self, advertiseSerializer):
        advertiseSerializer.save(created_by=self.request.user)

    def perform_update(self, advertiseSerializer):
        advertiseSerializer.save(aprroved=False)




