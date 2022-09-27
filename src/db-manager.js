import mongoose from "mongoose";
import env from "./env.js";

const mongo = {
  uri: `mongodb://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_URL}/`,
  options: { dbName: env.MONGO_DBNAME },
};

export default mongoose.connect(mongo.uri, mongo.options);
