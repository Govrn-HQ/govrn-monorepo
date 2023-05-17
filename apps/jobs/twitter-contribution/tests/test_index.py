from govrn_monorepo import index


def test_index():
    assert index.hello() == "Hello jobs-twitter-contribution"
