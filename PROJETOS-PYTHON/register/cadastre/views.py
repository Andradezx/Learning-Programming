from django.shortcuts import render, redirect
from .models import User
from .forms import UserForm
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth import logout
from .utils import criptografia,check_password
import bcrypt

# jeito de fazer o cadastro de cliente sem o form

def register_user(request):
    if request.method =='POST':
        name_= request.POST.get('name')
        email_ = request.POST.get('email')
        password_= request.POST.get('password')
        address_ = request.POST.get('address')
        phone_= request.POST.get('phone')
        cpf_ = request.POST.get('cpf')
        date_birth_ =  request.POST.get('date_birth')
        print(f"Nome capturado: {name_}")  # Debugging
        print(f"Dados recebidos: {request.POST}")


        crypt = criptografia(password_)

        client = User(
           name = name_,
           email = email_,
           password = password_,
           address = address_,
           phone = phone_,
           cpf = cpf_,
           date_birth = date_birth_
        )

        client.save()
        return render(request,'login.html')
    return render(request,'index.html')
# ==================================================



# def register_user(request):

#     if request.method == 'POST':
#         form = UserForm(request.POST)
        
#         if form.is_valid():
#             form.save()
#             messages.success(request, 'Seus dados foram cadastrados')
#             return render(request, 'login.html')
      
#     return render(request, 'index.html')  



def login_user(request):
    if request.method == 'POST':
        username = request.POST['email']
        userpassword = request.POST['password']
        try: 
            success = User.objects.get(email = username, password = userpassword)
            request.session['userID'] = success.id
            request.session['user_name'] = success.email
            return redirect('home')
        except User.DoesNotExist:
            messages.error(request,"Usuario Invalido")
    return   render(request,'index.html')


def logout_user(request):
    logout(request)
    request.session.flush()
    messages.success(request,'Voce desconectou')
    return redirect('index') 

def check_login(request):
    if 'userID' in request.session:
        return render(request, 'home.html')
    else:
        return redirect('login')