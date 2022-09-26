import { Router } from "express";
import { conn } from "./db-manager.js";
import { Cache } from "./collections.js";
import dotenv from "dotenv";
import { genRandValue, getCurrDateVal, dateVariance } from "./utils.js";
dotenv.config();

const router = Router();

router.post("/key", (req, res) => {
  const { key } = req.body;
  const newDoc = {
    key,
    value: genRandValue(),
    timeStamp: getCurrDateVal(),
  };

  const cond = {
    key,
    timeStamp: { $gt: dateVariance() },
  };
  conn.then(async (connection) => {
    // console.log("Database successfully connected", connection);
    const keyFound = await Cache.findOne(cond).sort({ timeStamp: -1 });
    if (keyFound) {
      newDoc.value = keyFound.value;
      newDoc.timeStamp = getCurrDateVal();
    }
    setImmediate(() => Cache.create(newDoc));
    console.log(`Cache ${keyFound ? "hit" : "miss"}`);
    res.json(newDoc.value);
  });
});

export default router;
