INSERT INTO Participants (actid, profileid)
VALUES ($1,$2)
RETURNING *;
