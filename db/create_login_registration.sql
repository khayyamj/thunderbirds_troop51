INSERT INTO Login (age, clientid, date, lastname, firstname, picture_sm, picture_lg, email, lastlogin)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
RETURNING *;
