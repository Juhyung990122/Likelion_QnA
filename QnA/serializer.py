from .models import Question
from .models import Answer
from rest_framework import serializers

class QuestionSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Question
        fields = ('author_name','pk','title','date','content','image','views_num')

class AnswerSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Question
        fields = ('author_name','pk','title','date','content','image','views_num')