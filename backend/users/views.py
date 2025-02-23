from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework.response import Response

from django.views import View
from django.http import JsonResponse


User = get_user_model()

# 一个受保护的API，只有登录用户才能访问，返回用户的基本信息。
class UserProfileView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        return Response({'username': request.user.username, 'role': request.user.role})