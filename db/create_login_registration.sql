INSERT INTO Login (age, clientid, date, lastname, firstname, picture_sm, picture_lg)
VALUES ($1,$2,$3,$4,$5,$6,$7)
RETURNING *;
