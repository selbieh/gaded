from .views import testDjangoFcm,testGetNot,subscribeView,getUserNotification,RegisterDevice,subscribedCategory
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'getUserNotification', getUserNotification, basename='user')
urlpatterns = router.urls+[
    path('test-send-fcm/', testDjangoFcm.as_view()),
    path('test-get-not/', testGetNot.as_view()),
    path('subscribe/', subscribeView.as_view()),
    path('subscribed-category/', subscribedCategory.as_view()),
    path('register-device/', RegisterDevice.as_view()),
    path('', subscribeView.as_view()),

]

# urlpatterns=[
#     path('test-send-fcm/', testDjangoFcm.as_view()),
#     path('test-get-not/', testGetNot.as_view()),
#     path('subscribe/', subscribeView.as_view()),
#     path('', subscribeView.as_view()),
#     path('getUserNotification/', getUserNotification.as_view(), name='getUserNotification'),
#
# ]