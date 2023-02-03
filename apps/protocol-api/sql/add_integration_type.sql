INSERT INTO "IntegrationType" (name)
VALUES ('Guild'),
       ('ERC20'),
       ('ERC721'),
       ('Disco'),
       ('CSV'),
       ('Manual')
ON CONFLICT DO NOTHING;
