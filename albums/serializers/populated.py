from .common import AlbumSerializer
from reviews.serializers.common import ReviewSerializer

class PopulatedAlbumSerializer(AlbumSerializer):
    reviews = ReviewSerializer(many=True)