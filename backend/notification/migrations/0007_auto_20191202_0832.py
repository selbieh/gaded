# Generated by Django 2.2.7 on 2019-12-02 08:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notification', '0006_auto_20191201_1212'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='redirect',
            field=models.CharField(blank=True, default=None, max_length=125),
        ),
    ]