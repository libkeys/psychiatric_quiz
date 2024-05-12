from django.urls import path

from . import views

urlpatterns = [
    path("sign_in_data", views.sign_in_data),
    path("sign_up_data", views.sign_up_data),
]