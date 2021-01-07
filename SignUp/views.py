from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from datetime import datetime
from .models import MgmtUser,LionUser
from .serializer import MgmtUserSerializer,LionUserSerializer

class MgmtUserViewSet(viewsets.ModelViewSet):
    #스태프만 접근가능
    #authentication_classes = [TokenAuthentication, SessionAuthentication]
    #permission_classes = [IsAdminUser]
    queryset = MgmtUser.objects.all().order_by('-id')
    serializer_class = MgmtUserSerializer
   

class LionUserViewSet(viewsets.ModelViewSet):
    queryset = LionUser.objects.all().order_by('-id')
    serializer_class = LionUserSerializer
    def create(self,request):
        '''{
            "username":"name",
            "password":"asdf",
            "year":2020,
            "student_id":"12345",
            "permission":"False"
        }'''
        #authentication_classes = [TokenAuthentication, SessionAuthentication]
        serializer = LionUserSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            list_q = MgmtUser.objects.get(year = datetime.today().year-1) #현재년도의 기수만 가입가능.
            STUDENT_ID = list_q.student_id
            lion_list=STUDENT_ID.split(',')
            print(lion_list)
            student_id = request.data.get('student_id')
            if student_id in lion_list:
                user = serializer.create(request.data)
                return Response(status = status.HTTP_201_CREATED)
            else:
                msg = 'deny'
                return Response(msg, status = status.HTTP_400_BAD_REQUEST)
            
