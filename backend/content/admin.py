from django.contrib import admin

from .models import BodyCard, CardContent, Page, PageBody, PageHeading


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)
    ordering = ("id",)


@admin.register(PageHeading)
class PageHeadingAdmin(admin.ModelAdmin):
    list_display = ("id", "page", "main_heading", "sub_heading")
    list_filter = ("page",)
    search_fields = ("main_heading", "sub_heading", "description")
    ordering = ("id",)


@admin.register(PageBody)
class PageBodyAdmin(admin.ModelAdmin):
    list_display = ("id", "page", "label")
    list_filter = ("page",)
    search_fields = ("label",)
    ordering = ("id",)


@admin.register(BodyCard)
class BodyCardAdmin(admin.ModelAdmin):
    list_display = ("id", "body", "title")
    list_filter = ("body",)
    search_fields = ("title",)
    ordering = ("id",)


@admin.register(CardContent)
class CardContentAdmin(admin.ModelAdmin):
    list_display = ("id", "card", "description")
    list_filter = ("card",)
    search_fields = ("description",)
    ordering = ("id",)
