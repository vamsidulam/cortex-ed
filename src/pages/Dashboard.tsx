import { Sidebar } from "@/components/Sidebar";
import { CourseCard } from "@/components/CourseCard";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const courses = [
    {
      id: "html-basics",
      title: "HTML Basics",
      description: "Learn the fundamentals of HTML structure and semantics",
      progress: 75,
      modules: 8,
      completedModules: 6,
      difficulty: "Beginner",
      duration: "4 hours",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "css-styling", 
      title: "CSS Styling",
      description: "Master modern CSS techniques and responsive design",
      progress: 40,
      modules: 12,
      completedModules: 5,
      difficulty: "Intermediate",
      duration: "6 hours",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "javascript-fundamentals",
      title: "JavaScript Fundamentals",
      description: "Build interactive web applications with JavaScript",
      progress: 20,
      modules: 15,
      completedModules: 3,
      difficulty: "Beginner",
      duration: "8 hours",
      color: "from-green-500 to-green-600"
    },
    {
      id: "react-basics",
      title: "React Basics",
      description: "Create dynamic UIs with React components and hooks",
      progress: 0,
      modules: 10,
      completedModules: 0,
      difficulty: "Intermediate",
      duration: "7 hours",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const stats = [
    { icon: BookOpen, label: "Courses", value: "4", color: "text-primary" },
    { icon: Clock, label: "Hours Learned", value: "23", color: "text-secondary" },
    { icon: Award, label: "Certificates", value: "2", color: "text-accent" },
    { icon: TrendingUp, label: "Streak", value: "7 days", color: "text-warning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-sm p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Course Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Recommended Next */}
        <div className="bg-gradient-hero p-8 rounded-2xl text-white animate-slide-up">
          <h3 className="text-xl font-semibold mb-2">Ready for the next challenge?</h3>
          <p className="mb-4 opacity-90">Based on your progress, we recommend Node.js Fundamentals</p>
          <button className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg backdrop-blur-sm transition-all duration-300">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;