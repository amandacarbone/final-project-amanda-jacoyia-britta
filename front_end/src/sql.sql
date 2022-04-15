CREATE TABLE users(
 	id serial primary key,
 	first_name text not null,
	last_name text not null,
	email text unique not null ,
 	password text not null,
    isvegan boolean,
    isvegetarian boolean,
    ispescitarian boolean,
    join_date timestamp default current_timestamp
 )