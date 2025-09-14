import { Sidebar } from "@/components/Sidebar";
import { ProgressCharts } from "@/components/ProgressCharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Award, BookOpen, Clock, TrendingUp, Target, Star } from "lucide-react";

const Progress = () => {
  const userStats = {
    name: "Alex Johnson",
    email: "alex@example.com",
    joinDate: "March 2024",
    totalHours: 47,
    coursesCompleted: 3,
    certificatesEarned: 2,
    currentStreak: 12
  };

  const skills = [
    { name: "HTML", level: 85, color: "bg-orange-500" },
    { name: "CSS", level: 70, color: "bg-blue-500" },
    { name: "JavaScript", level: 45, color: "bg-yellow-500" },
    { name: "React", level: 25, color: "bg-cyan-500" },
    { name: "Node.js", level: 10, color: "bg-green-500" }
  ];

  const achievements = [
    { icon: Award, title: "First Steps", description: "Completed your first lesson", earned: true },
    { icon: BookOpen, title: "Course Crusher", description: "Completed 3 courses", earned: true },
    { icon: Target, title: "Perfect Score", description: "Got 100% on an assessment", earned: true },
    { icon: TrendingUp, title: "Streak Master", description: "7-day learning streak", earned: true },
    { icon: Star, title: "Rising Star", description: "Top 10% of learners", earned: false },
    { icon: Clock, title: "Dedicated Learner", description: "50+ hours of learning", earned: false }
  ];

  const suggestedTopics = [
    "Advanced JavaScript Concepts",
    "React Hooks Deep Dive", 
    "CSS Grid and Flexbox",
    "Node.js Backend Development",
    "Database Fundamentals"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Your Learning Progress</h1>
          <p className="text-muted-foreground">Track your journey and celebrate achievements</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Profile & Skills */}
          <div className="space-y-6">
            {/* User Profile */}
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-card animate-slide-up">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="bg-gradient-primary text-white text-lg">
                    {userStats.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{userStats.name}</h3>
                  <p className="text-muted-foreground">{userStats.email}</p>
                  <p className="text-sm text-muted-foreground">Member since {userStats.joinDate}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">{userStats.totalHours}</p>
                  <p className="text-sm text-muted-foreground">Hours Learned</p>
                </div>
                <div className="text-center p-3 bg-accent/5 rounded-lg">
                  <p className="text-2xl font-bold text-accent">{userStats.currentStreak}</p>
                  <p className="text-sm text-muted-foreground">Day Streak</p>
                </div>
              </div>
            </div>

            {/* Skills Mastery */}
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-card animate-slide-up">
              <h3 className="text-lg font-semibold mb-6">Skill Mastery</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Topics */}
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-card animate-slide-up">
              <h3 className="text-lg font-semibold mb-4">Recommended Next</h3>
              <div className="space-y-2">
                {suggestedTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg hover:from-primary/10 hover:to-secondary/10 transition-all duration-200 cursor-pointer"
                  >
                    <p className="text-sm font-medium">{topic}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-gradient-primary hover:bg-gradient-secondary">
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Right Column - Charts & Achievements */}
          <div className="xl:col-span-2 space-y-6">
            {/* Progress Charts */}
            <ProgressCharts />

            {/* Achievements */}
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-card animate-slide-up">
              <h3 className="text-lg font-semibold mb-6">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      achievement.earned
                        ? "bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20"
                        : "bg-muted/30 border-muted-foreground/20"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          achievement.earned
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted-foreground/20 text-muted-foreground"
                        }`}
                      >
                        <achievement.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium">{achievement.title}</h4>
                          {achievement.earned && (
                            <Badge variant="secondary" className="bg-accent text-accent-foreground">
                              Earned
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;