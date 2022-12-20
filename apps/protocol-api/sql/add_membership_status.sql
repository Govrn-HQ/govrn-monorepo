INSERT INTO "GuildMembershipStatus" (name)
VALUES ('Member'),
       ('Contributor'),
       ('Recruit'),
       ('Supporter'),
       ('Lurker')
ON CONFLICT DO NOTHING;

