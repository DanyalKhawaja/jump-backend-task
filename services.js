import { Router } from "express";
import { conn } from "./db-manager.js";
import { Cache } from "./collections.js";

const router = Router();

router.post("/key", (req, res) => {
  const { key } = req.body;
  conn.then(async (connection) => {
    console.log("Database successfully connected", connection);
    await Cache.create({key, value: Math.random(), createdAt: new Date().valueOf()})
    const result = await Cache.find();
   
    res.json({ key, result,response: "ok" });
  });
});

export default router;
