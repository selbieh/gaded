from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models.category import category
from .models.advertise import advertise
from .paginaton import  custumPaginationClass
from rest_framework.mixins import ListModelMixin
from rest_framework.parsers import MultiPartParser, FormParser,JSONParser,DjangoMultiPartParser


from .serializer import categorySerializer,advertiseSerializer



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


class advertise(ModelViewSet):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = advertiseSerializer
    queryset = advertise.objects.all().order_by('-pk')
    pagination_class = custumPaginationClass

    # def list(self, request):
    #     pass


