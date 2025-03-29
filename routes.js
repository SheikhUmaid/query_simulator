import express from "express";
import { processQuery, explainQuery, validateQuery } from "./controllers.js";

const router = express.Router();

router.post("/query", processQuery);
router.post("/explain", explainQuery);
router.post("/validate", validateQuery);

export default router;
