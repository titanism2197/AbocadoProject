from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from vacations.views import VacationList, VacationDetail, AnnualDetail, DetailDetail

urlpatterns = [
    path('vacations/', VacationList.as_view()),
    path('vacations/<int:pk>/', VacationDetail.as_view()),
    path('vacations/annual/<int:pk>/', AnnualDetail.as_view()),
    path('vacations/detail/<int:pk>', DetailDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)