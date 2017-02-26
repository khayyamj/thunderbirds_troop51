INSERT INTO Activities (type, date, site, lat, lng, notes)
VALUES ($1,$2,$3,$4,$5,$6)
RETURNING *;
