from django.urls import path
from .views import categories,advertiseView
from django.urls import path, include
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'', advertiseView,basename='advertise')

urlpatterns=[

    path('get-categories/',categories.as_view()),
    path('advertise/', include(router.urls)),


]