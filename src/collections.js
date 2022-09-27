import mongoose from "mongoose";
import env from "./env.js";

const size = parseInt(env.DOC_SIZE),
  max = parseInt(env.MAX_DOCS);

const cache = new mongoose.Schema(
  {
    key: { type: String, index: true },
    value: String,
    timeStamp: Number,
  },
  {
    capped: { size, max, autoIndexId: true },
  }
);

export const Cache = mongoose.model("Cache", cache);
