import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Award, Calendar } from "lucide-react";

export const ProgressCharts = () => {
  // Sample data for charts
  const weeklyProgress = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 1.8 },
    { day: "Wed", hours: 3.2 },
    { day: "Thu", hours: 2.1 },
    { day: "Fri", hours: 2.8 },
    { day: "Sat", hours: 4.1 },
    { day: "Sun", hours: 1.9 }
  ];

  const courseProgress = [
    { course: "HTML Basics", progress: 85, color: "bg-blue-500" },
    { course: "CSS Styling", progress: 70, color: "bg-purple-500" },
    { course: "JavaScript", progress: 45, color: "bg-yellow-500" },
    { course: "React Basics", progress: 25, color: "bg-green-500" }
  ];

  const goals = [
    { title: "Complete HTML Course", progress: 85, target: 100, icon: Target },
    { title: "Study 5 Hours/Week", progress: 23, target: 25, icon: Calendar },
    { title: "Earn 3 Certificates", progress: 2, target: 3, icon: Award }
  ];

  const maxHours = Math.max(...weeklyProgress.map(d => d.hours));

  return (
    <div className="space-y-6">
      {/* Weekly Activity Chart */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm shadow-card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-primary" />
            Weekly Learning Activity
          </h3>
          <span className="text-sm text-muted-foreground">Last 7 days</span>
        </div>
        
        <div className="space-y-4">
          {weeklyProgress.map((day, index) => (
            <div key={day.day} className="flex items-center space-x-4">
              <span className="text-sm font-medium w-8">{day.day}</span>
              <div className="flex-1 bg-muted/50 rounded-full h-6 relative overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                  style={{ width: `${(day.hours / maxHours) * 100}%` }}
                >
                  {day.hours > 0 && (
                    <span className="text-xs text-white font-medium">
                      {day.hours}h
                    </span>
                  )}
                </div>
              </div>
              <span className="text-sm text-muted-foreground w-12">
                {day.hours}h
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Course Progress Overview */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm shadow-card">
        <h3 className="text-lg font-semibold mb-6">Course Progress Overview</h3>
        <div className="space-y-4">
          {courseProgress.map((course, index) => (
            <div key={course.course}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{course.course}</span>
                <span className="text-sm text-muted-foreground">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-3" />
            </div>
          ))}
        </div>
      </Card>

      {/* Learning Goals */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm shadow-card">
        <h3 className="text-lg font-semibold mb-6">Learning Goals</h3>
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <goal.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{goal.title}</h4>
                  <span className="text-sm text-muted-foreground">
                    {goal.progress}/{goal.target}
                  </span>
                </div>
                <Progress 
                  value={(goal.progress / goal.target) * 100} 
                  className="h-2" 
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Placeholder for Advanced Charts */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-dashed border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Advanced Analytics</h3>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="text-muted-foreground mb-2">Coming Soon</p>
          <p className="text-sm text-muted-foreground">
            Advanced charts with Recharts integration
            <br />
            (Learning patterns, skill radar, performance trends)
          </p>
        </div>
      </Card>
    </div>
  );
};