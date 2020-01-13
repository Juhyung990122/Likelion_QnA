from .models import LionUser,MgmtUser
from rest_framework import serializers

class MgmtUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MgmtUser
        fields = ('year','student_id')

class LionUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = LionUser
        fields = ('year','student_id','permission')

   