from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('question',views.QuestionVeiwSet)
router.register('answer',views.AnswerViewSet)

urlpatterns = [
    path('',include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)