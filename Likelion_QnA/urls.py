from django.contrib import admin
from django.urls import path,include
import QnA.views
import SignUp.views
from rest_framework import urls
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('qna/',include('QnA.urls')),
    path('signup/',include('SignUp.urls')),
    path('api-auth',include('rest_framework.urls'))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
