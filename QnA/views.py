from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.authentication import TokenAuthentication,SessionAuthentication

from .models import Question, Answer
from .serializer import QuestionSerializer,AnswerSerializer

class QuestionVeiwSet(viewsets.ModelViewSet):
    #로그인유저만 question crud 가능
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    #permission_classes = [IsAuthenticated]
    queryset = Question.objects.all().order_by('-id')
    serializer_class = QuestionSerializer

    def perform_create(self,serializer):
        serializer.save(author = self.request.user)

class AnswerViewSet(viewsets.ModelViewSet):
    def list(self,request):
        #authentication_classes = [TokenAuthentication, SessionAuthentication]
        #if request.user.is_authenticated:
        queryset = Answer.objects.filter(question_num=request.data.get('question_num',''))
        serializer = AnswerSerializer(queryset, many = True)
        return Response(serializer.data, status = status.HTTP_201_CREATED)
        
        #else:
            #return Response(status = status.HTTP_400_BAD_REQUEST)


    def create(self,request):
        authentication_classes = [TokenAuthentication, SessionAuthentication]
        '''{
        "author":"user3",
        "date":"null",
        "question_num":"0",
        "title": "answer",
        "content": "answer"
        } '''
       # if request.user.is_authenticated:
        q = self.get_queryset()
        q = Question.objects.get(pk=request.data.get('question_num',''))
        serializer = AnswerSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(q, request.data)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
        #else:
        #    return Response(status = status.HTTP_400_BAD_REQUEST)

