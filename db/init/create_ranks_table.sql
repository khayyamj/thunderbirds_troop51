   CREATE TABLE IF NOT EXISTS Ranks (
      pk    SERIAL PRIMARY KEY,
      profileid   INTEGER,
      joined      VARCHAR(10),
      scout       VARCHAR(10),
      tenderfoot  VARCHAR(10),
      secondclass VARCHAR(10),
      firstclass  VARCHAR(10),
      star        VARCHAR(10),
      life        VARCHAR(10),
      eagle       VARCHAR(10),
      bronzepalm1 VARCHAR(10),
      goldpalm1   VARCHAR(10),
      silverpalm1 VARCHAR(10),
      bronzepalm2 VARCHAR(10),
      goldpalm2   VARCHAR(10),
      silverpalm2 VARCHAR(10)
   )
