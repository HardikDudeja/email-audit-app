import { Mail } from "lucide-react";

export default function Header() {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-blue-600 p-3 rounded-full mr-3">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">
          Email Audit Service
        </h1>
      </div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Assess the quality and compliance of your email communications with our
        intelligent audit system. Upload your .eml files to receive detailed
        feedback and improvement recommendations.
      </p>
    </div>
  );
}
