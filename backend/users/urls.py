from django.urls import path
from .views import GetOtp,validateOtp


urlpatterns=[

    path('get-otp/', GetOtp.as_view(), name='get-otp'),
    path('validate-otp/', validateOtp.as_view(), name='validate-otp'),

]