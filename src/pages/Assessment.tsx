import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sidebar } from "@/components/Sidebar";
import { CodeEditor } from "@/components/CodeEditor";
import { Play, Send, CheckCircle, AlertCircle } from "lucide-react";

const Assessment = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <!-- Add your content here -->
    
</body>
</html>`);
  const [feedback, setFeedback] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectRequirements = [
    "Create a basic HTML document with proper structure",
    "Include a meaningful title in the head section", 
    "Add a main heading (h1) to your page",
    "Create at least 3 paragraphs of content",
    "Include one ordered list and one unordered list",
    "Add at least one image with appropriate alt text",
    "Create a simple navigation menu with 3 links"
  ];

  const handleRunCode = () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false);
      setFeedback("Code executed successfully! Your HTML structure looks good. Consider adding more semantic elements like <nav> and <main>.");
    }, 2000);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setFeedback("Excellent work! Your HTML structure follows best practices. You've successfully completed this module. The AI Professor has provided detailed feedback on areas for improvement.");
    
    // Navigate to progress after a delay
    setTimeout(() => {
      navigate("/progress");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">HTML Basics Assessment</h1>
          <p className="text-muted-foreground">Complete the project requirements to finish this module</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Instructions Panel */}
          <div className="xl:col-span-1">
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-card sticky top-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-primary" />
                Project Requirements
              </h2>
              
              <div className="space-y-3">
                {projectRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-xs text-primary font-medium">{index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{requirement}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-primary font-medium mb-2">💡 Pro Tip</p>
                <p className="text-sm text-muted-foreground">
                  Use semantic HTML elements to improve accessibility and SEO. The AI Professor will provide personalized feedback!
                </p>
              </div>
            </div>
          </div>

          {/* Code Editor and Output */}
          <div className="xl:col-span-2 space-y-6">
            {/* Code Editor */}
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Code Editor</h3>
                <Button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  variant="outline"
                  size="sm"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isRunning ? "Running..." : "Run Code"}
                </Button>
              </div>
              
              <CodeEditor value={code} onChange={setCode} />
            </div>

            {/* Feedback Area */}
            {feedback && (
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-card animate-slide-up">
                <div className="flex items-start space-x-3">
                  {submitted ? (
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  ) : (
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-xs text-white font-bold">AI</span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold mb-2">
                      {submitted ? "Assessment Complete!" : "AI Professor Feedback"}
                    </h4>
                    <p className="text-muted-foreground">{feedback}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate(`/course/${courseId}/module/${moduleId}`)}
              >
                Back to Lesson
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={submitted}
                className="bg-gradient-primary hover:bg-gradient-secondary"
              >
                <Send className="w-4 h-4 mr-2" />
                {submitted ? "Submitted!" : "Submit for Evaluation"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;