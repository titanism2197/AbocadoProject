# Generated by Django 3.0 on 2019-12-14 05:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacations', '0007_auto_20191214_1430'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detail',
            name='title',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]