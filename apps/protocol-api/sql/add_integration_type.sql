INSERT INTO "IntegrationType" (name)
VALUES ('Guild'),
       ('ERC20'),
       ('ERC721'),
       ('Disco'),
       ('CSV')
ON CONFLICT DO NOTHING;
