import mongoose from "mongoose";

const { DOC_SIZE, MAX_DOCS } = process.env;
const size = parseInt(DOC_SIZE),
  max = parseInt(MAX_DOCS);
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
