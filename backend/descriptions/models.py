from django.db import models


class Page(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Section(models.Model):
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name="sections")
    header = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.header
