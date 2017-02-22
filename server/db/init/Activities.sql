CREATE TABLE IF NOT EXISTS Activities (
   actid    SERIAL PRIMARY KEY,
   type     VARCHAR(20),
   date     VARCHAR(10),
   site     VARCHAR(50),
   lat      NUMERIC(3,4),
   lng      NUMERIC(3,4),
   notes    VARCHAR(400), 
)
