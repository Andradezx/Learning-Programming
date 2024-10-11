from django.urls import path
from .views import register_user,login_user

urlpatterns = [
    path('', register_user, name='index'),
    path('login/', login_user, name='login'),
    path('home/', login_user, name='home')
    # path('logout/', logout_user, name='logout')
]