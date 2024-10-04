from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import HttpResponse
from .models import User


def login_user(request):
    if request.method == 'POST':
        username = request.POST['email']
        userpassword = request.POST['password']
        try: 
            success = User.objects.get(email = username, password = userpassword)
            request.session['userID'] = success.id
            return redirect('home')
        except User.DoesNotExist:
            messages.error(request,"Usuario Invalido")
    return   render(request,'index.html')

def logout_user(request):
    return

def check_login(request):
    if 'userID' in request.session:
        return render(request,'home.html')
    else:
        return redirect('index')