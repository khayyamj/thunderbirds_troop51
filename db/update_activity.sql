UPDATE Activities
SET
   type = COALESCE($2, type),
   date = COALESCE($3, date),
   site = COALESCE($4, site),
   lat = COALESCE($5, lat),
   lng = COALESCE($6, lng),
   notes = COALESCE($7, notes),
   
WHERE actid = $1
RETURNING *;
