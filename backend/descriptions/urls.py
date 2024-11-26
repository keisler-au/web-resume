from django.urls import path

from .views import DescriptionList

urlpatterns = [
    path("", DescriptionList.as_view(), name="description-list"),
    path("<str:page>/", DescriptionList.as_view(), name="description-detail"),
]
