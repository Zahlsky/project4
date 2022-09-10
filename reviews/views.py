from email.policy import HTTP
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import status
from .models import Review
from rest_framework.exceptions import NotFound

from .serializers.common import ReviewSerializer
# Create your views here.


class ReviewListView(APIView):
    def post(self, request):
        review_to_create = ReviewSerializer(data=request.data)
        try:
            review_to_create.is_valid(True)
            review_to_create.save()
            return Response(review_to_create.data, status=status.HTTP_201_CREATED)

        except Exception as e:
            print(e.__dict__)
            return Response(e.__dict__ if e.__dict__ else str(e), status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ReviewDetailView(APIView):

    def get_review(self, pk):
        try:
            return Review.objects.get(pk=pk)
        except Review.DoesNotExist:
            raise NotFound("review not found")

    def delete(self, _request, pk):
        review_to_delete = self.get_review(pk)
        review_to_delete.delete()
        return Response("review successfully deleted", status=status.HTTP_202_ACCEPTED)
