from django.urls import path

from email_service.views import SendEmailView

urlpatterns = [
    path("send_email/", SendEmailView.as_view(), name="send_email"),
]
