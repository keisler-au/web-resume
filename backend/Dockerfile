# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app/backend

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . .

# Expose port 8000 for the Django development server
# EXPOSE 8000

# Run the Django development server (this will automatically start when the container is run)
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
