from rest_framework import serializers
from .models import Event,Users
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
        

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            # Check if a user with the given email exists
            user = Users.objects.filter(email=email).exists()
            if user:
                password=Users.objects.filter(password=password).exists()
                # Use Django's built-in authentication to verify the password
                if password:
                    data['user'] = Users.objects.filter(email=email).first()
                else:
                    raise serializers.ValidationError("Unable to log in with provided credentials.")
            else:
                raise serializers.ValidationError("User with this email does not exist.")
        else:
            raise serializers.ValidationError("Must include 'email' and 'password'.")

        return data