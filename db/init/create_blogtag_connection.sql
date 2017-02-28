CREATE TABLE IF NOT EXISTS BlogTagsConnection (
   connectionid   SERIAL PRIMARY KEY,
   tagid          INTEGER,
   blogid         INTEGER
)
