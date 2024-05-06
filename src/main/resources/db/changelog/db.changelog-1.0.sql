--liquibase formatted sql

--changeset ISivolobov:1
create table if not exists category (
   id bigserial primary key,
   parent_id bigint,
   header  varchar unique not null,
   custom_order bigint not null
);

--changeset ISivolobov:2
INSERT INTO category (header, custom_order)
VALUES ('Bakery', 1),
       ('Fruit and vegetables', 2),
       ('Meat and fish', 3),
       ('Drinks', 4),
       ('Kitchen', 5),
       ('Special nutrition', 6),
       ('Baby', 7),
       ('Pharmacy', 8);

--changeset ISivolobov:3
INSERT INTO category (parent_id, header, custom_order)
VALUES (1, 'Bread', 1),
       (1, 'Pastries', 2),
       (2, 'Fruits', 1),
       (2, 'Vegetables', 2),
       (3, 'Beef', 1),
       (3, 'Chicken', 2),
       (3, 'Fish', 3),
       (4, 'Juices', 1),
       (4, 'Sodas', 2),
       (5, 'Cookware', 1),
       (5, 'Utensils', 2),
       (6, 'Gluten-free', 1),
       (6, 'Dairy-free', 2),
       (7, 'Baby food', 1),
       (7, 'Baby care', 2),
       (8, 'Medicines', 1),
       (8, 'Healthcare', 2);

--changeset ISivolobov:4
INSERT INTO category (parent_id, header, custom_order)
VALUES
    (11, 'Whole grain bread', 1),
    (11, 'Baguette', 2),
    (12, 'Cupcakes', 1),
    (12, 'Danish pastry', 2),
    (13, 'Apples', 1),
    (13, 'Oranges', 2),
    (14, 'Carrots', 1),
    (14, 'Tomatoes', 2),
    (15, 'Steak', 1),
    (15, 'Roast chicken', 2),
    (15, 'Salmon', 3),
    (16, 'Orange juice', 1),
    (16, 'Apple juice', 2),
    (17, 'Cola', 1),
    (17, 'Lemonade', 2),
    (18, 'Pots', 1),
    (18, 'Pans', 2),
    (19, 'Knives', 1),
    (19, 'Spoons', 2),
    (20, 'Gluten-free bread', 1),
    (20, 'Gluten-free pasta', 2),
    (21, 'Soy milk', 1),
    (21, 'Almond milk', 2),
    (22, 'Baby rice cereal', 1),
    (22, 'Fruit puree', 2),
    (23, 'Diaper cream', 1),
    (23, 'Baby lotion', 2),
    (24, 'Painkiller', 1),
    (24, 'Cold medicine', 2),
    (25, 'Vitamins', 1),
    (25, 'Bandages', 2);