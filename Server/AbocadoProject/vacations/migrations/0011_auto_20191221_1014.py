# Generated by Django 3.0.1 on 2019-12-21 01:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('vacations', '0010_auto_20191214_1507'),
    ]

    operations = [
        migrations.AddField(
            model_name='vacation',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='VacationInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.IntegerField(blank=True, null=True)),
                ('gone', models.IntegerField(blank=True, null=True)),
                ('left', models.IntegerField(blank=True, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
