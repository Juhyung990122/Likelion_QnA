from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

from .models import Question, Answer
from . serializer import QuestionSerializer,AnswerSerializer

class QuestionVeiwSet(viewsets.ModelViewSet):
    queryset = Question.objects.all().order_by('-id')
    serializer_class = QuestionSerializer

    #def perform_create(self,serializer):
        #serializer.save(author = self.request.user)

@api_view(['GET'])
def Answer_list(request,question_id):
    if request.method == 'GET':
        queryset = Answer.objects.all()
        serializer = AnswerSerializer(queryset, many = True)
        return Response(serializer.data)

@api_view(['POST'])
def Answer_create(request,question_id):
    if request.method == 'POST':
        q = Question.objects.get(pk=question_id)
        serializer = AnswerSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(q, request.data)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)