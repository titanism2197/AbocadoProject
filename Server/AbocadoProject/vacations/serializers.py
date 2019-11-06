from rest_framework import serializers
from vacations.models import Vacation

class VacationSerializer(serializers.ModelSerializer):
    anuual = serializers.StringRelatedField(many=True)
    reward = serializers.StringRelatedField(many=True)
    consolation = serializers.StringRelatedField(many=True)
    prize = serializers.StringRelatedField(many=True)
    petition = serializers.StringRelatedField(many=True)
    class Meta:
        model = Vacation
        fields = ['id', 'title', 'start_date', 'end_date', 'day', 
                'anuual', 'reward', 'consolation', 'prize', 'petition']