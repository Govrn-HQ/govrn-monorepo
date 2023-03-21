INSERT INTO "GuildImportStatus" (name)
VALUES ('Verified'),
       ('Unverified')
ON CONFLICT DO NOTHING;
