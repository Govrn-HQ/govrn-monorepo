from twitter_contribution import graphql

### Integration tests; intended to be run with a local instance of postgresql running
### along with the the protocol api.

## PROTOCOL_TOKEN PROTOCOL_URL must be configured in tandem with protocol-api


## TODO: check in sample db backup
def test_get_guilds_with_twitter_integration():
    guilds = graphql.get_guilds_with_twitter_integration()
    assert guilds is not None
    assert len(guilds) > 0
