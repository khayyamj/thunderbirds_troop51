CREATE TABLE IF NOT EXISTS Blog (
   blogid      SERIAL PRIMARY KEY,
   title          VARCHAR(50),
   content        VARCHAR,
   authorid       VARCHAR(50),
   date_saved     date,
   date_published date
)
