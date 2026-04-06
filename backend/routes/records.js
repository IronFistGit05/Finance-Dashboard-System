import express from "express";
import {
  createRecord,
  getRecords,
  deleteRecord
} from "../controllers/recordController.js";

import { verifyToken } from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/role.js";

const router = express.Router();

router.post("/", verifyToken, authorizeRoles("admin"), createRecord);
router.get("/", verifyToken, getRecords);
router.delete("/:id", verifyToken, authorizeRoles("admin"), deleteRecord);

export default router;