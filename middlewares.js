import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const { SECRET } = process.env;

export function auth(req, res, next) {
  const token = req.headers["jump-auth-token"];
  try {
    jwt.verify(token, SECRET);
    next();
  } catch (err) {
    console.log("Unauthorized request", err);
    res.status(401).json({ response: "Unknown error" });
  }
}
