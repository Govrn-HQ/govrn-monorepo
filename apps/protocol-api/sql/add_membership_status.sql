INSERT INTO "GuildMembershipStatus" (name)
VALUES ('Admin'),
       ('Member'),
       ('Contributor'),
       ('Recruit'),
       ('Supporter'),
       ('Lurker')
ON CONFLICT DO NOTHING;

