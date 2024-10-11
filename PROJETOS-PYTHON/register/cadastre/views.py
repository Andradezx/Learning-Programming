from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import HttpResponse
from .models import User
from django.contrib.auth import logout


def register_user(request):
    if request.method == 'POST':
        form = Userforms(request.POST)

        if form.is_valid():
            form.save()
            return render(request,'index.html')
        
        return render(request,'index.html')
