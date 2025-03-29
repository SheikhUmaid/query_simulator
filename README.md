

# GenAI Mini Data Query Simulation Engine

## Overview

This project is a **lightweight backend service** that simulates a simplified version of a  **Gen AI Analytics data query system** . It provides an API to process **natural language queries** and translates them into pseudo-SQL statements, simulating AI-powered data querying.

## Features

* Accepts natural language queries and translates them into SQL-like syntax.
* Provides explanations of the query breakdown.
* Validates query feasibility.
* Uses **SQLite (in-memory or persistent)** for data simulation.
* Implemented using  **Node.js with Express.js** .

---

## Installation & Setup

### 1️⃣ Prerequisites

Ensure you have the following installed:

* **Node.js** (>= 16)
* **npm** (Node Package Manager)
* **SQLite3**

To verify installations:

```sh
node -v  # Check Node.js version
npm -v   # Check npm version
sqlite3 --version  # Check SQLite installation
```

### 2️⃣ Clone the Repository

```sh
git clone <repository-url>
cd genai-query-engine
```

### 3️⃣ Install Dependencies

```sh
npm install
```

### 4️⃣ Start the Server

```sh
node index.js
```

Or, for auto-reloading:

```sh
npx nodemon index.js
```

The server should now be running at `http://localhost:3000/`.

---

## API Documentation

### 📌 Base URL

```
http://localhost:3000
```

### 1️⃣ **Query Execution**

#### **Endpoint:** `POST /query`

#### **Description:** Converts a natural language query into SQL and returns mock data.

#### **Request:**

```json
{
  "query": "Show me total sales for March."
}
```

#### **Response:**

```json
{
  "query": "SELECT amount FROM sales WHERE month='March';",
  "result": [
    { "amount": 100000 }
  ]
}
```

---

### 2️⃣ **Query Explanation**

#### **Endpoint:** `POST /explain`

#### **Description:** Returns a breakdown of how the query was interpreted.

#### **Request:**

```json
{
  "query": "Show me total sales for March."
}
```

#### **Response:**

```json
{
  "query": "SELECT amount FROM sales WHERE month='March';",
  "explanation": "Filtering sales where month is 'March' and selecting the amount column."
}
```

---

### 3️⃣ **Query Validation**

#### **Endpoint:** `POST /validate`

#### **Description:** Checks if the query can be processed.

#### **Request:**

```json
{
  "query": "Show me details of the CEO."
}
```

#### **Response (if valid):**

```json
{
  "valid": true,
  "message": "Query can be processed."
}
```

#### **Response (if invalid):**

```json
{
  "valid": false,
  "message": "Requested data is not available in the database."
}
```

---

## **Database Schema (Mock Data)**

```sql
CREATE TABLE sales (
    id INTEGER PRIMARY KEY,
    month TEXT,
    amount INTEGER
);

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    status TEXT
);

CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    product_name TEXT
);
```

---

## **Testing with cURL or Postman**

### **Using cURL**

#### **Test Query Execution**

```sh
curl -X POST http://localhost:3000/query \n     -H "Content-Type: application/json" \n     -d '{"query": "Show me total sales for March."}'
```

#### **Test Query Explanation**

```sh
curl -X POST http://localhost:3000/explain \n     -H "Content-Type: application/json" \n     -d '{"query": "Show me total sales for March."}'
```

#### **Test Query Validation**

```sh
curl -X POST http://localhost:3000/validate \n     -H "Content-Type: application/json" \n     -d '{"query": "Show me details of the CEO."}'
```

---

## **Deployment (Optional)**

This project can be deployed to  **Render, Railway, or Heroku** .

### 1️⃣ Deploy to Heroku

```sh
heroku create genai-query-engine
heroku buildpacks:add heroku/nodejs
heroku git:remote -a genai-query-engine
git push heroku main
```

### 2️⃣ Deploy to Railway

```sh
railway init
railway up
```

---

## **Evaluation Criteria**

✅  **Code Quality** : Clean, modular code with best practices.
✅  **API Design** : Clear and well-documented endpoints.
✅  **AI Query Simulation Logic** : Converts simple NL queries into SQL-like structures.
✅  **Error Handling** : Manages invalid queries gracefully.
✅  **Documentation** : Easy setup and usage guide.

---

## **Future Improvements**

* ✅ Improve NLP query processing using AI models.
* ✅ Add support for more complex query translations.
* ✅ Implement user authentication & roles.

---

### **👨‍💻 Author:** *Sheikh Umaid*

### **📅 Last Updated:** *March 2025*

---

🚀 *Happy Coding!* 🎯
