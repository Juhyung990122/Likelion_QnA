from django.urls import path,include
from SignUp import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('mgmtuser',views.MgmtUserViewSet)

urlpatterns = [
     path('',include(router.urls)),
]