export interface Rule {
  id: string;
  description: string;
  prompt: string;
  weight: number;
}

export interface AuditResult {
  ruleId: string;
  description: string;
  passed: boolean;
  justification: string;
  weight: number;
}
