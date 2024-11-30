from django.contrib import admin

from descriptions.models import Page, Section


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ("id", "name")


@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    list_display = ("id", "header", "page")
