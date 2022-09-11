from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticated


from .models import Favorite

from .serializers.common import FavoriteSerializer


class FavoriteListView(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data['owner'] = request.user.id
        favorite_to_add = FavoriteSerializer(data=request.data)
        if favorite_to_add.is_valid():
            favorite_to_add.save()
            return Response(favorite_to_add.data, status=status.HTTP_201_CREATED)
        return Response(favorite_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class FavoriteDetailView(APIView):
    permission_classes = (IsAuthenticated, )

    def get_favorite(self, pk):
        try:
            favorite = favorite.objects.get(pk=pk)
            return favorite
        except favorite.DoesNotExist:
            raise NotFound(detail="🆘 favorite not found")

    def delete(self, request, pk):
        favorite_to_delete = self.get_favorite(pk=pk)
        if favorite_to_delete.owner != request.user:
            raise PermissionDenied(detail="Unauthorised")
        favorite_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
