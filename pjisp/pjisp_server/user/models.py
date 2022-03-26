from typing import Type
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.

class AppUserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password):
        if first_name is None:
            raise TypeError("First name cannot be empty")
        if last_name is None:
            raise TypeError("Last name cannot be empty")
        if email is None:
            raise TypeError("Email cannot be empty")

        user = self.model(email=self.normalize_email(email), first_name=first_name, last_name=last_name)
        user.set_password(make_password(password))
        user.save(using=self._db)

        return user

    def create_superuser(self, email, first_name, last_name, password, **extra_fields):
        if first_name is None:
            raise TypeError("First name cannot be empty")
        if last_name is None:
            raise TypeError("Last name cannot be empty")
        if email is None:
            raise TypeError("Email cannot be empty")

        user = self.create_user(email=self.normalize_email(email), first_name=first_name, last_name=last_name, password=make_password(password))
        #user.set_password(make_password(password))
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class AppUser(AbstractBaseUser):
    email = models.EmailField(max_length=128, unique=True, null=False, blank=False)
    first_name = models.CharField(max_length=64, blank=False, null=False, unique=False)
    last_name = models.CharField(max_length=64, blank=False, null=False, unique=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = AppUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']


    def __str__(self):
        return "Current user is: {}: {} {}".format(self.email, self.first_name, self.last_name)

    def has_perm(self, per, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True
