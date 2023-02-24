-- Fill missing data
UPDATE "GuildUser"
SET membership_status_id = (SELECT id
                            FROM "GuildMembershipStatus"
                            WHERE name = 'Member')
WHERE membership_status_id IS NULL;
