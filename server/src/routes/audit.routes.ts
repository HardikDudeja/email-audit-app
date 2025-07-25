import express from "express";
import multer from "multer";
import { reviewEmail } from "../controllers/audit.controller";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// router.post("/", upload.single("email"), handleAudit);

router.post("/reviewEmail", reviewEmail);

export default router;
