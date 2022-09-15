from django.conf import settings
from datetime import datetime, timedelta
import jwt
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from rest_framework.views import APIView
from django.contrib.auth import get_user_model

from .serializers.common import UserSerializer
from .serializers.populated import PopulatedUserSerializer

User = get_user_model()


# Create your views here.

class RegisterView(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        print('register line 20')
        try:
            user_to_create.is_valid(True)
            user_to_create.save()

            return Response(user_to_create.data, status=status.HTTP_202_ACCEPTED)
        except Exception as e:
            print(e)
            return Response(e.__dict__ if e.__dict__ else str(e), status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied("Invalid credentials")

        if not user_to_login.check_password(password):
            print("FAILED AT PASSWORD STAGE")
            raise PermissionDenied("Invalid credentials")

        dt = datetime.now() + timedelta(days=7)

        token = jwt.encode(
            {
                "sub": user_to_login.id,
                "exp": int(dt.strftime('%s'))
            },
            settings.SECRET_KEY,
            "HS256"
        )
        print("TOKEN ->", token)

        return Response({"token": token, "message": f"Welcome back {user_to_login.username}"})


class UserProfileView(APIView):

    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise PermissionDenied(detail="Invalid Credentials")

    def get(self, _request, pk):
        user = self.get_user(pk=pk)
        serialized_user = PopulatedUserSerializer(user)
        print('userprofile', serialized_user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)


class SignedInUserProfileView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request):
        serialized_user = PopulatedUserSerializer(request.user)
        print('userprofile', serialized_user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)
