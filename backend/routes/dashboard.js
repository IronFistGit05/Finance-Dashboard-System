import express from "express";
import {
  getSummary,
  categoryTotals
} from "../controllers/dashboardController.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/summary", verifyToken, getSummary);
router.get("/categories", verifyToken, categoryTotals);

export default router;