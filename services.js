import { Router } from "express";
import { conn } from "./db-manager.js";

const router = Router();

router.post("/key", (req, res) => {
  const { key } = req.body;
  conn.then((result) => {
    console.log("Database successfully connected", result);
    res.json({ key, response: "ok" });
  });
});

export default router;
