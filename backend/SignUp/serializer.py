from .models import LionUser,MgmtUser
from rest_framework import serializers

class MgmtUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MgmtUser
        fields = ('year','student_id')

class LionUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = LionUser
        fields = ('username','password','year','student_id','permission')

    def create(self, validated_data):
        user = LionUser(
            username= validated_data['username'],
            student_id = validated_data['student_id'],
            year = validated_data['year'],
            permission = validated_data['permission'])
        user.set_password(validated_data['password'])
        user.save()
        return user