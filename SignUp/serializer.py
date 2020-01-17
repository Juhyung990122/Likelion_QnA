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

    def create_user(self, validated_data):
        user = super().create(validated_data)
        user.name = validated_data['username']
        user.set_password(validated_data['password'])
        user = user.save()
        return user