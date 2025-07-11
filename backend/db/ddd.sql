CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE NOT NULL,  
password VARCHAR(255) NOT NULL,
create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories(
category_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
name VARCHAR(255) NOT NULL,
type VARCHAR(50) CHECK (type IN ('income', 'expense')) NOT NULL
);

CREATE TABLE budget(
budget_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
category_id INTEGER REFERENCES categories(category_id) ON DELETE CASCADE,
amount INTEGER NOT NULL,
startDate DATE NOT NULL,
endDate DATE NOT NULL
);


CREATE TABLE transactions(
transaction_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
category_id INTEGER REFERENCES categories(category_id) ON DELETE CASCADE,
amount DECIMAL(10, 2) NOT NULL,
type VARCHAR(50) CHECK (type IN ('income', 'expense')) NOT NULL,
description VARCHAR(255) NOT NULL,
date DATE NOT NULL,
status VARCHAR(50) CHECK (status IN ('completed', 'pending', 'canceled')) NOT NULL
);
