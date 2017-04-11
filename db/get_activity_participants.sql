SELECT Participants.actid, Participants.profileid, Profiles.firstname, Profiles.nickname, Profiles.lastname, Profiles.adult
FROM Participants
JOIN Profiles
  ON Participants.profileid = Profiles.profileid
