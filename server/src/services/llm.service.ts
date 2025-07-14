import { GoogleGenAI } from "@google/genai";

import { Rule, AuditResult } from "../types";
import { emailRules } from "../rules/email_rules";

const genAI = new GoogleGenAI({
  apiKey:
    process.env.GEMINI_API_KEY || "AIzaSyDDO8aQ_cY-aulTB4FwxbTkvVlyX1VUIbo",
});

export async function auditEmail(email: string, rules: Rule[]): Promise<any> {
  const results: AuditResult[] = [];

  for (const rule of rules) {
    const prompt: string = `
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
      const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      console.log("Response from Gemini:", response);
      console.log("printing text", response.text);
      return response.text;
    } catch (err) {
      console.error("Error occurred while communicating with Gemini:", err);
    }
    break;
  }
}

console.log(auditEmail("This is a test email", emailRules));
