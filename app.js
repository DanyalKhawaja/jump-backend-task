import express from "express";
import dotenv from "dotenv";
import { sendEmail } from "./emailer.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();

const { PORT } = process.env;

sendEmail("test-token");

app.get("/get", (req, res) => {
  res.json({ response: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
