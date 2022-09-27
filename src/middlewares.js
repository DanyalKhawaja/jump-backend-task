import { verifyToken } from "./utils.js";

export function auth(req, res, next) {
  const token = req.headers["jump-auth-token"];
  try {
    verifyToken(token);
    next();
  } catch (err) {
    console.log("Unauthorized request", err);
    res.status(401).json({ response: "Unknown error" });
  }
}
