INSERT INTO BlogTags (tags)
VALUES ($1)
RETURNING *;
