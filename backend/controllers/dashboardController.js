import pool from "../db.js";

//Get Summary
export const getSummary = async (req, res) => {
  const income = await pool.query(
    "SELECT SUM(amount) FROM records WHERE type='income'"
  );

  const expense = await pool.query(
    "SELECT SUM(amount) FROM records WHERE type='expense'"
  );

  res.json({
    totalIncome: income.rows[0].sum || 0,
    totalExpense: expense.rows[0].sum || 0,
    balance:
      (income.rows[0].sum || 0) - (expense.rows[0].sum || 0)
  });
};

//Get Category wise Totals
export const categoryTotals = async (req, res) => {
  const result = await pool.query(
    "SELECT category, SUM(amount) FROM records GROUP BY category"
  );

  res.json(result.rows);
};