INSERT INTO "GuildMembershipStatus" (name)
VALUES ('Admin'),
       ('Member'),
       ('Contributor'),
       ('Recruit'),
       ('Supporter'),
       ('Lurker'),
       ('Left')
ON CONFLICT DO NOTHING;

