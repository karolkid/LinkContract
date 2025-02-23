from django.urls import path
from .views import UserProfileView

# 为 UserProfileView 添加路由，访问路径将是 /api/profile/。
urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user_profile'),
]