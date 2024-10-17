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

        senha = request.POST.get('password')
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



# def login_user(request):
#     # render(request,'login.html')
#     if request.method == 'POST':
#         useremail = request.POST['email']
#         userpassword = request.POST['password']
#         try: 
#             # success = User.objects.get(email = useremail, password = userpassword)
#               user = User.objects.get(email = useremail)
#               if check_password(userpassword, user.password):
#                 request.session['userID'] = user.id
#                 request.session['user_name'] = user.name
#                 messages.success(request,'Logado com uscesso')
#                 return redirect('home')   
#                 print('chegou aqui1')
#               messages.error(request, 'Senha inválida')                               
#         except User.DoesNotExist:
#          messages.error(request,"Usuario Invalido")
#         return render(request, 'login.html')
# print('chegou aqui2') 

def login_user(request):
    if request.method == 'POST':
        useremail = request.POST['email']
        userpassword = request.POST['password']
        try: 
            # success = User.objects.get(email = useremail, password = userpassword)
            user = User.objects.get(email=useremail)  # Busca o usuário pelo email
            print('Usuário encontrado:', user)  # Debugging
            
            # if check_password(userpassword, user.password):  # Verifica a senha
            request.session['userID'] = user.id  # Armazena o ID do usuário na sessão
            request.session['user_name'] = user.name  # Armazena o nome do usuário na sessão
            messages.success(request, 'Logado com sucesso!')  # Mensagem de sucesso
            print('Redirecionando para home...')  # Debugging
            return redirect('home')  # Redireciona para a página inicial
            # else:
            messages.error(request, 'Senha inválida')  # Mensagem de erro para senha inválida
        except User.DoesNotExist:
            messages.error(request, "Usuário inválido")  # Mensagem de erro se o usuário não for encontrado
    return render(request, 'login.html')  # Renderiza a página de login





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