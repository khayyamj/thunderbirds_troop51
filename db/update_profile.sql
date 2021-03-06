UPDATE Profiles
SET
   firstname = COALESCE($2, firstname),
   lastname = COALESCE($3, lastname),
   nickname = COALESCE($4, nickname),
   email = COALESCE($5, email),
   address = COALESCE($6, address),
   city = COALESCE($7, city),
   state = COALESCE($8, state),
   zip = COALESCE($9, zip),
   cellphone = COALESCE($10, cellphone),
   homephone = COALESCE($11, homephone),
   birthday = COALESCE($12, birthday),
   imageurl = COALESCE($13, imageUrl),
   position = COALESCE($14, position),
   permissions = COALESCE($15, permissions),
   handbook = COALESCE($16, handbook),
   orangeneckerchief = COALESCE($17, orangeneckerchief),
   thunderbirdneckerchief = COALESCE($18, thunderbirdneckerchief),
   active = COALESCE($19, active),
   adult = COALESCE($20, adult),
   clientid = COALESCE($21, clientid)

WHERE profileid = $1
RETURNING *;
