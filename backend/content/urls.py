from django.urls import path

from content.views import ContentData

urlpatterns = [
    path("", ContentData.as_view(), name="content-data"),
    path("<str:page>/", ContentData.as_view(), name="content-detail"),
]
