import { Router } from "express";
import { Stock } from "../models/stock";

const router = Router();

router.get("/stocks/:symbol", async (req, res) => {
  const { symbol } = req.params;
  const stocks = await Stock.find({ symbol })
    .sort({ timestamp: -1 })
    .limit(100);
  res.json(stocks);
});

export default router;
