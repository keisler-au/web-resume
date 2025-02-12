import logging
import os
from smtplib import SMTPException

from django.core.mail import EmailMessage
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from email_service.serializers import EmailSerializer

logger = logging.getLogger("__name__")


class SendEmailView(APIView):
    def post(self, request):
        """Send email with input from Contact form"""
        serializer = EmailSerializer(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data["name"]
            user_email_address = serializer.validated_data["email"]
            message = serializer.validated_data["message"]
            files = serializer.validated_data.get("files", None)

            subject = f"Web Resume Contact: {name}, {user_email_address}"
            body = f"From: {name}\nEmail: {user_email_address}\n\nMessage:\n{message}"
            email = EmailMessage(
                subject=subject,
                body=body,
                from_email=os.getenv("HOST_USER_EMAIL"),
                to=[os.getenv("HOST_USER_EMAIL")],
            )
            email.reply_to = [user_email_address]

            if files:
                for file in files:
                    email.attach(file.name, file.read(), file.content_type)
            try:
                email.send(fail_silently=False)
                return Response(
                    {"message": "Email sent successfully!"}, status=status.HTTP_200_OK
                )
            except SMTPException as e:
                logger.error(f"SMTP error occurred when sending email: {str(e)}")
                return Response(
                    {"error": f"SMTP error: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
            except Exception as e:  # pylint: disable=broad-except
                logger.error(f"Error occurred when sending email: {str(e)}")
                return Response(
                    {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

        logger.error(f"Serialized data is invalid: {str(serializer.errors)}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
