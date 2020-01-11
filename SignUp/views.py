from django.shortcuts import render,get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

from .models import MgmtUser
from .serializer import MgmtUserSerializer

class MgmtUserViewSet(viewsets.ModelViewSet):
    queryset = MgmtUser.objects.all().order_by('-id')
    serializer_class = MgmtUserSerializer
