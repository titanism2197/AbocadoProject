from django.db import models
import datetime

class Vacation(models.Model):
    #User = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    day = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title

    def calculateDay(self):
        day = self.end_date - self.start_date + datetime.timedelta(days=1)
        return day.days


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
    
    def __str__(self):
        return "%s %s : %d 일" %(self.type_of_detail, self.title, self.day)
