
import express from "express";
import queryRoutes from "./routes.js"
import bodyParser from "body-parser";
import cors from "cors"
const app = express();
app.use(cors())

app.use(bodyParser.json());




app.use("/api", queryRoutes);

export default app