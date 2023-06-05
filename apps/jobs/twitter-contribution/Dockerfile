# adapted from https://github.com/michaeloliverx/python-poetry-docker-example/blob/master/docker/Dockerfile
FROM python:3.9-slim-bullseye as python-base

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


# builder-base is used to build dependencies
FROM python-base as builder-base
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

# We copy our Python requirements here to cache them
# Workaround for snscrape not being in poetry
WORKDIR $PYSETUP_PATH
COPY apps/jobs/twitter-contribution/poetry.lock apps/jobs/twitter-contribution/pyproject.toml ./
RUN poetry install --no-dev --no-root && \
    poetry run pip install git+https://github.com/JustAnotherArchivist/snscrape.git

# 'production' stage uses the clean 'python-base' stage and copies
# in only our runtime deps that were installed in the 'builder-base'
FROM python-base as production

COPY --from=builder-base $POETRY_HOME $POETRY_HOME
COPY --from=builder-base $VENV_PATH $VENV_PATH

WORKDIR /app
COPY apps/jobs/twitter-contribution/pyproject.toml .
COPY apps/jobs/twitter-contribution/poetry.lock .
COPY apps/jobs/twitter-contribution/twitter_contribution ./twitter_contribution

CMD ["poetry", "run", "python", "__main__.py"]
