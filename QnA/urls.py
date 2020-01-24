from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('question',views.QuestionVeiwSet)

urlpatterns = [
    path('',include(router.urls)),
    path('answer_list/<int:question_id>',views.Answer_list),
    path('answer_create/<int:question_id>',views.Answer_create),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)