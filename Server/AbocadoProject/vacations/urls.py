from django.urls import path
from vacations import views

urlpatterns = [
    path('vacations/', views.vacation_list),
    path('vacations/<int:pk>/', views.vacation_detail),
]