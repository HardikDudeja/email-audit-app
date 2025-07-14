import fs from "fs";
import { simpleParser } from "mailparser";

export async function parseEml(filePath: string): Promise<string> {
  const emlData = fs.readFileSync(filePath, "utf-8");
  const parsed = await simpleParser(emlData);
  return parsed.text || parsed.html || "";
}
