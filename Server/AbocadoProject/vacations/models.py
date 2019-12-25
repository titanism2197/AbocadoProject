from django.db import models
from django.contrib.auth.models import User  
import datetime

class Vacation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    title = models.CharField(max_length=100, null=True, blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    day = models.IntegerField(null=True, blank=True)    
    is_gone = models.BooleanField(null=True, blank=True)

    def checkIsGone(self):
        if datetime.date.today() > self.start_date:
            return True
        else:
            return False

    def __str__(self):
        return self.title


class Detail(models.Model):
    ANNUAL = 'ANN'
    CONSOLATION = 'CON'
    PRIZE = 'PR'
    REWARD = 'RE'
    PETITION = 'PE'

    TYPE_OF_DETAIL_CHOICES = [
        (ANNUAL, '연가'),
        (CONSOLATION, '위로'),
        (PRIZE, '포상'),
        (REWARD, '보상'),
        (PETITION, '청원'),
    ]

    type_of_detail = models.CharField(
        max_length=10,
        choices=TYPE_OF_DETAIL_CHOICES,
        default=ANNUAL,
    )
    vacation = models.ForeignKey(Vacation, related_name='detail', on_delete=models.CASCADE)
    day = models.IntegerField(null=True, default=0)
    title = models.CharField(max_length=100, null=True, blank=True)
    is_used = models.BooleanField(null=True, blank=True, default=False)
    
    def __str__(self):
        return "%s %s : %d 일" %(self.type_of_detail, self.title, self.day)


class VacationInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total = models.IntegerField(blank=True, null=True)
    gone = models.IntegerField(blank=True, null=True)
    left = models.IntegerField(blank=True, null=True)

    def calculateTotal(self):
        q = Vacation.objects.filter(user=self.user)
        total = 0
        for i in range(len(q)):
            total += q[i].day
        return total

    def calculateGone(self):
        q = Vacation.objects.filter(user=self.user, is_gone=True)
        gone = 0
        for i in range(len(q)):
            gone += q[i].day
        return gone

    def __str__(self):
        return "%s 의 휴가요약 " %(self.user)