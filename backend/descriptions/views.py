from rest_framework.generics import ListAPIView

from descriptions.models import Page
from descriptions.serializers import PageSerializer


class DescriptionList(ListAPIView):
    serializer_class = PageSerializer

    def get_queryset(self):
        page_name = self.kwargs.get("page", None)
        queryset = Page.objects.prefetch_related("sections")
        return queryset.filter(name=page_name) if page_name else queryset
