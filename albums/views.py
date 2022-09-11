from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from .models import Album
# from .serializers.common import AlbumSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers.populated import PopulatedAlbumSerializer, AlbumGenreSerializer

# Create your views here.


class AlbumListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        albums = Album.objects.all()
        print("albums-->", albums)
        serialized_albums = AlbumGenreSerializer(albums, many=True)
        print(serialized_albums)
        return Response(serialized_albums.data, status=status.HTTP_200_OK)


class AlbumDetailView(APIView):

    def get_album(self, pk):
        try:
            return Album.objects.get(pk=pk)
        except Album.DoesNotExist:
            raise NotFound(detail="🆘 album not found!")

    def get(self, _request, pk):
        album = self.get_album(pk=pk)
        serialized_album = PopulatedAlbumSerializer(album)
        return Response(serialized_album.data)
