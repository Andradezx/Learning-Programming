from django.shortcuts import render,redirect


def index_render (request):
   return render(request,'shop.html')


def start_page (request):
   return render(request,'starter-page.html')


