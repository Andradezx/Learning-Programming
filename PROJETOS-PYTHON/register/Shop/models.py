from django.db import models
from cadastre.models import User


class Products(models.Model):
    code_product = models.CharField(max_length=100,unique=True)
    name_product = models.CharField(max_length=100)
    price_product = models.FloatField()

    def __str__(self):
        return self.code_product

class Orders(models.Model):
    code_order = models.CharField(max_length=100, unique=True)
    date_order = models.DateField() 
    total_order = models.DecimalField(decimal_places=2, max_digits=8)
    # user_code = models.ForeignKey(User,on_delete=models.PROTECT) #models.User
    code_product = models.ForeignKey(Products,on_delete=models.PROTECT) #models.Products

    def __str__(self):
            return self.code_order
    
class Orderitems(models.Model):
    code_order = models.ForeignKey(Orders,  max_length=100, on_delete=models.CASCADE)  # Vários itens podem pertencer a um pedido
    code_product = models.ForeignKey(Products, on_delete=models.PROTECT)  # Referência ao produto
    qtd_product = models.IntegerField()  # Quantidade do produto