from rest_framework.views import APIView
from rest_framework.response import Response
from .models.category import category
from .serializer import categorySerializer


class categories(APIView):
    def get(self,request):
        main_categories = category.objects.all()
        parent_id = request.query_params.get('parent_id', None)

        if  parent_id :
            filterd_cat=main_categories.filter(parent__id=parent_id)
            serialized_cat = categorySerializer(filterd_cat, many=True)
            return Response(serialized_cat.data)

        else:
            serialized_cat = categorySerializer(main_categories.filter(parent=None), many=True)
            return Response(
                serialized_cat.data
            )
        #
        # return Response([
        #     {'id':1,'name':'1st'},{'id':2,'name':'2nd'}
        # ])