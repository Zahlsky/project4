from django.urls import path
from .views import RegisterView, LoginView, UserProfileView, SignedInUserProfileView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/', SignedInUserProfileView.as_view()),
    path('profile/<int:pk>/', UserProfileView.as_view())
]
