from django.urls import path
from .views import register_user,login_user,logout_user,check_login

urlpatterns = [
    path('', register_user, name='cadastro'),
    path('login/', login_user, name='login'),
    path('home/', check_login, name='home'),
    path('logout/', logout_user, name='logout')
]