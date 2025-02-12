from rest_framework import serializers


class EmailSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    message = serializers.CharField()
    files = serializers.ListField(
        child=serializers.FileField(),
        required=False,
    )
