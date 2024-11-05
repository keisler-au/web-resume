# email_service/views.py

import os

from django.core.mail import EmailMessage
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from email_service.serializers import EmailSerializer


class SendEmailView(APIView):
    def post(self, request):
        serializer = EmailSerializer(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data["name"]
            user_email_address = serializer.validated_data["email"]
            message = serializer.validated_data["message"]
            file = serializer.validated_data.get("file", None)

            subject = f"Contact Form Submission from {name}"
            email_body = (
                f"Message: {message}\n\nFrom: {name}\nEmail: {user_email_address}"
            )

            email = EmailMessage(
                subject=subject,
                body=email_body,
                from_email=os.getenv("EMAIL_HOST_USER"),
                to=[os.getenv("EMAIL_HOST_USER")],
            )
            email.reply_to = [user_email_address]

            # Attach file if present
            if file:
                email.attach(file.name, file.read(), file.content_type)

            try:
                email.send(fail_silently=False)
                return Response(
                    {"message": "Email sent successfully!"}, status=status.HTTP_200_OK
                )
            except Exception as e:
                print("this failed = ", e)
                return Response(
                    {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)