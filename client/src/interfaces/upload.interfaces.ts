export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
}

export interface AuditResult {
  id: string;
  fileName: string;
  overallScore: number;
  totalRules: number;
  passedRules: number;
  failedRules: number;
  ruleResults: {
    ruleName: string;
    passed: boolean;
    score: number;
    justification: string;
  }[];
  strengths: string[];
  improvements: string[];
}
