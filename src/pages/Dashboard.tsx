import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingDown, 
  TrendingUp, 
  Leaf, 
  Zap, 
  Car,
  Utensils,
  Award,
  Target,
  BarChart3
} from "lucide-react";

const Dashboard = () => {
  // Mock data for demonstration
  const weeklyData = {
    currentWeek: 28.5,
    lastWeek: 32.1,
    target: 25.0,
    reduction: 11.2
  };

  const activitiesData = [
    { category: "Transport", amount: 12.3, icon: Car, color: "text-blue-600" },
    { category: "Energy", amount: 8.7, icon: Zap, color: "text-yellow-600" },
    { category: "Food", amount: 7.5, icon: Utensils, color: "text-green-600" },
  ];

  const achievements = [
    { name: "Eco Warrior", description: "7 days CO2 reduction", icon: Award },
    { name: "Green Commuter", description: "Used bike 5 times", icon: Leaf },
    { name: "Energy Saver", description: "10% energy reduction", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Track your carbon footprint and environmental impact
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <TrendingDown className="h-4 w-4 text-eco-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {weeklyData.currentWeek} kg
              </div>
              <p className="text-xs text-eco-success">
                -{weeklyData.reduction}% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Target</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {weeklyData.target} kg
              </div>
              <Progress 
                value={(weeklyData.target / weeklyData.currentWeek) * 100} 
                className="mt-2" 
              />
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
              <Leaf className="h-4 w-4 text-eco-success animate-leaf-fall" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-eco-success">
                245 kg
              </div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Eco Points</CardTitle>
              <Award className="h-4 w-4 text-accent animate-eco-glow" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                1,247
              </div>
              <p className="text-xs text-muted-foreground">
                +89 this week
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekly Breakdown */}
          <Card className="hover-lift shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Weekly Breakdown</span>
              </CardTitle>
              <CardDescription>
                Your carbon footprint by category
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activitiesData.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.category} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover-lift">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-card rounded-lg shadow-soft">
                        <Icon className={`h-4 w-4 ${activity.color}`} />
                      </div>
                      <span className="font-medium">{activity.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{activity.amount} kg</div>
                      <Progress 
                        value={(activity.amount / 15) * 100} 
                        className="w-20 mt-1" 
                      />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="hover-lift shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-accent" />
                <span>Recent Achievements</span>
              </CardTitle>
              <CardDescription>
                Your environmental milestones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={achievement.name} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg hover-lift">
                    <div className="p-2 bg-gradient-eco rounded-lg shadow-eco">
                      <Icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">{achievement.name}</div>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      New
                    </Badge>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 hover-lift shadow-soft">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Log your activities or view recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Log Transport", icon: Car, color: "bg-blue-500" },
                { name: "Record Energy", icon: Zap, color: "bg-yellow-500" },
                { name: "Add Meal", icon: Utensils, color: "bg-green-500" },
                { name: "View Tips", icon: Leaf, color: "bg-eco-success" },
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.name}
                    className="flex flex-col items-center justify-center p-6 bg-muted/50 rounded-lg hover-lift transition-all duration-200 hover:bg-muted group"
                  >
                    <div className={`p-3 ${action.color} rounded-lg mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium">{action.name}</span>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;