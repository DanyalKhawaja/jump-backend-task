import { Router } from "express";

const router = Router();

router.post("/key", (req, res) => {
  const { key } = req.body;
  res.json({ key, response: "ok" });
});

export default router;
