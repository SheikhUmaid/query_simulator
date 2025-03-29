import sqlite3 from "sqlite3";

const db = new sqlite3.Database(":memory:");

// Initialize tables
db.serialize(() => {
    db.run("CREATE TABLE sales (id INTEGER PRIMARY KEY, month TEXT, amount INTEGER)");
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, status TEXT)");
    db.run("CREATE TABLE orders (id INTEGER PRIMARY KEY, product_name TEXT)");

    // Insert mock data
    db.run("INSERT INTO sales (month, amount) VALUES ('March', 100000)");
    db.run("INSERT INTO users (name, status) VALUES ('Alice', 'active')");
    db.run("INSERT INTO orders (product_name) VALUES ('Laptop')");
});

export default db;
