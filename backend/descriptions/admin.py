from django.contrib import admin

from descriptions.models import Description


@admin.register(Description)
class DescriptionAdmin(admin.ModelAdmin):
    list_display = ("content", "page")
