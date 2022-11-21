INSERT INTO "AttestationStatus" (name) 
    VALUES ('unattested'),
           ('pending'),
           ('attested');

UPDATE "Attestation" SET attestation_status_id=3
WHERE attestation_status_id IS null;


