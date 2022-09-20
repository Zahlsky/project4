from rest_framework import serializers
from reviews.serializers.populated import PopulatedReviewSerializer
from django.contrib.auth import get_user_model
User = get_user_model()


class PopulatedUserSerializer(serializers.ModelSerializer):
    reviews = PopulatedReviewSerializer(many=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'profile_image',
                  'password', 'reviews')
