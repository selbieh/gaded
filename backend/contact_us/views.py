from rest_framework.views import Response
from rest_framework.generics import CreateAPIView
from .serializer import contact_us_serializer
class contactUsAPI(CreateAPIView):
    serializer_class = contact_us_serializer


# Create your views here.
