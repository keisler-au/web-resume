from django.db import models


class Page(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class PageHeading(models.Model):
    page = models.ForeignKey(Page, related_name="heading", on_delete=models.CASCADE)
    main_heading = models.CharField(max_length=255)
    sub_heading = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField()

    def __str__(self):
        return self.main_heading


class PageBody(models.Model):
    page = models.ForeignKey(Page, related_name="body", on_delete=models.CASCADE)
    label = models.CharField(max_length=255)

    def __str__(self):
        return self.label


class BodyCard(models.Model):
    body = models.ForeignKey(PageBody, related_name="cards", on_delete=models.CASCADE)
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class CardContent(models.Model):
    card = models.ForeignKey(BodyCard, related_name="content", on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return self.description
