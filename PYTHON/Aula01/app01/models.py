from django.db import models

class User(models.Model):

    email = models.CharField(max_length = 100, unique = True)
    password = models.CharField(max_length = 50)

    def __str__(self):
        return self.email
    
