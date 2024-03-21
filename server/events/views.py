from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Event,Users
from .serializers import EventSerializer,UserSerializer,SignInSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, get_user_model
from django.views.decorators.csrf import csrf_exempt

class EventView(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-id')
    serializer_class = EventSerializer
    
    def get(self, request):
        # Your logic for handling GET requests here
        return super().get(request)

    def create(self, request):
        event = Event.objects.create(
            event_name=request.data["event_name"],
            data=request.data["data"],
            location=request.data["location"],
            image=request.data["image"],
            is_liked=False
        )
        serializer = self.get_serializer(event)
        return Response(serializer.data)

class EventLikedView(viewsets.ModelViewSet):
    queryset=Event.objects.filter(is_liked=True)
    serializer_class = EventSerializer
    
    def get(self, request):
        return EventSerializer
    
    

class UserView(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by('-id')
    serializer_class = UserSerializer
    
    def create(self, request,*args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # Hashing password before storing
            user.save()
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        return Response({'message': 'Failed to create user'}, status=status.HTTP_400_BAD_REQUEST)

class LoginView(viewsets.ModelViewSet):
    serializer_class = SignInSerializer  # Define the serializer class here

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')
        
        # Retrieve the user from the database based on the provided email
        try:
            user = Users.objects.get(email=email)
        except Users.DoesNotExist:
            # User with the provided email does not exist
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
        try:
            # Retrieve the user from the database based on the provided email and password
            user = Users.objects.get(email=email, password=password)
            # If the user is found, return a success message
            return Response({'message': 'User signed in successfully'}, status=status.HTTP_200_OK)
        except Users.DoesNotExist:
            # If the user is not found or the password is incorrect, return an error message
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
        # Manually compare the provided password with the user's password
        # if user.check_password(password):
        #     # Passwords match, user authenticated
        #     return Response({'message': 'User signed in successfully'}, status=status.HTTP_200_OK)
        # else:
        #     # Passwords do not match
        #     return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)# class UserView(APIView):
#     def post(self, request):
#         user_name = request.data.get('user_name')
#         email = request.data.get('email')
#         password = request.data.get('password')

#         if user_name and email and password:
#             user = Users.objects.create(
#                 user_name=user_name,
#                 email=email,
#                 password=password
#             )
#             return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
#         else:
#             return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)


