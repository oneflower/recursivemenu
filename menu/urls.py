from django.urls import path

from . import views

app_name = "menu"

urlpatterns = [
    path('menu/', views.MenuList.as_view(), name="menu-list"),
]

