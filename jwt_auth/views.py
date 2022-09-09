from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
User = get_user_model()


# Create your views here.

class RegisterView(APIView):

    def post(self, request):
        print("request data", request.data)
        return Response(request.data)
