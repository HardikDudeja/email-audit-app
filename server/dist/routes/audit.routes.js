"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const audit_controller_1 = require("../controllers/audit.controller");
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: "uploads/" });
router.get("/checkAuditApi", (req, res) => {
    res.send("Audit Service is running");
});
router.post("/", upload.single("email"), audit_controller_1.handleAudit);
exports.default = router;
