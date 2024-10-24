from django.db import models


class Description(models.Model):
    content = models.TextField()
    page = models.IntegerField(null=False, blank=False)

    def __str__(self):
        return self.content[:50]
