INSERT INTO "ActivityType" (name) VALUES
  ('🍋Research'),
  ('🍋Logistics'),
  ('🍋Growth'),
  ('🍋Product'),
  ('🍋Market Research'),
  ('🍋Management'),
  ('🍋Finances'),
  ('🍋Outreach'),
  ('🍋Culture'),
  ('🍋User Research')
ON CONFLICT DO NOTHING;

DELETE FROM "GuildActivityType" WHERE guild_id = 20;

INSERT INTO "GuildActivityType" (guild_id,activity_type_id)
 SELECT 20 as guild_id, id as activity_type_id FROM "ActivityType"
 WHERE name in (
  '🍋Research',
  '🍋Logistics',
  '🍋Growth',
  '🍋Product',
  '🍋Market Research',
  '🍋Management',
  '🍋Finances',
  '🍋Outreach',
  '🍋Culture',
  '🍋User Research'
);

