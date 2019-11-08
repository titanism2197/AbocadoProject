# Generated by Django 2.2.6 on 2019-11-06 04:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vacations', '0004_auto_20191012_0910'),
    ]

    operations = [
        migrations.AlterField(
            model_name='annual',
            name='vacation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='annual', to='vacations.Vacation'),
        ),
        migrations.AlterField(
            model_name='consolation',
            name='vacation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='consolation', to='vacations.Vacation'),
        ),
        migrations.AlterField(
            model_name='petition',
            name='vacation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='petition', to='vacations.Vacation'),
        ),
        migrations.AlterField(
            model_name='prize',
            name='vacation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='prize', to='vacations.Vacation'),
        ),
        migrations.AlterField(
            model_name='reward',
            name='vacation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reward', to='vacations.Vacation'),
        ),
    ]