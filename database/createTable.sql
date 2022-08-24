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
