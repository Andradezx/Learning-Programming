from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import HttpResponse
from .models import User
from django.contrib.auth import logout
import re


def login_user(request):
    if request.method == 'POST':
        username = request.POST['name']
        useremail = request.POST['email']
        userpassword = request.POST['password']
        useraddress = request.POST['address']
        userphone = request.POST['phone']
        usercpf = request.POST['cpf']
        userbirth = request.POST['date_birth']

        if not username or not useremail or not userpassword or not useraddress or not userphone or not usercpf or not userbirth:
            messages.error(request,'Voce precisa preencher todos os campos')
            return render(request, 'index.html')
        
        if len(userpassword) <8:
            messages.error(request,'Voce precisa ter uma senha com mais de 8 digitos')
        
        try: 
            success = User.objects.get(email = username, password = userpassword)
            request.session['userID'] = success.id
            request.session['user_name'] = success.name
            return redirect('home')
        except User.DoesNotExist:
            messages.error(request,"Usuario Invalido")
    return   render(request,'index.html')

def logout_user(request):
    logout(request)
    request.session.flush()
    return redirect('index') 

def check_login(request):
    if 'userID' in request.session:
        return render(request,'home.html')
    else:
        return redirect('index')