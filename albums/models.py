from django.db import models

# Create your models here.


class Album(models.Model):
    title = models.CharField(max_length=200, default=None)
    artist = models.CharField(max_length=200, default=None)
    release_date = models.CharField(max_length=200, default=None)
    album_image = models.CharField(max_length=500, default=None)
    genres = models.ManyToManyField(
        "genres.Genre",
        related_name="albums"
    )
    critic1_rating = models.PositiveIntegerField(default=None)
    critic2_rating = models.PositiveIntegerField(default=None)
    critic1_link = models.CharField(max_length=500, default=None)
    critic2_link = models.CharField(max_length=500, default=None)

    def __str__(self):
        return f"{self.title} - {self.artist} ({self.release_date})"
