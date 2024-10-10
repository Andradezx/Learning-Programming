from django.urls import path
from  .views import login_user,logout_user,check_login

urlpatterns = [
    path('', login_user, name='index'),
    path('cadastre/', check_login, name='home'),
    path('logout/', logout_user, name='logout')
]