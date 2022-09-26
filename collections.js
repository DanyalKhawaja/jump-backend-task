import mongoose from "mongoose";
const { DOC_SIZE: size, MAX_DOCS: max } = process.env;
  const cache = new mongoose.Schema(
    {
      key: { type: String, unique: false },
      value: String,
      timeStamp: Number,
    },{
        autoCreate: true,
        capped: { size, max },
      }
  );
  
  export const Cache = mongoose.model("To", cache);