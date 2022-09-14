from rest_framework import serializers
from .common import UserSerializer
from reviews.serializers.populated import PopulatedReviewSerializer


class PopulatedUserSerializer(UserSerializer):
    reviews = PopulatedReviewSerializer(many=True)
