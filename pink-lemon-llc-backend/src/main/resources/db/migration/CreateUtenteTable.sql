drop table if exists Utentes;
create table utentes (
  id                bigint(20)      not null auto_increment    comment 'UserID',
  name              varchar(30)     default ''                 comment 'FirstName',
  surname           varchar(30)     default ''                 comment 'LastName',
  username          varchar(30)     not null                   comment 'UserName',
  email             varchar(50)     not null                   comment 'Email',
  password          varchar(100)    not null                   comment 'Password',
  role              varchar(30)     default 'ROLE_USER'        comment 'User Role (ROLE_ADMIN, ROLE_USER)',
  deleted           boolean         default false              comment 'Deleted User (true: Yes, false: No)',
  created_time      datetime                                   comment 'Created Time',
  credit            bigint(10)      default 0                  comment 'Credit',
  credit_monthly    bigint(10)      default 0                  comment 'Monthly Credit',
  credit_annual     bigint(10)      default 0                  comment 'Annual Credit',
  primary key (id)
) engine=innodb auto_increment=100 comment = 'User Information Form';


insert into Utentes values(1, 'Mohamed', 'Fassel', 'mohamed', 'lkostyrka17@gmail.com', '$2a$12$nTf8c0ekuQ9AHTonJApuFeh1HxHhIBG0BC1vH/vvJNnVk/9vPsWyK', 'ROLE_USER', false, sysdate(), 200, 120, 1200)