"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditEmail = auditEmail;
const genai_1 = require("@google/genai");
const email_rules_1 = require("../rules/email_rules");
const genAI = new genai_1.GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "AIzaSyDDO8aQ_cY-aulTB4FwxbTkvVlyX1VUIbo",
});
function auditEmail(email, rules) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (const rule of rules) {
            const prompt = `
        You are an expert communication auditor.

        Given this email:

        """
        ${email}
        """

        Evaluate this rule:
        "${rule.prompt}"

        Reply ONLY with one of these formats:
        - PASS: <justification>
        - FAIL: <justification>
        `;
            try {
                const response = yield genAI.models.generateContent({
                    model: "gemini-2.5-flash",
                    contents: prompt,
                });
                console.log("Response from Gemini:", response);
                console.log("printing text", response.text);
                return response.text;
            }
            catch (err) {
                console.error("Error occurred while communicating with Gemini:", err);
            }
            break;
        }
    });
}
console.log(auditEmail("This is a test email", email_rules_1.emailRules));
