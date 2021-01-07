from django.urls import path,include
from . import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

q_router = routers.DefaultRouter()
q_router.register('',views.QuestionVeiwSet)

a_router = routers.DefaultRouter()
a_router.register('',views.AnswerViewSet,basename='Answer')

urlpatterns = [
    path('question/',include(q_router.urls)),
    path('answer/',include(a_router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)