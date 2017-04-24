CREATE TABLE IF NOT EXISTS Login (
   loginid    SERIAL PRIMARY KEY,
   age        INTEGER,
   clientid   VARCHAR(50),
   date       VARCHAR(50),
   lastname   VARCHAR(25),
   firstname  VARCHAR(25),
   picture_sm VARCHAR(200),
   picture_lg VARCHAR(200),
   email      VARCHAR(50),
   lastLogin  VARCHAR(50)
 );

 CREATE TABLE IF NOT EXISTS Profiles (
    profileid      SERIAL PRIMARY KEY,
    firstname      VARCHAR(50),
    lastname       VARCHAR(50),
    nickname       VARCHAR(50),
    email          VARCHAR(100),
    address        VARCHAR(100),
    city           VARCHAR(100),
    state          VARCHAR(100),
    zip            NUMERIC(5),
    cellphone      VARCHAR(15),
    homephone      VARCHAR(15),
    birthday       VARCHAR(10),
    imageurl       VARCHAR(400),
    position       VARCHAR(20),
    permissions    VARCHAR(15),
    handbook       BOOLEAN,
    orangeneckerchief       BOOLEAN,
    thunderbirdneckerchief  BOOLEAN,
    active         BOOLEAN,
    adult          BOOLEAN,
    clientid       VARCHAR(50)
 );

 CREATE TABLE IF NOT EXISTS Activities (
    actid    SERIAL PRIMARY KEY,
    type     VARCHAR(20),
    date     DATE,
    site     VARCHAR(50),
    lat      NUMERIC(8,4),
    lng      NUMERIC(8,4),
    notes    VARCHAR(400)
 );

 CREATE TABLE IF NOT EXISTS Blog (
    blogid      SERIAL PRIMARY KEY,
    title          VARCHAR(50),
    content        VARCHAR,
    authorid       VARCHAR(50),
    date_saved     date,
    date_published date
 );

 CREATE TABLE IF NOT EXISTS BlogTagsConnection (
    connectionid   SERIAL PRIMARY KEY,
    tagid          INTEGER,
    blogid         INTEGER
 );

 CREATE TABLE IF NOT EXISTS Participants (
    pk          SERIAL PRIMARY KEY,
    actid       INTEGER,
    profileid   INTEGER
 );

 CREATE TABLE IF NOT EXISTS Ranks (
    pk    SERIAL PRIMARY KEY,
    profileid   INTEGER,
    joined      VARCHAR(10),
    scout       VARCHAR(10),
    tenderfoot  VARCHAR(10),
    secondclass VARCHAR(10),
    firstclass  VARCHAR(10),
    star        VARCHAR(10),
    life        VARCHAR(10),
    eagle       VARCHAR(10),
    bronzepalm1 VARCHAR(10),
    goldpalm1   VARCHAR(10),
    silverpalm1 VARCHAR(10),
    bronzepalm2 VARCHAR(10),
    goldpalm2   VARCHAR(10),
    silverpalm2 VARCHAR(10)
 );

 CREATE TABLE IF NOT EXISTS Transactions (
    transactionid    SERIAL PRIMARY KEY,
    date           VARCHAR(10),
    profileid      INTEGER,
    amount         NUMERIC(10,2),
    accounting     VARCHAR(6),
    activity       VARCHAR(20),
    actid          INTEGER,
    notes          VARCHAR(255)
 );
