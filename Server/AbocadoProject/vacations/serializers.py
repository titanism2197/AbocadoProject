from rest_framework import serializers
from vacations.models import Vacation



class AnnualListingField(serializers.RelatedField):
    def to_representation(self, value):
        data = {
            "day": value.day,
        }
        return data

class DetailField(serializers.RelatedField):
    def to_representation(self, value):
        data = {
            "day": value.day,
            "title": value.title,
            "id": value.pk
        }
        return data
        
class VacationSerializer(serializers.ModelSerializer):
    annual = AnnualListingField(many=True, read_only=True)
    detail = DetailField(many=True, read_only=True)

    class Meta:
        model = Vacation
        fields = ['id', 'title', 'start_date', 'end_date', 'day', 'annual', 'detail']