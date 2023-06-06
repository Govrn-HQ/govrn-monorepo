"""Unit tests configuration module."""
import os
import pytest

from twitter_contribution.constants import load_env

try:
    from .test_env_var import TEMP_ENV_VARS
except ImportError:
    TEMP_ENV_VARS = {}


@pytest.fixture(scope="session", autouse=True)
def tests_setup_and_teardown():
    # Will be executed before the first test
    old_environ = dict(os.environ)
    os.environ.update(TEMP_ENV_VARS)
    load_env()
    yield
    # Will be executed after the last test
    os.environ.clear()
    os.environ.update(old_environ)


pytest_plugins = []
