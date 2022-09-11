from genres.serializers.common import GenreSerializer
from .common import AlbumSerializer
from reviews.serializers.populated import PopulatedReviewSerializer
from genres.serializers.common import GenreSerializer


class PopulatedAlbumSerializer(AlbumSerializer):
    reviews = PopulatedReviewSerializer(many=True)
    genres = GenreSerializer(many=True)


class AlbumGenreSerializer(AlbumSerializer):
    genres = GenreSerializer(many=True)
