import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  MessageCircle, 
  Volume2, 
  VolumeX, 
  Minimize2, 
  Maximize2,
  Lightbulb,
  HelpCircle
} from "lucide-react";

export const ProfessorOverlay = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const professorMessages = [
    {
      type: "greeting",
      text: "Welcome to the lesson! I'm here to help you understand HTML text formatting.",
      hint: "Click on code examples to see explanations"
    },
    {
      type: "tip",
      text: "Remember, semantic elements like <strong> are better than <b> for accessibility!",
      hint: "Screen readers understand the meaning better"
    },
    {
      type: "encouragement", 
      text: "You're doing great! Ready to try the interactive examples?",
      hint: "Practice makes perfect"
    }
  ];

  const currentMsg = professorMessages[currentMessage];

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="w-16 h-16 rounded-full bg-gradient-primary shadow-glow hover:scale-105 transition-all duration-300"
        >
          <Bot className="w-8 h-8" />
        </Button>
        <Badge className="absolute -top-2 -right-2 bg-accent animate-pulse">
          AI
        </Badge>
      </div>
    );
  }

  return (
    <div className="w-80 bg-card/60 backdrop-blur-sm border-l border-border p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">AI Professor</h3>
            <p className="text-xs text-muted-foreground">Ready to help</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(true)}
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* 3D Professor Placeholder */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-6 border-2 border-dashed border-primary/20 flex flex-col items-center justify-center min-h-[200px]">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 animate-pulse">
          <Bot className="w-8 h-8 text-primary-foreground" />
        </div>
        <p className="text-sm text-muted-foreground text-center">
          3D AI Professor
          <br />
          <span className="text-xs">(Three.js integration placeholder)</span>
        </p>
      </div>

      {/* Current Message */}
      <Card className="p-4 mb-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <div className="flex items-start space-x-2 mb-3">
          {currentMsg.type === 'tip' ? (
            <Lightbulb className="w-5 h-5 text-warning mt-0.5" />
          ) : (
            <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
          )}
          <div className="flex-1">
            <p className="text-sm font-medium mb-2">{currentMsg.text}</p>
            {currentMsg.hint && (
              <p className="text-xs text-muted-foreground italic">{currentMsg.hint}</p>
            )}
          </div>
        </div>
      </Card>

      {/* Interactive Buttons */}
      <div className="space-y-2 mb-4">
        <Button variant="outline" size="sm" className="w-full justify-start">
          <HelpCircle className="w-4 h-4 mr-2" />
          Ask a Question
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          <Lightbulb className="w-4 h-4 mr-2" />
          Get a Hint
        </Button>
      </div>

      {/* Message Navigation */}
      <div className="flex justify-between items-center mt-auto">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentMessage(Math.max(0, currentMessage - 1))}
          disabled={currentMessage === 0}
        >
          Previous
        </Button>
        <div className="flex space-x-1">
          {professorMessages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentMessage ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentMessage(Math.min(professorMessages.length - 1, currentMessage + 1))}
          disabled={currentMessage === professorMessages.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
};