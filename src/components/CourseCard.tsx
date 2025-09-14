import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Play } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  modules: number;
  completedModules: number;
  difficulty: string;
  duration: string;
  color: string;
}

interface CourseCardProps {
  course: Course;
  delay?: number;
}

export const CourseCard = ({ course, delay = 0 }: CourseCardProps) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Find the next uncompleted module (for demo, just go to first module)
    navigate(`/course/${course.id}/module/1`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div
      className="bg-card/60 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Header with gradient */}
      <div className={`h-32 bg-gradient-to-r ${course.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            {course.completedModules}/{course.modules} modules
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
          {course.description}
        </p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>

        {/* Meta information */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>{course.modules} modules</span>
            </div>
          </div>
          <Badge variant="outline" className={getDifficultyColor(course.difficulty)}>
            {course.difficulty}
          </Badge>
        </div>

        {/* Action Button */}
        <Button
          onClick={handleContinue}
          className="w-full bg-gradient-primary hover:bg-gradient-secondary group-hover:scale-105 transition-transform duration-200"
        >
          {course.progress > 0 ? (
            <>
              <Play className="w-4 h-4 mr-2" />
              Continue Learning
            </>
          ) : (
            "Start Course"
          )}
        </Button>
      </div>
    </div>
  );
};