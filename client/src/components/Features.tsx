import { Shield, Zap, FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8 mx-6">
      <Card className="text-center">
        <CardContent>
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Compliance Check</h3>
          <p className="text-gray-600">
            Ensure communications meet internal guidelines and standards
          </p>
        </CardContent>
      </Card>
      <Card className="text-center">
        <CardContent>
          <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Dynamic Rules</h3>
          <p className="text-gray-600">
            Flexible rules engine with customizable audit criteria
          </p>
        </CardContent>
      </Card>
      <Card className="text-center">
        <CardContent>
          <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Detailed Reports</h3>
          <p className="text-gray-600">
            Comprehensive feedback with actionable improvement suggestions
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
