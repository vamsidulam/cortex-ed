import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, BookOpen, Users, Trophy, Zap } from "lucide-react";

const Landing = () => {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const handleGenerateCourse = () => {
    if (topic.trim()) {
      // Navigate to dashboard (simulating course generation)
      navigate("/dashboard");
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Learning",
      description: "Get personalized lessons from our 3D AI Professor"
    },
    {
      icon: BookOpen,
      title: "Interactive Courses",
      description: "Hands-on coding with real-time feedback"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Learn from industry professionals and experts"
    },
    {
      icon: Trophy,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/20 to-secondary-light/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">EduAI</span>
          </div>
          <Button variant="outline" size="sm">
            Login / Signup
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <section className="py-20 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Learn with Your
            <br />
            AI Professor
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the future of education with personalized AI-powered courses,
            interactive lessons, and a 3D AI professor guiding your learning journey.
          </p>

          {/* Course Generator */}
          <div className="max-w-md mx-auto mb-16 animate-slide-up">
            <div className="flex gap-2">
              <Input
                placeholder="Enter a topic (e.g., React, Python, CSS)..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="text-lg h-14"
              />
              <Button 
                onClick={handleGenerateCourse}
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-secondary transition-all duration-300 px-8"
              >
                Generate Course
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/60 backdrop-blur-sm p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 EduAI. Powered by artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;