import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

const {
    MONGO_USERNAME: user,
    MONGO_PASSWORD: pass,
    MONGO_URL: url,
    MONGO_DBNAME: dbName,
  } = process.env;

  const mongo = {
    uri: `mongodb://${user}:${pass}@${url}/`,
    options: { dbName },
  };
  

  export const conn = mongoose.connect(mongo.uri, mongo.options).then();
  
  

  
  
  