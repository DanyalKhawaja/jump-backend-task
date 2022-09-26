import mongoose from "mongoose";

  const cache = new mongoose.Schema(
    {
      key: { type: String, unique: true },
      value: String,
      createdAt: Number,
    }
  );
  
  export const Cache = mongoose.model("Cache", cache);