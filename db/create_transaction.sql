INSERT INTO Transactions (date, profileid, amount, accounting, activity, actid, notes)
VALUES ($1,$2,$3,$4,$5,$6,$7)
RETURNING *;
