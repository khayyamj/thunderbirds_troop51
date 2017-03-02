SELECT Activities.type, Activities.date, Activities.site, Activities.lat, Activities.lng, Activities.notes, Profiles.firstname, Profiles.lastname, Profiles.nickname, Profiles.active, Profiles.adult, Participants.actid, Participants.profileid
FROM Activities
JOIN Participants
  ON Activities.actid = Participants.actid
JOIN Profiles
  ON Participants.profileid = Profiles.profileid
