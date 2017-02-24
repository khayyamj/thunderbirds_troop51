CREATE TABLE IF NOT EXISTS Activities (
   actid    SERIAL PRIMARY KEY,
   type     VARCHAR(20),
   date     DATE,
   site     VARCHAR(50),
   lat      NUMERIC(8,4),
   lng      NUMERIC(8,4),
   notes    VARCHAR(400)
)
