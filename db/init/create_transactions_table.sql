CREATE TABLE IF NOT EXISTS Transactions (
   transactionid    SERIAL PRIMARY KEY,
   date           VARCHAR(10),
   profileid      INTEGER,
   amount         NUMERIC(10,2),
   accounting     VARCHAR(6),
   activity       VARCHAR(20),
   actid          INTEGER,
   notes          VARCHAR(255)
)
