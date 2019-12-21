from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from vacations.views import VacationList, VacationDetail, DetailList, DetailDetail, VacationInfoList

urlpatterns = [
    path('vacations/', VacationList.as_view()),
    path('vacations/<int:pk>/', VacationDetail.as_view()),
    path('vacations/detail/', DetailList.as_view()),
    path('vacations/detail/<int:pk>/', DetailDetail.as_view()),
    path('vacations/info/', VacationInfoList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)