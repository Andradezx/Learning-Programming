from django.urls import path
from  .views import register_user

urlpatterns = [
    path('', register_user, name='index'),
    # path('cadastre/', check_login, name='home'),
    # path('logout/', logout_user, name='logout')
]