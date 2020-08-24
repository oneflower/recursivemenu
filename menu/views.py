from django.shortcuts import render
from rest_framework.generics import ListAPIView

from .models import Menu
from .serializers import MenuSerializer


class MenuList(ListAPIView):
    queryset = Menu.objects.filter(parent__isnull=True)
    serializer_class = MenuSerializer
