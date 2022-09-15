from albums.serializers.common import AlbumSerializer
from .common import ReviewSerializer
from jwt_auth.serializers.common import UserSerializer
from albums.serializers.common import AlbumSerializer


class PopulatedReviewSerializer(ReviewSerializer):
    owner = UserSerializer()
    album = AlbumSerializer()
