import { GoogleGenAI } from "@google/genai";

import { Rule, AuditResult } from "../types";
import { emailRules } from "../rules/email_rules";

const genAI = new GoogleGenAI({
  apiKey:
    process.env.GEMINI_API_KEY || "AIzaSyDDO8aQ_cY-aulTB4FwxbTkvVlyX1VUIbo",
});

export async function auditEmail(email: string): Promise<any> {
  const results: AuditResult[] = [];
  const rules: Rule[] = emailRules;

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
      const text = response?.text?.trim() || "";
      const passed: boolean = text?.startsWith("PASS:") || false;
      results.push({
        ruleId: rule.id,
        description: rule.description,
        passed,
        justification: text,
        weight: rule.weight,
      });
    } catch (err) {
      console.error("Error occurred while communicating with Gemini:", err);
    }
  }
  return results;
}
