import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Temporary Test Route (No DB)
app.get("/", (req, res) => {
  res.send("Yogyata Backend Running — PostgreSQL will be added soon!");
});

// Example routes (no DB needed)
import userRoutes from "./routes/user.routes.js";
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
