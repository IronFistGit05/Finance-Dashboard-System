import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Register new user
export const registerUser = async (req,res) => {
    const {name, email, password, role} = req.body;

    try {
        const hashed = await bcrypt.hash(password, 10);

        const newUser = await pool.query("INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *", [name, email, hashed, role || "viewer"]);
        res.json(newUser.rows[0]);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

//User Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

  if (user.rows.length === 0)
    return res.status(404).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.rows[0].password);

  if (!valid) return res.status(401).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user.rows[0].id, role: user.rows[0].role },
    "secret"
  );

  res.json({ token });
};