from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from content.models import BodyCard, CardContent, Page, PageBody, PageHeading
from content.serializers import PageHeadingSerializer, PageSerializer


class ContentDataTestCase(TestCase):

    def setUp(self):
        """Set up test data"""
        self.client = APIClient()
        self.test_data = self.create_test_data()

    def create_test_data(self):
        page = Page.objects.create(name="Test Page 1")

        page_heading = PageHeading.objects.create(
            page=page,
            main_heading="Test Header 1",
            sub_heading="Test Subheading 1",
            description="Test description for the header section.",
        )

        body_section = PageBody.objects.create(page=page, label="Test Body Section 1")

        body_card_1 = BodyCard.objects.create(
            body=body_section, title="Test Body Card 1"
        )
        card_content_1 = CardContent.objects.create(
            card=body_card_1, description="Test content for body card 1."
        )

        body_card_2 = BodyCard.objects.create(
            body=body_section, title="Test Body Card 2"
        )
        card_content_2 = CardContent.objects.create(
            card=body_card_2, description="Test content for body card 2."
        )

        return {
            "page": page,
            "page_heading": page_heading,
            "body_section": body_section,
            "body_card_1": body_card_1,
            "card_content_1": card_content_1,
            "body_card_2": body_card_2,
            "card_content_2": card_content_2,
        }

    def test_get_all_content(self):
        """Test getting all content"""
        response = self.client.get(reverse("content-data"))

        page_serializer = PageSerializer([self.test_data["page"]], many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, page_serializer.data)

    def test_get_content_by_page(self):
        """Test filtering content by page"""
        page_reference = "test page"
        response = self.client.get(reverse("content-detail", args=(page_reference,)))
        page = Page.objects.filter(name=page_reference).first()
        section = PageHeading.objects.filter(page=page)
        section_serializer = PageHeadingSerializer(section, many=True)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, section_serializer.data)
