from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from vacations.models import Vacation
from vacations.serializers import VacationSerializer


@csrf_exempt
def vacation_list(request):
    """
    List all code vacations, or create a new vacation.
    """
    if request.method == 'GET':
        vacations = Vacation.objects.all()
        serializer = VacationSerializer(vacations, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = VacationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def vacation_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        vacation = Vacation.objects.get(pk=pk)
    except Vacation.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = VacationSerializer(vacation)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = VacationSerializer(vacation, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        vacation.delete()
        return HttpResponse(status=204)