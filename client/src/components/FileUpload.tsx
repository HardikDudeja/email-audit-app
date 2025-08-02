import { useState } from "react";

import { Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FileDrop } from "./upload-component";
import type { UploadedFile, AuditResult } from "@/interfaces/upload.interfaces";

export default function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [error, setError] = useState<string>("");
  const [auditResults, setAuditResults] = useState<AuditResult[]>([]);

  const handleFilesUploaded = (files: File[]) => {
    const newFiles: UploadedFile[] = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      file,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    setError("");
  };
  return (
    <div>
      {auditResults.length === 0 ? (
        <>
          <div className="mx-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Upload Email Files
                </CardTitle>
                <CardDescription>
                  Upload your .eml files to begin the audit process. You can
                  upload multiple files at once.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FileDrop onFilesUploaded={handleFilesUploaded} />
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <>we have results</>
      )}
    </div>
  );
}
