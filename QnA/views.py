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



@api_view(['GET'])
def Answer_list(request,question_id):
    #authentication_classes = [TokenAuthentication, SessionAuthentication]
    #if request.user.is_authenticated:
    if request.method == 'GET' :
        queryset = Answer.objects.filter(question_num=question_id)
        serializer = AnswerSerializer(queryset, many = True)
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)    
    #else:
        #return Response(status = status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def Answer_create(request,question_id):
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    '''{
	"author":"user3",
	"date":"null",
	"question_num":"2",
	"title": "answer",
	"content": "answer"
    } '''
    if request.user.is_authenticated:
        if request.method == 'POST' : #username 자동설정으로 변경하기!
            q = Question.objects.get(pk=question_id)
            serializer = AnswerSerializer(data = request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(q, request.data)
                return Response(serializer.data, status = status.HTTP_201_CREATED)
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
    else:
        return Response(status = status.HTTP_400_BAD_REQUEST)

