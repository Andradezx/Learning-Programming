from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import HttpResponse
from .models import User
from .forms import UserForm


def register_user(request):
    if request.method == 'POST':
        form = UserForm(request.POST)

        if form.is_valid():
            form.save()
            return render(request,'index.html')
        
        return render(request,'index.html')
