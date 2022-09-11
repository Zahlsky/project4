from email.policy import HTTP
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import status
from .models import Review
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .serializers.common import ReviewSerializer
# Create your views here.


class ReviewListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def post(self, request, pk):
        print("request.user", request.user)
        print("request.album", request.data.get('album'))
        review_to_create = ReviewSerializer(data=request.data)

        try:
            review_to_create.is_valid(True)
            review_to_create.save()
            return Response(review_to_create.data, status=status.HTTP_201_CREATED)

        except Exception as e:
            print(e.__dict__)
            return Response(e.__dict__ if e.__dict__ else str(e), status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ReviewDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_review(self, pk):
        try:
            return Review.objects.get(pk=pk)
        except Review.DoesNotExist:
            raise NotFound("review not found")

    def delete(self, request, pk):
        review_to_delete = self.get_review(pk)
        print("Request.user,id >>>", review_to_delete.owner)
        print("Request.user,id >>>", request.user)

        if review_to_delete.owner != request.user:
            raise PermissionDenied("User not Found")

        review_to_delete.delete()

        return Response("review successfully deleted", status=status.HTTP_202_ACCEPTED)

    def put(self, request, pk):
        review_to_update = self.get_review(pk=pk)
        updated_review = ReviewSerializer(review_to_update, data=request.data)
        if review_to_update.owner != request.user:
            raise PermissionDenied("Must be owner to edit review")
        try:
            updated_review.is_valid(True)
            updated_review.save()
            return Response(updated_review.data, status=status.HTTP_202_ACCEPTED)
        except Exception as e:
            print(e)
            return Response(str(e), status=status.HTTP_422_UNPROCESSABLE_ENTITY)
