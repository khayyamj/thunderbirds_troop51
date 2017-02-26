DELETE FROM Profiles
WHERE profileid = $1
RETURNING *;
