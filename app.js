import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const { PORT } = process.env;

app.get("/get", (req, res) => {
  res.json({ response: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
