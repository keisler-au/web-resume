FROM python:3.12.0-slim as build
WORKDIR /backend-app
COPY pyproject.toml .
COPY poetry.lock .
RUN pip install poetry
RUN poetry config virtualenvs.create false
RUN poetry install --no-root
COPY . .

FROM build AS development
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


FROM build AS production
EXPOSE 80
CMD ["gunicorn", "app.wsgi:application", "--bind", "0.0.0.0:80"]
