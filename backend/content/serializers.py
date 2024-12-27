from rest_framework import serializers

from content.models import BodyCard, CardContent, Page, PageBody, PageHeading


class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = CardContent
        fields = ["id", "description"]


class BodyCardSerializer(serializers.ModelSerializer):
    content = CardSerializer(many=True, read_only=True)

    class Meta:
        model = BodyCard
        fields = ["id", "title", "content"]


class PageBodySerializer(serializers.ModelSerializer):
    cards = BodyCardSerializer(many=True, read_only=True)

    class Meta:
        model = PageBody
        fields = ["id", "label", "cards"]


class PageHeadingSerializer(serializers.ModelSerializer):

    class Meta:
        model = PageHeading
        fields = ["id", "main_heading", "sub_heading", "description"]


class PageSerializer(serializers.ModelSerializer):
    heading = PageHeadingSerializer(many=True, read_only=True)
    body = PageBodySerializer(many=True, read_only=True)

    class Meta:
        model = Page
        fields = ["id", "name", "heading", "body"]
