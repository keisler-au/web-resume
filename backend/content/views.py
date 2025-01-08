from rest_framework.generics import ListAPIView

from content.models import Page
from content.serializers import PageSerializer


class ContentData(ListAPIView):
    serializer_class = PageSerializer

    def get_queryset(self):
        page_name = self.kwargs.get("page", None)

        page_queryset = Page.objects.all()
        if page_name in ["about", "experience", "technical"]:
            page_queryset = page_queryset.prefetch_related(
                "body__cards", "body__cards__content"
            )

        return page_queryset.filter(name=page_name) if page_name else page_queryset
