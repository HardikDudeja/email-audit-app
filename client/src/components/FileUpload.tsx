import { Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function FileUpload() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Upload Email Files
          </CardTitle>
          <CardDescription>
            Upload your .eml files to begin the audit process. You can upload
            multiple files at once.
          </CardDescription>
          <CardContent></CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
