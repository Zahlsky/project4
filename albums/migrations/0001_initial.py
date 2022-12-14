# Generated by Django 4.1.1 on 2022-09-13 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('genres', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default=None, max_length=200)),
                ('artist', models.CharField(default=None, max_length=200)),
                ('release_date', models.CharField(default=None, max_length=200)),
                ('album_image', models.CharField(default=None, max_length=500)),
                ('critic1_rating', models.PositiveIntegerField(default=None)),
                ('critic2_rating', models.PositiveIntegerField(default=None)),
                ('critic1_link', models.CharField(default=None, max_length=500)),
                ('critic2_link', models.CharField(default=None, max_length=500)),
                ('genres', models.ManyToManyField(related_name='albums', to='genres.genre')),
            ],
        ),
    ]
