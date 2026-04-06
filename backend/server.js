import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "../backend/routes/users.js";
import recordRoutes from "../backend/routes/records.js";
import dashboardRoutes from "../backend/routes/dashboard.js";

dotenv.config();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.use("/users",userRoutes);
app.use("/records",recordRoutes);
app.use("/dashboard",dashboardRoutes);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("API working");
// });