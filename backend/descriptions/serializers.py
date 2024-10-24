from rest_framework.serializers import ModelSerializer

from descriptions.models import Description


class DescriptionSerializer(ModelSerializer):
    class Meta:
        model = Description
        fields = (
            "id",
            "content",
            "page",
        )
