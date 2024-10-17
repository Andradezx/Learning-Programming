from django.urls import path
from .views import index_render,start_page

urlpatterns = [
    path('loja', index_render, name='shop'),
    path('start/',start_page, name='start')

    ]