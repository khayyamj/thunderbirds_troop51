SELECT Transactions.date, Transactions.amount, Transactions.activity, Transactions.notes, Transactions.transactionid, Profiles.firstname, Profiles.lastname, Profiles.profileid, Profiles.active
FROM Transactions
JOIN Profiles
  ON Transactions.profileid = Profiles.profileid
ORDER BY Profiles.lastname
