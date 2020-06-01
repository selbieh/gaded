# Generated by Django 2.2.6 on 2019-10-17 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='conatact_us',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254)),
                ('subject', models.CharField(blank=True, max_length=25)),
                ('message', models.TextField(max_length=255)),
                ('seen', models.BooleanField(default=False)),
            ],
        ),
    ]
