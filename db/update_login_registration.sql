UPDATE Login
SET
   age = COALESCE($2, age),
   clientid = COALESCE($3, clientid),
   date = COALESCE($4, date),
   lastname = COALESCE($5, lastname),
   firstname = COALESCE($6, firstname),
   picture_sm = COALESCE($7, picture_sm),
   picture_lg = COALESCE($8, picture_lg),

WHERE loginid = $1
RETURNING *;
