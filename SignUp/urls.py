from django.urls import path,include
from SignUp import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

mgmt_router = DefaultRouter()
mgmt_router.register('',views.MgmtUserViewSet)
user_router = DefaultRouter()
user_router.register('',views.LionUserViewSet)

urlpatterns = [
     path('mgmtuser/',include(mgmt_router.urls)),
     path('lionuser/',include(user_router.urls)),
]