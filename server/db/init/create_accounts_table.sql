CREATE TABLE IF NOT EXISTS Accounts (
   transaction    SERIAL PRIMARY KEY,
   date           VARCHAR(10),
   profileid      INTEGER,
   amount         NUMERIC(10,2),
   accounting     VARCHAR(5),
   activity       VARCHAR(20),
   actid          INTEGER
)
