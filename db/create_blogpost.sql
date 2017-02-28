INSERT INTO Blog (title, content,authorid,date_saved,date_published)
VALUES ($1,$2,$3,$4,$5)
RETURNING *;
