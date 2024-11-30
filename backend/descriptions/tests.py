from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from descriptions.models import Page, Section
from descriptions.serializers import PageSerializer, SectionSerializer


class DescriptionListTestCase(TestCase):

    def setUp(self):
        """Set up test data"""
        self.client = APIClient()
        self.page = Page.objects.create(name="Test page 1")
        self.section = Section.objects.create(
            page=1, header="Test header 1", content="Test content 1"
        )

    def test_get_all_descriptions(self):
        """Test getting all descriptions"""
        response = self.client.get(reverse("description-list"))
        page = Page.objects.all()
        page_serializer = PageSerializer(page)
        # section = Section.objects.all()
        # sectionSerializer = SectionSerializer(section)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, page_serializer.data)

    def test_get_descriptions_by_page(self):
        """Test filtering descriptions by page"""
        page_reference = "test page"
        response = self.client.get(
            reverse("description-detail", args=f"{page_reference}")
        )
        sections = Section.objects.filter(page=page_reference)
        serializer = SectionSerializer(sections)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)
