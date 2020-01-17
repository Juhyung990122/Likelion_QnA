from .models import Question
from .models import Answer
from django.contrib.auth.models import User
from SignUp.models import LionUser
from rest_framework import serializers

class QuestionSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Question
        fields = ('author_name','pk','title','date','content','image','views_num')
    

class AnswerSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Answer
        fields = ('author_name','question_num','title','date','content','image')

    def save(self, q, data):
        my_user = LionUser.objects.get(username=data['author'])
        q.answer.create(author=my_user, question_num=data['question_num'], date=data['date'], title=data['title'], content=data['content'])
        q.save()

        