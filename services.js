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

  conn.then(async () => {
    const keyFound = await Cache.findOne({
      key,
    }).lean();
    let y=dateVariance();
    if (keyFound && keyFound.timeStamp > y) {
      newDoc.value = keyFound.value;
    }
    setImmediate(() => Cache.create(newDoc));
    console.log(`Cache ${keyFound ? "hit" : "miss"}`);
    res.json(newDoc.value);
  });
});

export default router;
