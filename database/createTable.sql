-- create table userinfo
-- (
--     userNum   int auto_increment
--         primary key,
--     cusDOB    date        not null,
--     password  varchar(50) not null ,
--     firstName varchar(50) not null,
--     lastName  varchar(50) not null,
--     phoneNum  varchar(50) not null,
--     email     varchar(50) not null,
--     gender    varchar(50) not null
-- );

-- create table comment
-- (
--     userName varchar(50) not null,
--     location varchar(50) not null,
--     time     datetime    not null,
--     score    varchar(5)  not null,
--     comments text        not null,
--     primary key (userName, location, time)
-- );

-- create table mountains
-- (
--     MountName      varchar(50) not null,
--     CITY           varchar(50) not null,
--     STATE          varchar(50) not null,
--     Longitude      varchar(50) not null,
--     Latitude       varchar(50) not null,
--     Score          double      not null,
--     RiverSide      varchar(50) not null,
--     CarFoot        text        not null,
--     FamilySelf     varchar(50) not null,
--     Elevation      int         not null,
--     MaxTem         varchar(50) not null,
--     MinTem         varchar(50) not null,
--     RestaurantCafe varchar(50) not null,
--     Break          varchar(50) not null,
--     Lookout        varchar(50) not null
-- );

update mountains set Score = (Score*19 + 4.9)/20 where MountName = 'Mount Kosciuszko';
alter table mountains change Score Score double not null;

alter table mountains add constraint scoreCheck check (Score >= 0 and Score <= 5);

create trigger updateScore after insert on comment
    for each row
    begin
        update mountains set Score = (Score*19 + new.score)/20 where MountName = new.location;
    end;

select * from activity
where exists (select * from activity where userNum = 1 and active = 'active');