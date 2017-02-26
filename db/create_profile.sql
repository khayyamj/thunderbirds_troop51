INSERT INTO Profiles (firstName, lastName, nickName, email, address, city, state, zip, cellPhone, homePhone, birthday)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
RETURNING *;
