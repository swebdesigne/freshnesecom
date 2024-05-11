--liquibase formatted sql

--changeset ISivolobov:1
create table if not exists Item (
   id bigserial primary key,
   category_id bigint references category(id),
   header  varchar unique not null,
   img varchar,
   price decimal not null,
   description text not null,
   parameters text not null,
   custom_order bigint not null,
   recipe_id bigint references recipe(id) on delete cascade
);

-- Пример добавления товаров к категории Bakery (id = 1)
--changeset ISivolobov:2
INSERT INTO Item (recipe_id, category_id, header, img, price, description, parameters, custom_order)
VALUES
    (1, 1, 'Baguette', 'https://avatars.mds.yandex.net/get-pdb/1766476/06091538-049c-4a7d-bf8a-238765b7a82c/s1200', 2.99, 'Freshly baked baguette', 'Size: 30cm', 1),
    (2, 1, 'Croissant', 'https://avatars.mds.yandex.net/get-pdb/961248/5d56a454-fab3-4c64-9329-9f119d1972ae/s1200', 1.99, 'Buttery croissant', 'Size: Large', 2),
    (3, 1, 'Sourdough Bread', 'https://avatars.mds.yandex.net/get-pdb/2889911/9862b95e-3480-4872-b5b8-3b493f80745c/s1200', 3.49, 'Artisan sourdough loaf', 'Size: 500g', 3),
    (4, 1, 'Whole Grain Bread', 'https://avatars.mds.yandex.net/get-pdb/2889911/079eae8f-4aa4-4e17-b0d0-07ac23a5cb66/s1200', 3.99, 'Healthy whole grain bread', 'Size: 800g', 4),
    (5, 1, 'Brioche', 'https://avatars.mds.yandex.net/get-pdb/2889911/3b892e06-7dcb-429a-ba24-51ba2cb50c04/s1200', 2.49, 'Sweet brioche bun', 'Size: Medium', 5),
    (6, 1, 'Bagel', 'https://avatars.mds.yandex.net/get-pdb/2476423/58a2c0ff-6fa7-4c81-9c18-f8b7d8d2263d/s1200', 1.79, 'Classic bagel', 'Size: Plain', 6),
    (7, 1, 'Ciabatta', 'https://avatars.mds.yandex.net/get-pdb/1578316/4ad8b1e7-8158-4c39-98cf-308138cb1615/s1200', 2.99, 'Italian ciabatta bread', 'Size: Rustic', 7),
    (8, 1, 'Pretzel', 'https://avatars.mds.yandex.net/get-pdb/2006144/91d2b722-777a-4ab4-b891-7c3e2b136d19/s1200', 1.89, 'Salted pretzel', 'Size: Large', 8),
    (9, 1, 'Focaccia', 'https://avatars.mds.yandex.net/get-pdb/2476423/9b5a8f57-956b-42a1-bc56-b7fece21da76/s1200', 3.29, 'Herb-infused focaccia', 'Size: Family', 9),
    (10, 1, 'Cinnamon Roll', 'https://avatars.mds.yandex.net/get-pdb/2476423/682d0c3e-4a7b-464e-89a2-6b2a57eeb791/s1200', 2.49, 'Sweet cinnamon roll', 'Size: Indulgent', 10);

-- Пример добавления товаров к категории Fruit and vegetables (id = 2)
--changeset ISivolobov:3
INSERT INTO Item (recipe_id, category_id, header, img, price, description, parameters, custom_order)
VALUES
    (11, 2, 'Carrots from Tomissy Farm', 'https://avatars.mds.yandex.net/get-pdb/1766476/ab6f2cf7-94c2-49d7-b820-5ef36ebeebdb/s1200', 1.49, 'Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.', 'SKU:76645
Freshness: 1 days old
Category: Vegetables
Buy by: pcs, kgs, box, pack
Stock: In Stock
Delivery: in 2 days
Farm:Grocery Tarm Fields
Delivery area: Czech republic', 1),
    (12, 2, 'Oranges', 'https://avatars.mds.yandex.net/get-pdb/1578316/f179db46-c2bb-43d8-9730-c681252a3d57/s1200', 1.29, 'Juicy oranges', 'Type: Valencia', 2),
    (13, 2, 'Carrots', 'https://avatars.mds.yandex.net/get-pdb/2006144/14ef79d7-6749-4a8a-bef2-c6c87e398e42/s1200', 0.99, 'Organic carrots', 'Type: Baby', 3),
    (14, 2, 'Tomatoes', 'https://avatars.mds.yandex.net/get-pdb/2476423/da80134b-ec39-40db-bb9b-c04d4ea38d94/s1200', 1.79, 'Ripe tomatoes', 'Type: Vine-ripened', 4),
    (15, 2, 'Bananas', 'https://avatars.mds.yandex.net/get-pdb/1766476/9fc1075d-457e-41f5-94cf-3099fd2e3f4b/s1200', 1.69, 'Yellow bananas', 'Type: Cavendish', 5),
    (16, 2, 'Broccoli', 'https://avatars.mds.yandex.net/get-pdb/1578316/05adcd30-44ba-42ed-982e-b22ae3eef7d1/s1200', 1.99, 'Fresh broccoli florets', 'Type: Green', 6),
    (17, 2, 'Spinach', 'https://avatars.mds.yandex.net/get-pdb/2006144/febc63b4-2161-4b25-ba3a-9bc515ec22ec/s1200', 2.29, 'Organic spinach leaves', 'Type: Baby', 7)