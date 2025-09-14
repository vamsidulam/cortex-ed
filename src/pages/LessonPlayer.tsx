import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/Sidebar";
import { LessonContent } from "@/components/LessonContent";
import { ProfessorOverlay } from "@/components/ProfessorOverlay";
import { ChevronLeft, ChevronRight, List } from "lucide-react";

const LessonPlayer = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const [showModuleNav, setShowModuleNav] = useState(true);

  const lessons = [
    { id: 1, title: "Introduction to HTML", completed: true },
    { id: 2, title: "HTML Document Structure", completed: true },
    { id: 3, title: "Text Elements and Formatting", completed: false, current: true },
    { id: 4, title: "Links and Navigation", completed: false },
    { id: 5, title: "Images and Media", completed: false },
    { id: 6, title: "Forms and Input Elements", completed: false },
    { id: 7, title: "Semantic HTML", completed: false },
    { id: 8, title: "HTML Best Practices", completed: false }
  ];

  const currentLesson = lessons.find(l => l.current) || lessons[0];

  const handleNext = () => {
    const currentIndex = lessons.findIndex(l => l.current);
    if (currentIndex < lessons.length - 1) {
      // Navigate to next lesson (in real app, would update URL)
      console.log("Next lesson");
    } else {
      // Navigate to assessment
      navigate(`/course/${courseId}/module/${moduleId}/assessment`);
    }
  };

  const handlePrevious = () => {
    const currentIndex = lessons.findIndex(l => l.current);
    if (currentIndex > 0) {
      console.log("Previous lesson");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Sidebar />
      
      <div className="ml-64 flex h-screen">
        {/* Module Navigation Panel */}
        {showModuleNav && (
          <div className="w-80 border-r border-border bg-card/40 backdrop-blur-sm p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg">HTML Basics</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowModuleNav(false)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    lesson.current
                      ? "bg-primary/10 border border-primary/20 text-primary"
                      : lesson.completed
                      ? "bg-accent/10 text-accent hover:bg-accent/20"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        lesson.completed
                          ? "bg-accent"
                          : lesson.current
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                    <span className="text-sm font-medium">{lesson.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Lesson Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            {!showModuleNav && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowModuleNav(true)}
                className="mb-4"
              >
                <List className="w-4 h-4 mr-2" />
                Show Lessons
              </Button>
            )}
            
            <LessonContent lesson={currentLesson} />

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={lessons.findIndex(l => l.current) === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="flex space-x-4">
                <Button
                  variant="secondary"
                  onClick={() => navigate(`/course/${courseId}/module/${moduleId}/assessment`)}
                >
                  Take Assessment
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-gradient-primary hover:bg-gradient-secondary"
                >
                  {lessons.findIndex(l => l.current) === lessons.length - 1 ? (
                    "Complete Module"
                  ) : (
                    <>
                      Next Lesson
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Professor Overlay Panel */}
          <ProfessorOverlay />
        </div>
      </div>
    </div>
  );
};

export default LessonPlayer;