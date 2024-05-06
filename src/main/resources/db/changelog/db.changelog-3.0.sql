--liquibase formatted sql

--changeset ISivolobov:1
CREATE TABLE recipe (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    item_id BIGINT references item(id) NOT NULL,
    description TEXT
);

--changeset ISivolobov:2
CREATE TABLE ingredient (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    value VARCHAR(255) NOT NULL,
    recipe_id BIGINT REFERENCES recipe(id) ON DELETE CASCADE
);

--changeset ISivolobov:3
-- Рецепт для item с id = 1
INSERT INTO recipe (name, item_id, description) VALUES ('Baguette Recipe', 1, 'Recipe for freshly baked baguette');

-- Рецепт для item с id = 2
INSERT INTO recipe (name, item_id, description) VALUES ('Croissant Recipe', 2, 'Recipe for buttery croissant');

-- Рецепт для item с id = 3
INSERT INTO recipe (name, item_id, description) VALUES ('Sourdough Bread Recipe', 3, 'Recipe for artisan sourdough loaf');

-- Рецепт для item с id = 4
INSERT INTO recipe (name, item_id, description) VALUES ('Whole Grain Bread Recipe', 4, 'Recipe for healthy whole grain bread');

-- Рецепт для item с id = 5
INSERT INTO recipe (name, item_id, description) VALUES ('Brioche Recipe', 5, 'Recipe for sweet brioche bun');

-- Рецепт для item с id = 6
INSERT INTO recipe (name, item_id, description) VALUES ('Bagel Recipe', 6, 'Recipe for classic bagel');

-- Рецепт для item с id = 7
INSERT INTO recipe (name, item_id, description) VALUES ('Ciabatta Recipe', 7, 'Recipe for Italian ciabatta bread');

-- Рецепт для item с id = 8
INSERT INTO recipe (name, item_id, description) VALUES ('Pretzel Recipe', 8, 'Recipe for salted pretzel');

-- Рецепт для item с id = 9
INSERT INTO recipe (name, item_id, description) VALUES ('Focaccia Recipe', 9, 'Recipe for herb-infused focaccia');

-- Рецепт для item с id = 10
INSERT INTO recipe (name, item_id, description) VALUES ('Cinnamon Roll Recipe', 10, 'Recipe for sweet cinnamon roll');

-- Рецепт для item с id = 11
INSERT INTO recipe (name, item_id, description) VALUES ('Carrots Recipe', 11, 'Recipe for fresh carrots');

-- Рецепт для item с id = 12
INSERT INTO recipe (name, item_id, description) VALUES ('Oranges Recipe', 12, 'Recipe for juicy oranges');

-- Рецепт для item с id = 13
INSERT INTO recipe (name, item_id, description) VALUES ('Tomatoes Recipe', 13, 'Recipe for ripe tomatoes');

-- Рецепт для item с id = 14
INSERT INTO recipe (name, item_id, description) VALUES ('Bananas Recipe', 14, 'Recipe for yellow bananas');

-- Рецепт для item с id = 15
INSERT INTO recipe (name, item_id, description) VALUES ('Broccoli Recipe', 15, 'Recipe for fresh broccoli florets');

-- Рецепт для item с id = 16
INSERT INTO recipe (name, item_id, description) VALUES ('Spinach Recipe', 16, 'Recipe for tender spinach leaves');

-- Рецепт для item с id = 17
INSERT INTO recipe (name, item_id, description) VALUES ('Potatoes Recipe', 17, 'Recipe for delicious potatoes');

--changeset ISivolobov:4
-- Ингредиенты для рецепта с id = 1 (Baguette Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Flour', '500g', 1);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Water', '300ml', 1);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '10g', 1);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Yeast', '7g', 1);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Olive oil', '30ml', 1);

-- Ингредиенты для рецепта с id = 2 (Croissant Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Butter', '200g', 2);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Sugar', '100g', 2);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Flour', '300g', 2);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Egg', '1', 2);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Yeast', '5g', 2);

-- Ингредиенты для рецепта с id = 3 (Sourdough Bread Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Whole wheat flour', '600g', 3);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Yeast', '10g', 3);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Water', '400ml', 3);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '15g', 3);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Olive oil', '50ml', 3);

-- Ингредиенты для рецепта с id = 4 (Whole Grain Bread Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Whole grain flour', '700g', 4);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Honey', '50g', 4);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Water', '450ml', 4);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '10g', 4);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Yeast', '8g', 4);

-- Ингредиенты для рецепта с id = 5 (Brioche Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Eggs', '3', 5);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Sugar', '100g', 5);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Butter', '150g', 5);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Flour', '400g', 5);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '5g', 5);
-- Ингредиенты для рецепта с id = 6 (Whole Grain Bread Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Whole grain flour', '700g', 6);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Honey', '50g', 6);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Water', '450ml', 6);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '10g', 6);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Yeast', '8g', 6);

-- Ингредиенты для рецепта с id = 7 (Brioche Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Eggs', '3', 7);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Sugar', '100g', 7);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Butter', '150g', 7);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Flour', '400g', 7);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '5g', 7);

-- Ингредиенты для рецепта с id = 8 (Ciabatta Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Bread flour', '500g', 8);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Water', '350ml', 8);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Yeast', '10g', 8);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '12g', 8);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Olive oil', '30ml', 8);

-- Ингредиенты для рецепта с id = 9 (Pretzel Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('All-purpose flour', '300g', 9);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Water', '250ml', 9);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Yeast', '8g', 9);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '10g', 9);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Baking soda', '30g', 9);

-- Ингредиенты для рецепта с id = 10 (Focaccia Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Bread flour', '400g', 10);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Water', '300ml', 10);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Olive oil', '50ml', 10);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '10g', 10);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Rosemary', '2 sprigs', 10);

-- Ингредиенты для рецепта с id = 11 (Cinnamon Roll Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Butter', '100g', 11);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Sugar', '150g', 11);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Cinnamon', '10g', 11);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Flour', '300g', 11);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Yeast', '5g', 11);

-- Ингредиенты для рецепта с id = 12 (Carrots Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Carrots', '500g', 12);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Butter', '50g', 12);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Sugar', '30g', 12);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '5g', 12);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Pepper', '2g', 12);

-- Ингредиенты для рецепта с id = 13 (Orange Juice Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Oranges', '5', 13);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Sugar', '50g', 13);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Water', '200ml', 13);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Ice cubes', '5', 13);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Mint leaves', '10', 13);

-- Ингредиенты для рецепта с id = 14 (Tomato Soup Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Tomatoes', '1kg', 14);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Onion', '1', 14);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Garlic', '2 cloves', 14);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Vegetable broth', '500ml', 14);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Cream', '100ml', 14);

-- Ингредиенты для рецепта с id = 15 (Banana Smoothie Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Bananas', '3', 15);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Milk', '300ml', 15);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Yogurt', '150ml', 15);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Honey', '30g', 15);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Ice cubes', '5', 15);

-- Ингредиенты для рецепта с id = 16 (Broccoli Salad Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Broccoli', '300g', 16);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Cherry tomatoes', '200g', 16);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Red onion', '1', 16);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Feta cheese', '100g', 16);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Balsamic vinegar', '50ml', 16);

-- Ингредиенты для рецепта с id = 17 (Spinach Pasta Recipe)
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Spinach', '200g', 17);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Flour', '300g', 17);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Eggs', '2', 17);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Olive oil', '30ml', 17);
INSERT INTO ingredient (name, value, recipe_id) VALUES ('Salt', '8g', 17);
