from django.urls import path
from .views import index_render

urlpatterns = [
    path('', index_render, name='index')
    ]