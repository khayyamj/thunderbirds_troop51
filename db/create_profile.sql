INSERT INTO Profiles (firstname, lastname, nickname, email, address, city, state, zip, cellphone, homephone, birthday)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
RETURNING *;
