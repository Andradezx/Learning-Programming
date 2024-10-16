from django.db import models


class User(models.Model):
    user_code = models.CharField(unique=True,)
    name = models.CharField(max_length= 100) 
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)
    address = models.CharField(max_length=250)
    phone = models.CharField(max_length=12)
    cpf = models.CharField(max_length=12, unique=True)
    date_birth = models.DateField()




