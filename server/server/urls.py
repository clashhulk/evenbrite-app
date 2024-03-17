
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from events.views import EventView,EventLikedView,UserView
from rest_framework import routers



route = routers.DefaultRouter()
route.register("events", EventView , basename="eventview")
route.register("signup", UserView , basename="userview")
route.register("liked-event", EventLikedView , basename="eventlikedview")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
