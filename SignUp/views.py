from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from datetime import datetime
from rest_framework.permissions import IsAdminUser
from rest_framework.authentication import TokenAuthentication,SessionAuthentication
from .models import MgmtUser,LionUser
from .serializer import MgmtUserSerializer,LionUserSerializer

#staff 만 접근가능

class MgmtUserViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAdminUser]
    queryset = MgmtUser.objects.all().order_by('-id')
    serializer_class = MgmtUserSerializer
   

@api_view(['POST'])
def signup_create(request):
    '''
    {
        "username":"name",
        "password":"asdf",
        "year":2020,
        "student_id":"12345",
        "permission":"False"
    }
    '''
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAdminUser]
    if request.method == 'POST':
        serializer = LionUserSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            list_q = MgmtUser.objects.get(year = datetime.today().year) #현재년도의 기수만 가입가능.
            STUDENT_ID = list_q.student_id
            lion_list=STUDENT_ID.split(',')
            student_id = request.data.get('student_id')
            if student_id in lion_list:
                print('allow')
                serializer.create(request.data)
            else:
                print('deny')
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

