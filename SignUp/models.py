from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

class LionUser(AbstractUser):
    year = models.IntegerField(default=0, null=False)
    student_id = models.IntegerField(default=0, null=False)