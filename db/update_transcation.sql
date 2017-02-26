UPDATE Transactions
SET
   date = COALESCE($2, date),
   profileid = COALESCE($3, profileid),
   amount = COALESCE($4, amount),
   accounting = COALESCE($5, accounting),
   activity = COALESCE($6, activity),
   actid = COALESCE($7, actid),
   notes = COALESCE($7, notes)

WHERE profileid = $1
RETURNING *;
