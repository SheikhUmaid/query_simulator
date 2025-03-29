import { parseQuery } from "./queryParser.js";
import db from "./mockDb.js";

export const processQuery = (req, res) => {
    const { question } = req.body;
    if (!question) return res.status(400).json({ message: "Query required" });

    const pseudoSQL = parseQuery(question);
    
    db.all(pseudoSQL, [], (err, rows) => {
        if (err) return res.status(500).json({ message: "Database error" });
        res.json({ query: pseudoSQL, result: rows });
    });
};

export const explainQuery = (req, res) => {
    const { question } = req.body;
    if (!question) return res.status(400).json({ message: "Query required" });

    const pseudoSQL = parseQuery(question);
    res.json({ explanation: `Your query translates to: ${pseudoSQL}` });
};

export const validateQuery = (req, res) => {
    const { question } = req.body;
    if (!question) return res.status(400).json({ message: "Query required" });

    const pseudoSQL = parseQuery(question);
    res.json({ valid: pseudoSQL !== "UNKNOWN", pseudoSQL });
};
