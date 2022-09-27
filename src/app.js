import express from "express";
import { sendEmail } from "./emailer.js";
import serviceRouter from "./services.js";
import { auth } from "./middlewares.js";
import { genToken } from "./utils.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.end("Ok");
});

app.post("/api/v1/register", async (req, res) => {
  const { email } = req.body;
  const token = genToken();
  try {
    await sendEmail(token, email);
    res.status(200).end();
  } catch (e) {
    res.status(500).end();
  }
});

app.use("/api/v1/service", auth, serviceRouter);

export default app;
