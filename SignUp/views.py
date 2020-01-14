from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from datetime import datetime

from .models import MgmtUser
from .serializer import MgmtUserSerializer,LionUserSerializer

class MgmtUserViewSet(viewsets.ModelViewSet):
    queryset = MgmtUser.objects.all().order_by('-id')
    serializer_class = MgmtUserSerializer
   

@api_view(['POST'])
def signup_create(request):
    if request.method == 'POST':
        serializer = LionUserSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            list_q = MgmtUser.objects.get(year = datetime.today().year) #현재년도의 기수만 가입가능.
            STUDENT_ID = list_q.student_id
            lion_list=STUDENT_ID.split(',')
            student_id = request.data.get('student_id')
            print(lion_list)
            if student_id in lion_list:
                print('allow')
                serializer.save()
            else:
                print('deny')
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

