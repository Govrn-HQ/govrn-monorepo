INSERT INTO "Chain" (name,chain_id) 
    VALUES ('Gnosis Chain', 100),
           ('Rinkeby', 4),
           ('Goerli', 5);

UPDATE "Contribution" SET chain_id=1
WHERE on_chain_id IS NOT null;

/* UPDATE "Contribution" SET chain_id=3 */
/* WHERE on_chain_id IS NOT null; */
