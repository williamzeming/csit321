create table userinfo
(
    userNum   int auto_increment
        primary key,
    cusDOB    date        not null,
    password  varchar(50) not null ,
    firstName varchar(50) not null,
    lastName  varchar(50) not null,
    phoneNum  varchar(50) not null,
    email     varchar(50) not null,
    gender    varchar(50) not null
);
create table mountains
(
    name varchar(50) not null,
    city varchar(50) not null,
    state varchar(50) not null,
    coordinates varchar(50) not null,
    starLevel int not null,
    RiverSeaLakeNone varchar(50) not null,
    CarFoot varchar(50) not null,
    FamilySelf varchar(50) not null,
    elevation int not null,
    climate varchar(50) not null,
    RestaurtantCafe varchar(50) not null,
    break varchar(50) not null,
    lookout varchar(50) not null,
    primary key (name)
)