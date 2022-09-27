import { Router } from "express";
import conn from "./db-manager.js";
import { Cache } from "./collections.js";
import { genRandValue, getCurrDateVal, dateVariance } from "./utils.js";

const router = Router();

router.post("/key", (req, res) => {
  const { key } = req.body;
  const newDoc = {
    key,
    value: genRandValue(),
    timeStamp: getCurrDateVal(),
  };

  /* Used MongoDB Capped collection feature to 
   provide fast and circular data persistence */
   
  conn.then(async () => {
    const keyFound = await Cache.findOne({
      key,
    })
      .sort({ timeStamp: -1 })
      .lean();
    if (keyFound && keyFound.timeStamp > dateVariance()) {
      console.log(`Cache hit`);
      newDoc.value = keyFound.value;
    } else console.log(`Cache miss`);

    /* Insert document in async manner on every
       request whether the key is old or new.
       Existing key will be re-inserted as duplicate  
       with a new or previous(unexpired) value */

    setImmediate(() => Cache.create(newDoc));

    res.end(newDoc.value);
  });
});

export default router;
