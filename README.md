# 💰 Finance Dashboard Backend (PERN Stack)

A robust backend system for a Finance Dashboard built using the **PERN stack** (PostgreSQL, Express.js, Node.js). This system provides secure APIs for user management, financial record tracking, and real-time dashboard analytics.

---

## 🚀 Features

* **Secure Authentication:** User login and registration using JWT (JSON Web Tokens).
* **Role-Based Access Control (RBAC):** Defined permissions for `Admin`, `Analyst`, and `Viewer` roles.
* **Financial Records Management:** Full CRUD operations for tracking financial data.
* **Smart Filtering:** Filter records by transaction type and category.
* **Analytics APIs:** Summary endpoints for calculating income, expenses, balance, and category-wise totals.
* **Database Integration:** Optimized relational data storage with PostgreSQL.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | PostgreSQL |
| **Auth** | JWT (JSON Web Tokens) |
| **Encryption** | bcrypt |

---

## 📁 Project Structure

```text
backend/
├── controllers/    # Request handlers and business logic
├── middleware/     # Auth and RBAC middleware
├── routes/          # API endpoint definitions
├── db.js            # PostgreSQL connection configuration
├── server.js        # Entry point of the application
└── .env             # Environment variables (ignored by git)
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository
git clone https://github.com/your-username/finance-dashboard-backend.git
cd finance-dashboard-backend

---

### 2. Install Dependencies
npm install

---

### 3. Configure Environment Variables

Create a `.env` file in the root directory:
PORT=5000
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=finance_db
JWT_SECRET=secret

---

### 4. Setup Database

Run the following SQL queries:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password TEXT,
  role VARCHAR(20),
  status VARCHAR(20)
);

CREATE TABLE records (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  amount NUMERIC,
  type VARCHAR(10),
  category VARCHAR(50),
  date DATE,
  notes TEXT
);
```

---
### 5. Run the Server
npm run dev

Server will run on:
```http://localhost:5000```
---
