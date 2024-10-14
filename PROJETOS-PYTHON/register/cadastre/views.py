from django.shortcuts import render, redirect
from .models import User
from .forms import UserForm
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth import logout


def register_user(request):

    if request.method == 'POST':
        form = UserForm(request.POST)
        
        if form.is_valid():
            form.save()
            messages.success(request, 'Seus dados foram cadastrados')
            return render(request, 'login.html')
      
    return render(request, 'index.html')  



def login_user(request):
    render(request,'login.html')
    if request.method == 'POST':
        username = request.POST['email']
        userpassword = request.POST['password']
        try: 
            success = User.objects.get(email = username, password = userpassword)
            request.session['userID'] = success.id
            request.session['user_name'] = success.name
            messages.success(request,'Logado com uscesso')
            return redirect('home')                        
        except User.DoesNotExist:
            messages.error(request,"Usuario Invalido")
    return render(request, 'login.html')


def logout_user(request):
    logout(request)
    request.session.flush()
    messages.success(request,'Voce desconectou')
    return redirect('index') 

def check_login(request):
    if 'userID' in request.session:
        return render(request, 'home.html')
    else:
        return redirect('index')