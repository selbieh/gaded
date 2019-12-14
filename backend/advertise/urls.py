from django.urls import path
from .views import categories





urlpatterns=[

    path('get-categories/',categories.as_view())
]