import express from "express";
import multer from "multer";
import { handleAudit } from "../controllers/audit.controller";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("email"), handleAudit);

export default router;
