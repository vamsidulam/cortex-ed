import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Code, FileText, Image } from "lucide-react";

interface Lesson {
  id: number;
  title: string;
  completed: boolean;
  current?: boolean;
}

interface LessonContentProps {
  lesson: Lesson;
}

export const LessonContent = ({ lesson }: LessonContentProps) => {
  const codeExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Formatting</title>
</head>
<body>
    <h1>Welcome to HTML Text Formatting</h1>
    <p>This is a <strong>bold</strong> text and this is <em>italic</em> text.</p>
    <p>You can also use <mark>highlighted text</mark> for emphasis.</p>
</body>
</html>`;

  return (
    <div className="animate-fade-in">
      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          {lesson.completed && <CheckCircle className="w-6 h-6 text-accent" />}
          <h1 className="text-3xl font-bold">{lesson.title}</h1>
        </div>
        <Badge variant="secondary" className="mb-4">
          Lesson {lesson.id} of 8
        </Badge>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Introduction */}
        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FileText className="w-6 h-6 mr-2 text-primary" />
            Introduction
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            HTML text elements and formatting are fundamental to creating well-structured, 
            readable web content. In this lesson, you'll learn how to properly format text 
            using semantic HTML elements that not only look good but also provide meaning 
            to browsers and assistive technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Understanding text formatting is crucial for accessibility and SEO. We'll cover 
            the difference between semantic elements like <code>&lt;strong&gt;</code> and 
            <code>&lt;em&gt;</code> versus presentational elements, and when to use each appropriately.
          </p>
        </section>

        {/* Key Concepts */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-primary/5 border-primary/20">
              <h3 className="font-semibold mb-2 text-primary">Semantic Elements</h3>
              <p className="text-sm text-muted-foreground">
                Elements like &lt;strong&gt;, &lt;em&gt;, and &lt;mark&gt; that provide meaning
              </p>
            </Card>
            <Card className="p-4 bg-secondary/5 border-secondary/20">
              <h3 className="font-semibold mb-2 text-secondary">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                How screen readers and other assistive technologies interpret text
              </p>
            </Card>
            <Card className="p-4 bg-accent/5 border-accent/20">
              <h3 className="font-semibold mb-2 text-accent">SEO Benefits</h3>
              <p className="text-sm text-muted-foreground">
                Search engines use semantic markup to understand content importance
              </p>
            </Card>
            <Card className="p-4 bg-warning/5 border-warning/20">
              <h3 className="font-semibold mb-2 text-warning">Best Practices</h3>
              <p className="text-sm text-muted-foreground">
                When and how to use different formatting elements effectively
              </p>
            </Card>
          </div>
        </section>

        {/* Code Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Code className="w-6 h-6 mr-2 text-primary" />
            Code Example
          </h2>
          <Card className="p-6 bg-muted/30">
            <pre className="text-sm overflow-x-auto">
              <code className="language-html">{codeExample}</code>
            </pre>
          </Card>
        </section>

        {/* Visual Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Image className="w-6 h-6 mr-2 text-primary" />
            Visual Result
          </h2>
          <Card className="p-6 bg-card border-2 border-dashed border-border">
            <div className="bg-white p-4 rounded border">
              <h1 className="text-2xl font-bold mb-3">Welcome to HTML Text Formatting</h1>
              <p className="mb-2">
                This is a <strong className="font-bold">bold</strong> text and this is{" "}
                <em className="italic">italic</em> text.
              </p>
              <p>
                You can also use{" "}
                <mark className="bg-yellow-200 px-1">highlighted text</mark> for emphasis.
              </p>
            </div>
          </Card>
        </section>

        {/* Practice Tips */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-2xl border border-primary/10">
          <h2 className="text-2xl font-semibold mb-4">💡 Practice Tips</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Always use semantic elements for their meaning, not just appearance</li>
            <li>• Test your HTML with a screen reader to understand accessibility impact</li>
            <li>• Use CSS for purely visual formatting, HTML for semantic structure</li>
            <li>• Consider the difference between importance (&lt;strong&gt;) and emphasis (&lt;em&gt;)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};