from rest_framework.generics import ListAPIView

from descriptions.models import Description
from descriptions.serializers import DescriptionSerializer


class DescriptionList(ListAPIView):
    serializer_class = DescriptionSerializer

    def get_queryset(self):
        content = Description.objects.all()
        if self.kwargs:
            page = self.kwargs.get("page", 0)
            content = Description.objects.filter(page=page)
        return content