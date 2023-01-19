INSERT INTO "GuildImportStatus" (name)
VALUES ('Pending'),
       ('Completed'),
       ('Failed')
ON CONFLICT DO NOTHING;
