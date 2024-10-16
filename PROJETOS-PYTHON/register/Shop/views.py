from django.shortcuts import render,redirect


def index_render (request):
   return render(request,'shop.html')
