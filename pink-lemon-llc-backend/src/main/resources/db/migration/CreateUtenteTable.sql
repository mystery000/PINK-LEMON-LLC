drop table if exists Utentes;
create table Utentes (
  user_id           bigint(20)      not null auto_increment    comment 'UserID',
  name              varchar(30)     default ''                 comment 'FirstName',
  surname           varchar(30)     default ''                 comment 'LastName',
  username          varchar(30)     not null                   comment 'UserName',
  email             varchar(50)     not null                   comment 'Email',
  password          varchar(100)    not null                   comment 'Password',
  role              smallint        default 0                  comment 'User Role (0: User 1: System User)',
  deleted           boolean         default false              comment 'Deleted User (true: Yes, false: No)',
  create_time       datetime                                   comment 'Created Time',
  credito           int(4)          default 0                  comment 'Credit',
  credito_mensile   int(4)          default 0                  comment 'Monthly Credit',
  credito_annuale   int(4)          default 0                  comment 'Annual Credit',
  primary key (user_id)
) engine=innodb auto_increment=100 comment = 'User Information Form';