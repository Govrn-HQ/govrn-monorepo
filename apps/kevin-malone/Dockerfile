# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.9-slim-bullseye as base

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/app

# install git to pull code for installation
RUN apt update
RUN apt install -y git make gcc

# Install pip requirements
COPY requirements.txt .
COPY requirements-dev.txt .
RUN python -m pip install -r requirements-dev.txt

WORKDIR /app
COPY . /app

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
CMD ["python", "bot/__main__.py"]
