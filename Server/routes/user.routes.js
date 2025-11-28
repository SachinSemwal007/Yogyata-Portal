import express from "express";

const router = express.Router();

// Temporary controller functions without DB
router.get("/test", (req, res) => {
  res.json({ message: "User route reached (DB will come later)" });
});

router.post("/register", (req, res) => {
  res.json({ message: "Register API will connect to PostgreSQL soon" });
});

export default router;
