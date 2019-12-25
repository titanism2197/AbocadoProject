from rest_framework import serializers
from vacations.models import Vacation, Detail, VacationInfo

class DetailField(serializers.RelatedField):
    def to_representation(self, value):
        data = {
            "day": value.day,
            "title": value.title,
            "id": value.pk
        }
        return data

#### VacationSerailizer #####       
class VacationSerializer(serializers.ModelSerializer):
    detail = DetailField(many=True, read_only=True)

    class Meta:
        model = Vacation
        fields = ['id', 'title', 'start_date', 'end_date', 'day', 'detail', 'is_gone']

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.start_date = validated_data.get('start_date', instance.start_date)
        instance.end_date = validated_data.get('end_date', instance.end_date)
        instance.day = validated_data.get('day', instance.day)
        instance.is_gone = instance.checkIsGone()
        instance.save()
        return instance


#### DetailSerializer #####
class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detail
        fields = ['id', 'day', 'title', 'type_of_detail', 'is_used']

    def update(self, instance, validated_data):
        instance.day = validated_data.get('day', instance.day)
        instance.title = validated_data.get('title', instance.title)
        instance.type_of_detail = validated_data.get('type_of_detail', instance.type_of_detail)
        instance.is_used = validated_data.get('is_used', instance.is_used)
        instance.save()
        return instance


class VacationInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacationInfo
        fields = ['id', 'total', 'gone', 'left']
