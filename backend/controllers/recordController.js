import pool from "../db.js";

//Create a record
export const createRecord = async (req, res) => {
  const { amount, type, category, date, notes } = req.body;

  const result = await pool.query(
    "INSERT INTO records (user_id, amount, type, category, date, notes) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
    [req.user.id, amount, type, category, date, notes]
  );

  res.json(result.rows[0]);
};

//Get all records (with filters)
export const getRecords = async (req, res) => {
  const { type, category } = req.query;

  let query = "SELECT * FROM records WHERE user_id=$1";
  let values = [req.user.id];

  if (type) {
    values.push(type);
    query += ` AND type=$${values.length}`;
  }

  if (category) {
    values.push(category);
    query += ` AND category=$${values.length}`;
  }

  const result = await pool.query(query, values);
  res.json(result.rows);
};

//Delete a record
export const deleteRecord = async (req, res) => {
  await pool.query("DELETE FROM records WHERE id=$1", [req.params.id]);
  res.json({ message: "Deleted" });
};