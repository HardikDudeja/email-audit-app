import express from "express";
import dotenv from "dotenv";
import auditRoutes from "./routes/audit.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/audit", auditRoutes);

app.listen(PORT, () => {
  console.log(`Email Audit Service running on port ${PORT}`);
});

export default app;
