FROM python:3.12.0-slim AS build
WORKDIR /backend-app
COPY pyproject.toml .
COPY poetry.lock .
RUN pip install poetry
RUN poetry config virtualenvs.create false
RUN poetry install --no-root
COPY . .
EXPOSE 8000


FROM build AS development
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


FROM build AS production
CMD ["gunicorn", "app.wsgi:application", "--bind", "0.0.0.0:8000"]
