from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from vacations.models import Vacation, Annual, Detail
from vacations.serializers import VacationSerializer, AnnualSerializer, DetailSerializer

class VacationList(APIView):
    """
    List all Vacation, add Vacation
    """
    def get(self, request, format=None):
        vacations = Vacation.objects.order_by('start_date')
        serializer = VacationSerializer(vacations, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = VacationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacationDetail(APIView):
    """
    Retrieve, update or delete a vacation instance.
    """
    def get_object(self, pk):
        try:
            return Vacation.objects.get(pk=pk)
        except Vacation.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        vacation = self.get_object(pk)
        serializer = VacationSerializer(vacation)
        return Response(serializer.data)

    def put(self, request, pk, format=None): #edit vacation
        vacation = self.get_object(pk)
        serializer = VacationSerializer(vacation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        vacation = self.get_object(pk)
        vacation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AnnualDetail(APIView):

    def get_object(self, pk):
        try:
            return Annual.objects.get(pk=pk)
        except Annual.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        annual = self.get_object(pk)
        serializer = AnnualSerializer(annual)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        annual = self.get_object(pk)
        serializer = AnnualSerializer(annual, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        annual = self.get_object(pk)
        annual.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DetailList(APIView):

    def get(self, request, pk, format=None):
        vacation = Vacation.objects.get(pk=pk)
        details = Detail.objects.get(vacation=vacation)
        serializer = DetailSerializer(details, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

