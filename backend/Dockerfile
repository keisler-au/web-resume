FROM python:3.12.0-slim as build
WORKDIR /backend-app
COPY pyproject.toml .
COPY poetry.lock .
RUN pip install poetry
RUN poetry config virtualenvs.create false
EXPOSE 8000


FROM build AS development
RUN poetry install --no-root
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


FROM build AS production
RUN poetry install --no-root --no-dev
COPY . .
CMD ["gunicorn", "app.wsgi:application", "--bind", "0.0.0.0:8000"]
