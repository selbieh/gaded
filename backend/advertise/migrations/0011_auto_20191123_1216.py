# Generated by Django 2.2.7 on 2019-11-23 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advertise', '0010_category_full_name_string'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='full_name_string',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
