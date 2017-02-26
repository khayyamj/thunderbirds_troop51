DELETE FROM Activities
WHERE actid = $1
RETURNING *;
