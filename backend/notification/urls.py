from .views import testDjangoFcm,testGetNot,subscribeView,getUserNotification
from django.urls import path



urlpatterns=[
    path('test-send-fcm/', testDjangoFcm.as_view()),
    path('test-get-not/', testGetNot.as_view()),
    path('subscribe/', subscribeView.as_view()),
    path('getUserNotification/', getUserNotification.as_view(), name='getUserNotification'),

]