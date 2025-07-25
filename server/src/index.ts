import express from "express";
import dotenv from "dotenv";
dotenv.config();
import auditRoutes from "./routes/audit.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/audit", auditRoutes);

app.listen(PORT, () => {
  console.log(`Email Audit Service running on port ${PORT}`);
});

export default app;
