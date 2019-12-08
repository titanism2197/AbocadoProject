from django.db import models
import datetime

class Vacation(models.Model):
    #User = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True)
    start_date = models.DateField()
    end_date = models.DateField()
    day = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title

    def calculateDay(self):
        day = self.end_date - self.start_date + datetime.timedelta(days=1)
        return day.days


class Annual(models.Model):
    vacation = models.ForeignKey(Vacation, related_name='annual', on_delete=models.CASCADE)
    day = models.IntegerField()

    def __str__(self):
        return "연가 : %d"   %self.day


class Detail(models.Model):
    CONSOLATION = 'CON'
    PRIZE = 'PR'
    REWARD = 'RE'
    PETITION = 'PE'
    TYPE_OF_DETAIL_CHOICES = [
        (CONSOLATION, '위로'),
        (PRIZE, '포상'),
        (REWARD, '보상'),
        (PETITION, '청원'),
    ]

    type_of_detail = models.CharField(
        max_length=10,
        choices=TYPE_OF_DETAIL_CHOICES,
        default=CONSOLATION,
    )
    vacation = models.ForeignKey(Vacation, related_name='detail', on_delete=models.CASCADE)
    day = models.IntegerField()
    title = models.CharField(max_length=100, null=True)
    
    def __str__(self):
        return "%s %s : %d 일" %(self.type_of_detail, self.title, self.day)


'''
class Reward(models.Model): #보상
    vacation = models.ForeignKey(Vacation, related_name='reward', on_delete=models.CASCADE)
    day = models.IntegerField()
    title = models.CharField(max_length=100, null=True)

    def __str__(self):
        return "보상 %s : %d 일" %(self.title, self.day)

class Consolation(models.Model): #위로
    vacation = models.ForeignKey(Vacation, related_name='consolation', on_delete=models.CASCADE)
    day = models.IntegerField()
    title = models.CharField(max_length=100, null=True)

    def __str__(self):
        return "위로 %s : %d 일" %(self.title, self.day)

class Prize(models.Model): #포상
    vacation = models.ForeignKey(Vacation, related_name='prize', on_delete=models.CASCADE)
    day = models.IntegerField()
    title = models.CharField(max_length=100, null=True)

    def __str__(self):
        return "포상 %s : %d 일" %(self.title, self.day)

class Petition(models.Model):
    vacation = models.ForeignKey(Vacation, related_name='petition', on_delete=models.CASCADE)
    day = models.IntegerField()
    title = models.CharField(max_length=100, null=True)

    def __str__(self):
        return "청원 %s : %d 일" %(self.title, self.day)
'''