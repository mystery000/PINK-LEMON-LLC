drop table if exists Utentes;
create table Utentes (
  id           bigint(20)      not null auto_increment    comment 'UserID',
  name              varchar(30)     default ''                 comment 'FirstName',
  surname           varchar(30)     default ''                 comment 'LastName',
  username          varchar(30)     not null                   comment 'UserName',
  email             varchar(50)     not null                   comment 'Email',
  password          varchar(100)    not null                   comment 'Password',
  role              smallint        default 0                  comment 'User Role (0: User 1: System User)',
  deleted           boolean         default false              comment 'Deleted User (true: Yes, false: No)',
  created_time       datetime                                   comment 'Created Time',
  credit            int(4)          default 0                  comment 'Credit',
  credit_monthly    int(4)          default 0                  comment 'Monthly Credit',
  credit_annual     int(4)          default 0                  comment 'Annual Credit',
  primary key (id)
) engine=innodb auto_increment=100 comment = 'User Information Form';


insert into Utentes values(1, 'Mohamed', 'Fassel', 'ARTHLO', 'lkostyrka17@gmail.com', '$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2', 1, false, sysdate(), 200, 120, 1200)