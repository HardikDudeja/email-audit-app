import { Request, Response } from "express";
import { auditEmail } from "../services/llm.service";

export async function reviewEmail(req: Request, res: Response) {
  const email = req.body.email;
  if (!email) {
    return res.status(400).json({ error: "Email content is required." });
  }
  const results = await auditEmail(email);
  return res.status(200).json({ results });
}
