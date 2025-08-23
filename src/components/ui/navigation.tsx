import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Leaf, 
  BarChart3, 
  Activity, 
  Users, 
  Menu,
  Home,
  LogOut
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    ...(user ? [
      { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
      { name: "Activities", href: "/activities", icon: Activity },
      { name: "Community", href: "/community", icon: Users },
    ] : [])
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <div className="p-2 bg-gradient-hero rounded-lg shadow-eco">
              <Leaf className="h-6 w-6 text-primary-foreground animate-leaf-fall" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              EcoTrack
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className={`flex items-center space-x-2 hover-lift ${
                      isActive(item.href) 
                        ? "bg-primary text-primary-foreground shadow-eco animate-eco-glow" 
                        : "hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              );
            })}
            
            {user ? (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleSignOut}
                title="Sign Out"
                className="hover-lift"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            ) : (
              <Button 
                variant="default" 
                className="shadow-eco hover-lift"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover-lift">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 mb-8">
                  <div className="p-2 bg-gradient-hero rounded-lg shadow-eco">
                    <Leaf className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    EcoTrack
                  </span>
                </div>
                
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant={isActive(item.href) ? "default" : "ghost"}
                        className={`w-full justify-start space-x-2 hover-lift ${
                          isActive(item.href) 
                            ? "bg-primary text-primary-foreground shadow-eco" 
                            : "hover:bg-muted"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Button>
                    </Link>
                  );
                })}

                {user ? (
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start space-x-2 hover-lift"
                    onClick={() => {
                      handleSignOut();
                      setIsOpen(false);
                    }}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Button>
                ) : (
                  <Button 
                    variant="default" 
                    className="w-full shadow-eco hover-lift"
                    onClick={() => {
                      handleGetStarted();
                      setIsOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;