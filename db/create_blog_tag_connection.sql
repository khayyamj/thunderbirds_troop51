INSERT INTO BlogTagsConnection (tagid, blogid)
VALUES ($1,$2)
RETURNING *;
