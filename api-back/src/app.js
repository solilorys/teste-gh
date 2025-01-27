import express from "express";
import atividadeRoutes from "./routes/atividadeRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(atividadeRoutes);

export default app;
