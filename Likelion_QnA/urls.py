from django.contrib import admin
from django.urls import path,include
import QnA.views
import SignUp.views
from rest_framework import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('QnA.urls')),
    path('api-auth',include('rest_framework.urls'))
]
