from django.urls import path
from vacations import views

urlpatterns = [
    path('vacations/', views.vacation_list),
    path('vacations/<int:pk>/', views.vacation_detail),
    path('vacations/edit_annual/<int:pk>/', views.edit_annual),
    path('vacations/edit_detail/<int:pk>', views.edit_detail),
]