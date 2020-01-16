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
    permission_classes = [IsAuthenticated]
    queryset = Question.objects.all().order_by('-id')
    serializer_class = QuestionSerializer

    #def perform_create(self,serializer):
        #serializer.save(author = self.request.user)

@api_view(['GET'])
def Answer_list(request,question_id):
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAdminUser]
    if request.method == 'GET':
        queryset = Answer.objects.all()
        serializer = AnswerSerializer(queryset, many = True)
        return Response(serializer.data)

@api_view(['POST'])
def Answer_create(request,question_id):
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAdminUser]
    #question_num은 일일히 입력중..date 는 null로 입력하면 알아서 
    if request.method == 'POST':
        q = Question.objects.get(pk=question_id)
        serializer = AnswerSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(q, request.data)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)