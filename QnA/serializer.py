from .models import Question
from .models import Answer
from django.contrib.auth.models import User
from SignUp.models import LionUser
from rest_framework import serializers

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('author','pk','title','date','content','image','views_num')
    

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('author','question_num','title','date','content','image')

    #def save(self, queryset, data):
    #    queryset.answer.create(author=data['author'], question_num=data['question_num'], title=data['title'], content=data['content'])
    #    queryset.save()

        