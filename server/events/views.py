from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Event,Users
from rest_framework import generics, permissions
from django.http import JsonResponse
from django.views.generic import ListView
from .serializers import EventSerializer,UserSerializer,LoginSerializer
from rest_framework import status
from django.views import View
from rest_framework.decorators import api_view
from django.views.decorators.http import require_POST
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
    

class UserView(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by('-id')
    serializer_class = UserSerializer
    
    def create(self, request):
        # Check if email already exists
        print("Hi in requested user view")
        email = request.data.get("email")
        if Users.objects.filter(email=email).exists():
            return Response(
                {"error": "Email ID already registered"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Create user
        user = Users.objects.create(
            user_name=request.data.get("user_name"),
            email=email,
            password=request.data.get("password"),
        )
        serializer = self.get_serializer(user)
        return Response(serializer.data)


class EventLikedView(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-id')
    serializer_class = EventSerializer  
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return Event.objects.filter(is_liked=True)
    
    
@csrf_exempt
def update_like_status(request, event_id):
    try:
        event = Event.objects.get(pk=event_id)
        event.is_liked = not event.is_liked
        print(event.is_liked)
        print(request)
        event.save()
        return JsonResponse({'success': True})
    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)})
    

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            # You can perform further actions here with the authenticated user
            return Response({"message": "Login successful!"}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)