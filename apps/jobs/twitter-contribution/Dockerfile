FROM python:3.9-slim-bullseye as base

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    POETRY_HOME="/opt/poetry" \
    POETRY_VIRTUALENVS_IN_PROJECT=true \
    POETRY_NO_INTERACTION=1 \
    PYSETUP_PATH="/opt/pysetup" \
    VENV_PATH="/opt/pysetup/.venv"

ENV PATH="$POETRY_HOME/bin:$VENV_PATH/bin:$PATH"

RUN apt update \
    && apt install --no-install-recommends -y \
    curl \
    build-essential \
    make \
    git \
    gcc

# Install Poetry - respects $POETRY_VERSION & $POETRY_HOME
ENV POETRY_VERSION=1.0.5
RUN curl -sSL https://install.python-poetry.org | python3 --

COPY apps/jobs/twitter-contribution/pyproject.toml .
COPY apps/jobs/twitter-contribution/poetry.lock .

# Workaround for snscrape 
RUN poetry install --no-dev --no-root && \
    poetry run pip install git+https://github.com/JustAnotherArchivist/snscrape.git

COPY apps/jobs/twitter-contribution/twitter_contribution ./twitter_contribution

CMD ["poetry", "run", "python", "-m", "twitter_contribution"]
