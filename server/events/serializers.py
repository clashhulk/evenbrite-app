from rest_framework import serializers
from .models import Event,Users
from django.contrib.auth import get_user_model

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
        
class SignInSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['email', 'password']
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = ['id', 'username', 'email', 'password']
#         extra_kwargs = {'password': {'write_only': True}}  # To ensure password is write-only

#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         return user
