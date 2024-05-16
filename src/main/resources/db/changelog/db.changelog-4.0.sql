--liquibase formatted sql

--changeset ISivolobov:1
create table if not exists Users (
   id bigserial primary key,
   username char(30) not null unique ,
   email char(30) not null unique,
   password VARCHAR(128) not null,
   role char(10) not null
);

--changeset ISivolobov:2
insert into Users (username, email, password, role)
values ('Igor', 'swebdesigne@gmail.com', '$2a$10$u5cl4Et1b7nzxlfqr23JfOy4UA7yGWAEHcHo87zO5CEkX8QWw3eYK', 'ADMIN')