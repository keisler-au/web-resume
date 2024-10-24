FROM python:3.12.0-slim as build

WORKDIR /backend-app
COPY pyproject.toml .
COPY poetry.lock .
RUN pip install poetry
RUN poetry install --no-root
COPY . .


FROM build AS development

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


FROM python:3.12.0-slim AS production

WORKDIR /backend-app
COPY --from=build /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=build /usr/local/bin /usr/local/bin
COPY --from=build /backend-app /backend-app
EXPOSE 8000
CMD ["uvicorn", "your_project_name.asgi:application", "--host", "0.0.0.0", "--port", "8000", "--workers", "3"]
