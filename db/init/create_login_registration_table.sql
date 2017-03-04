CREATE TABLE IF NOT EXISTS Login (
   loginid    SERIAL PRIMARY KEY,
   age        INTEGER,
   clientid   VARCHAR(50),
   date       VARCHAR(50),
   lastname   VARCHAR(25),
   firstname  VARCHAR(25),
   picture_sm VARCHAR(200),
   picture_lg VARCHAR(200)
   )
