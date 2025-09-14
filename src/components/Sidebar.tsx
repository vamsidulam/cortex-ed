import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  BookOpen, 
  TrendingUp, 
  User, 
  Settings,
  Zap,
  LogOut
} from "lucide-react";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: BookOpen, label: "My Courses", path: "/dashboard" },
    { icon: TrendingUp, label: "Progress", path: "/progress" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-card/80 backdrop-blur-sm border-r border-border z-50">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text">EduAI</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={isActive(item.path) ? "default" : "ghost"}
            className={`w-full justify-start ${
              isActive(item.path)
                ? "bg-gradient-primary text-primary-foreground shadow-none"
                : "hover:bg-muted/80"
            }`}
            onClick={() => navigate(item.path)}
          >
            <item.icon className="w-4 h-4 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <p className="text-sm font-medium mb-1">AI Professor</p>
          <p className="text-xs text-muted-foreground mb-2">Ready to help you learn!</p>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
        
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="w-4 h-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};