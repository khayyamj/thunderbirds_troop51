INSERT INTO Profiles (firstname, lastname, nickname, email, address, city, state, zip, cellphone, homephone, birthday, imageurl, position, permissions, handbook, orangeneckerchief, thunderbirdneckerchief, active, adult, clientid)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)
RETURNING *;
