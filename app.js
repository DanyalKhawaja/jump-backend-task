import express from "express";
import dotenv from "dotenv";
import { sendEmail } from "./emailer.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import serviceRouter from "./services.js";
import { auth } from "./middlewares.js";

dotenv.config();
const app = express();

const { PORT, SECRET } = process.env;

app.use(express.json());

app.post("/api/v1/register", (req, res) => {
  const token = jwt.sign({ token: "valid" }, SECRET);
  sendEmail(token);
});

app.use("/api/v1/service", auth, serviceRouter);

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
