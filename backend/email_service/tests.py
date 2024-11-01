from django.core import mail
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class EmailServiceTests(APITestCase):
    def test_send_email_success(self):
        data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test message.",
        }
        response = self.client.post(reverse("send-email"), data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["message"], "Email sent successfully!")
        self.assertEqual(len(mail.outbox), 1)  # Check that one email was sent

    def test_send_email_invalid(self):
        data = {
            "name": "",
            "email": "invalid-email",
            "message": "",
        }
        response = self.client.post(reverse("send-email"), data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("name", response.data)  # Validate that name error is included
        self.assertIn("email", response.data)  # Validate that email error is included
        self.assertIn(
            "message", response.data
        )  # Validate that message error is included
