from rest_framework import serializers
from vacations.models import Vacation



class AnnualListingField(serializers.RelatedField):
    def to_representation(self, value):
        data = {
            "day": value.day
        }
        return data

class ListingField(serializers.RelatedField):
    def to_representation(self, value):
        data = {
            "day": value.day,
            "title": value.title
        }
        return data
        
class VacationSerializer(serializers.ModelSerializer):
    annual = AnnualListingField(many=True, read_only=True)
    reward = ListingField(many=True, read_only=True)
    consolation = ListingField(many=True, read_only=True)
    prize = ListingField(many=True, read_only=True)
    petition = ListingField(many=True, read_only=True)
    class Meta:
        model = Vacation
        fields = ['id', 'title', 'start_date', 'end_date', 'day', 'annual', 'reward', 'consolation', 'prize', 'petition']