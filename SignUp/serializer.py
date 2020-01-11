from .models import MgmtUser
from rest_framework import serializers

class MgmtUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MgmtUser
        fields = ('year','student_id')