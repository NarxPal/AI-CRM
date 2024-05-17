from django.db import models
from django.contrib.auth.models import User

# models in python are basically for db schema

class Contacts(models.Model):
    name = models.CharField(max_length = 100)
    email = models.EmailField()
    phone_number = models.CharField(max_length = 15)


    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def get_email(self):
        return self.user.email

    def set_password(self, new_password):
        self.user.set_password(new_password)
        self.user.save()

    def __str__(self):
        return self.user.username