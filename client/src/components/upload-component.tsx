import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, FileText, AlertCircle } from "lucide-react";

interface FileUploadProps {
  onFilesUploaded: (files: File[]) => void;
}

export function FileDrop({ onFilesUploaded }: FileUploadProps) {
  const [error, setError] = useState<string>("");

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      setError("");

      if (rejectedFiles.length > 0) {
        setError("Some files were rejected. Please only upload .eml files.");
        return;
      }

      if (acceptedFiles.length === 0) {
        setError("No valid files selected.");
        return;
      }

      onFilesUploaded(acceptedFiles);
    },
    [onFilesUploaded]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "message/rfc822": [".eml"],
        "application/octet-stream": [".eml"],
      },
      maxSize: 10 * 1024 * 1024, // 10MB
      multiple: true,
    });

  return (
    <div className="space-y-4">
      <Card
        {...getRootProps()}
        className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors ${
          isDragActive && !isDragReject
            ? "border-blue-500 bg-blue-50"
            : isDragReject
            ? "border-red-500 bg-red-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-4">
          <div
            className={`p-4 rounded-full ${
              isDragActive && !isDragReject
                ? "bg-blue-100"
                : isDragReject
                ? "bg-red-100"
                : "bg-gray-100"
            }`}
          >
            {isDragReject ? (
              <AlertCircle className="h-8 w-8 text-red-600" />
            ) : (
              <Upload
                className={`h-8 w-8 ${
                  isDragActive ? "text-blue-600" : "text-gray-600"
                }`}
              />
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              {isDragActive
                ? isDragReject
                  ? "Invalid file type"
                  : "Drop your files here"
                : "Upload Email Files"}
            </h3>
            <p className="text-gray-600 mb-4">
              {isDragActive
                ? isDragReject
                  ? "Only .eml files are accepted"
                  : "Release to upload"
                : "Drag and drop your .eml files here, or click to browse"}
            </p>

            {!isDragActive && (
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Choose Files
              </Button>
            )}
          </div>
        </div>
      </Card>

      <div className="text-sm text-gray-500 space-y-1">
        <p>• Supported format: .eml (Email Message Format)</p>
        <p>• Maximum file size: 10MB per file</p>
        <p>• You can upload multiple files at once</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
