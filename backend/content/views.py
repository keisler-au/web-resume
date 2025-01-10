from rest_framework.generics import ListAPIView

from content.models import Page
from content.serializers import PageSerializer


class ContentData(ListAPIView):
    serializer_class = PageSerializer

    def get_queryset(self):
        page_name = self.kwargs.get("page", None)
        filter_page = {"name": page_name} if page_name else {}

        return Page.objects.filter(**filter_page).prefetch_related(
            "heading", "body", "body__cards", "body__cards__content"
        )
