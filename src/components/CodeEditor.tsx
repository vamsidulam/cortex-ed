import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, RotateCcw } from "lucide-react";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
}

export const CodeEditor = ({ value, onChange, language = "html" }: CodeEditorProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleReset = () => {
    const defaultCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <!-- Add your content here -->
    
</body>
</html>`;
    onChange(defaultCode);
  };

  const handleDownload = () => {
    const blob = new Blob([value], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative">
      {/* Editor Header */}
      <div className="flex items-center justify-between p-3 bg-muted/50 border border-border rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-sm font-mono text-muted-foreground ml-4">
            {language.toUpperCase()}
          </span>
        </div>
        
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="h-8 px-2"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 px-2"
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDownload}
            className="h-8 px-2"
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Code Input Area */}
      <div className="relative">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[400px] font-mono text-sm resize-none border-x border-b border-border rounded-t-none rounded-b-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
          placeholder="Enter your code here..."
        />
        
        {/* Line Numbers (Simple Implementation) */}
        <div className="absolute left-3 top-3 pointer-events-none text-muted-foreground/50 text-sm font-mono leading-6 select-none">
          {value.split('\n').map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>
      </div>

      {/* Copy Feedback */}
      {copied && (
        <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm animate-fade-in">
          Copied!
        </div>
      )}

      {/* Monaco Editor Placeholder Note */}
      <div className="mt-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> This is a simplified code editor. In production, you would integrate
          Monaco Editor or CodeMirror for advanced features like syntax highlighting, IntelliSense,
          and code completion.
        </p>
      </div>
    </div>
  );
};