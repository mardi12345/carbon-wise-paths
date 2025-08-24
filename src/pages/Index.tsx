import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  BarChart3, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  TrendingDown,
  Zap,
  Globe
} from "lucide-react";
import ecoHeroImage from "@/assets/eco-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Smart Tracking",
      description: "Monitor your daily carbon footprint with intelligent activity logging and real-time calculations."
    },
    {
      icon: Target,
      title: "Personal Goals",
      description: "Set and achieve emission reduction targets with personalized recommendations and insights."
    },
    {
      icon: Users,
      title: "Community Challenges",
      description: "Join eco-warriors worldwide in challenges that make a real environmental impact."
    },
    {
      icon: TrendingDown,
      title: "Impact Visualization",
      description: "See your progress with beautiful charts and statistics that motivate continuous improvement."
    }
  ];

  const benefits = [
    "Track transport, energy, and food emissions",
    "Get personalized reduction recommendations",
    "Compete in community challenges",
    "Earn points and unlock achievements",
    "Share progress on social media",
    "Join a global eco-movement"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ecoHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Leaf className="h-3 w-3 mr-1 animate-leaf-fall" />
              Track • Reduce • Impact
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Your Personal
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Carbon Footprint
              </span>
              Tracker
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of eco-warriors tracking, reducing, and offsetting their environmental impact. 
              Make every action count towards a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/community">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow hover-lift group"
                onClick={() => window.location.href = '/community'}
              >
                Start Tracking Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/community">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm hover-lift"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <Leaf className="h-6 w-6 text-green-400" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <Globe className="h-6 w-6 text-blue-400" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <Zap className="h-6 w-6 text-yellow-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Go Green
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools and insights to help you understand, track, and reduce your environmental impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="hover-lift shadow-soft border-0" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center">
                    <div className="mx-auto p-3 bg-gradient-eco rounded-lg shadow-eco mb-4 w-fit">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose EcoTrack?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join a growing community of environmentally conscious individuals making a real difference. 
                Our comprehensive platform helps you track, understand, and reduce your carbon footprint.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center space-x-3" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="p-1 bg-eco-success rounded-full">
                      <CheckCircle className="h-4 w-4 text-eco-success-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  className="hover-lift shadow-eco group"
                  onClick={() => window.location.href = '/community'}
                >
                  Start Logging Activities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up">
              <Card className="hover-lift shadow-soft">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto p-3 bg-gradient-sky rounded-lg shadow-eco mb-2 w-fit">
                    <TrendingDown className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-eco-success">-45%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">Average CO2 reduction</p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift shadow-soft">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto p-3 bg-gradient-eco rounded-lg shadow-eco mb-2 w-fit">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-accent">15K+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">Active eco-warriors</p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift shadow-soft">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto p-3 bg-gradient-earth rounded-lg shadow-eco mb-2 w-fit">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">342T</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">CO2 saved together</p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift shadow-soft">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto p-3 bg-primary rounded-lg shadow-eco mb-2 w-fit">
                    <BarChart3 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-primary">98%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">User satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start your eco-journey today. Track your impact, join challenges, and become part of the solution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow hover-lift group"
                onClick={() => window.location.href = '/community'}
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashbor
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/community">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm hover-lift"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Explore Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;