from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

class LionUser(AbstractUser):
    year = models.IntegerField(default=0, null=False)
    student_id = models.IntegerField(default=0, null=False) 

class MgmtUser(models.Model):
    # year에 현재년도, student_id에 가입한 회원 학번전체입력 -> 리스트상태로 저장 
    # 가입신청 들어올때마다 year로 기수찾고 거기에 해당하는 student_id 돌면서 학번찾기. 
    objects = models.Manager()
    year = models.IntegerField(default=0, null=False) 
    student_id = models.TextField()
    