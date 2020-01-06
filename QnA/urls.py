from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('question',views.QuestionVeiwSet)
router.register('answer',views.AnswerViewSet)

urlpatterns = [
    path('',include(router.urls)),
]