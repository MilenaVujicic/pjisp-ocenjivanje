from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
# Create your views here.

@csrf_exempt
def randomize_data(request):
    return JsonResponse(status=200)