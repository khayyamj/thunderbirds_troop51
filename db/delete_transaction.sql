DELETE FROM Transactions
WHERE transactionid = $1
RETURNING *;
