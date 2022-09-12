from django.db import models

# Create your models here.


class Favorite(models.Model):
    favorites = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    album = models.ForeignKey(
        'albums.Album',
        related_name='favorite',
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='favorites',
        on_delete=models.CASCADE
    )
