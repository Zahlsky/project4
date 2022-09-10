
from django.db import models

# Create your models here.


class Review(models.Model):
    text = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now=True)
    # one to many realitionship
    # it's important that this is added to the many (the field should be on the many, in this case the review)
    album = models.ForeignKey(
        "albums.Album",  # this argument specifies first the app name and the name of the model class inside of models.py
        # this argument is specifying the name of the field the review data will be returned under when querying the books
        related_name="reviews",
        on_delete=models.CASCADE
    )
