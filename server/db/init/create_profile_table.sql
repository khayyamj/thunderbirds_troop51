CREATE TABLE IF NOT EXISTS Profiles (
   profileid SERIAL PRIMARY KEY,
   firstname VARCHAR(50),
   lastname VARCHAR(50),
   nickname VARCHAR(50),
   email VARCHAR(100),
   address VARCHAR(100),
   city VARCHAR(100),
   state VARCHAR(100),
   zip NUMERIC(5),
   cellphone VARCHAR(15),
   homephone VARCHAR(15),
   birthday VARCHAR(10),
   imageUrl VARCHAR(400)
)
