from django.contrib import admin
from vacations.models import Vacation, Detail, VacationInfo

admin.site.register(Vacation)
admin.site.register(Detail)
admin.site.register(VacationInfo)