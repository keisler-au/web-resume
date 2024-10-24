from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from descriptions.models import Description  # Import the model you're using
from descriptions.serializers import DescriptionSerializer  # Import the serializer


class DescriptionListTestCase(TestCase):

    def setUp(self):
        """Set up test data"""
        self.client = APIClient()
        self.description1 = Description.objects.create(
            page=1, content="Test description 1"
        )
        self.description2 = Description.objects.create(
            page=2, content="Test description 2"
        )

    def test_get_all_descriptions(self):
        """Test getting all descriptions"""
        response = self.client.get(reverse("description-list"))
        descriptions = Description.objects.all()
        serializer = DescriptionSerializer(descriptions, many=True)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_descriptions_by_page(self):
        """Test filtering descriptions by page"""
        page_number = 1
        response = self.client.get(reverse("description-detail", args=f"{page_number}"))
        descriptions = Description.objects.filter(page=page_number)
        serializer = DescriptionSerializer(descriptions, many=True)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)
