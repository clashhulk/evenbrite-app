from django.db import models
# Create your models here.

class Event(models.Model):
    event_name=models.CharField(max_length=150, null=False,blank=False)
    data=models.TextField()
    location=models.TextField()
    date=models.DateTimeField( auto_now_add=True)
    image=models.ImageField(upload_to='uploads/images')
    is_liked=models.BooleanField(default=False)
    
    def __str__(self):
        return self.event_name


class Users(models.Model):
    user_name=models.CharField(max_length=150, null=False,blank=False)
    email=models.EmailField(max_length=150, null=False,blank=False)
    password=models.CharField(max_length=150)

    def __str__(self):
        return self.user_name
    