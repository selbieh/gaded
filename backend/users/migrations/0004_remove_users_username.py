# Generated by Django 2.2.7 on 2019-11-11 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20191111_1223'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='users',
            name='username',
        ),
    ]
