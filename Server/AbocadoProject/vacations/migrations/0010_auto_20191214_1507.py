# Generated by Django 3.0 on 2019-12-14 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacations', '0009_auto_20191214_1440'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vacation',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vacation',
            name='start_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vacation',
            name='title',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
