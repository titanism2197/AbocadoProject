from rest_framework import serializers
from vacations.models import Vacation
from vacations.models import Annual
from vacations.models import Detail


class AnnualListingField(serializers.RelatedField):
    def to_representation(self, value):
        data = {
            "day": value.day,
            "id": value.pk,
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

 #### VacationSerailizer #####       
class VacationSerializer(serializers.ModelSerializer):
    annual = AnnualListingField(many=True, read_only=True)
    detail = DetailField(many=True, read_only=True)

    class Meta:
        model = Vacation
        fields = ['id', 'title', 'start_date', 'end_date', 'day', 'annual', 'detail']

    def create(self, validated_data):
        return Vacation.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.start_date = validated_data.get('start_date', instance.start_date)
        instance.end_date = validated_data.get('end_date', instance.end_date)
        instance.day = validated_data.get('day', instance.day)
        instance.save()
        return instance


#### AnnualSerializer ##### 
class AnnualSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annual
        fields = ['id', 'day']

    def update(self, instance, validated_data):
        instance.day = validated_data.get('day', instance.day)
        instance.save()
        return instance


#### DetailSerializer #####
class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detail
        fields = ['id', 'day', 'title', 'type_of_detail']

    def update(self, instance, validated_data):
        instance.day = validated_data.get('day', instance.day)
        instance.title = validated_data.get('title', instance.title)
        instance.type_of_detail = validated_data.get('type_of_detail', instance.type_of_detail)
        instance.save()
        return instance
