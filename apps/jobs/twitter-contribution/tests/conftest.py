"""Unit tests configuration module."""
import os

pytest_plugins = []

os.environ["IS_DEV"] = "True"
os.environ["PROTOCOL_URL"] = "http://localhost:4000/graphql"
os.environ["PROTOCOL_TOKEN"] = "adjflkasjdflkasdlfjk"
