# Generated by Django 2.2.7 on 2019-11-23 12:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('advertise', '0011_auto_20191123_1216'),
    ]

    operations = [
        migrations.AddField(
            model_name='advertise',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='advertise.category'),
        ),
    ]
