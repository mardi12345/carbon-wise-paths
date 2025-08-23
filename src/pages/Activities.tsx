import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Car, 
  Zap, 
  Utensils, 
  Trash2,
  Calendar,
  TrendingDown,
  TrendingUp
} from "lucide-react";

const Activities = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "transport",
      description: "Drive to work",
      amount: 5.2,
      unit: "kg CO2",
      date: "2024-08-23",
      category: "Car - Gasoline"
    },
    {
      id: 2,
      type: "energy",
      description: "Home electricity",
      amount: 3.8,
      unit: "kg CO2",
      date: "2024-08-23",
      category: "Electricity"
    },
    {
      id: 3,
      type: "food",
      description: "Lunch - beef burger",
      amount: 2.1,
      unit: "kg CO2",
      date: "2024-08-22",
      category: "Meat"
    },
  ]);

  const [newActivity, setNewActivity] = useState({
    type: "",
    description: "",
    category: "",
    amount: ""
  });

  const activityTypes = [
    { 
      value: "transport", 
      label: "Transport", 
      icon: Car, 
      color: "bg-blue-500",
      categories: ["Car - Gasoline", "Car - Electric", "Bus", "Train", "Bicycle", "Walking"]
    },
    { 
      value: "energy", 
      label: "Energy", 
      icon: Zap, 
      color: "bg-yellow-500",
      categories: ["Electricity", "Natural Gas", "Solar Power", "Wind Power"]
    },
    { 
      value: "food", 
      label: "Food", 
      icon: Utensils, 
      color: "bg-green-500",
      categories: ["Meat", "Dairy", "Vegetables", "Grains", "Processed Food"]
    },
  ];

  const getActivityIcon = (type: string) => {
    const activityType = activityTypes.find(t => t.value === type);
    return activityType ? activityType.icon : Car;
  };

  const getActivityColor = (type: string) => {
    const activityType = activityTypes.find(t => t.value === type);
    return activityType ? activityType.color : "bg-gray-500";
  };

  const handleAddActivity = () => {
    if (newActivity.type && newActivity.description && newActivity.amount) {
      const activity = {
        id: activities.length + 1,
        type: newActivity.type,
        description: newActivity.description,
        amount: parseFloat(newActivity.amount),
        unit: "kg CO2",
        date: new Date().toISOString().split('T')[0],
        category: newActivity.category
      };
      setActivities([activity, ...activities]);
      setNewActivity({ type: "", description: "", category: "", amount: "" });
    }
  };

  const handleDeleteActivity = (id: number) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  const totalEmissions = activities.reduce((sum, activity) => sum + activity.amount, 0);
  const todayEmissions = activities
    .filter(activity => activity.date === new Date().toISOString().split('T')[0])
    .reduce((sum, activity) => sum + activity.amount, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Activity Logging
          </h1>
          <p className="text-muted-foreground">
            Track your daily activities and their environmental impact
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Emissions</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {todayEmissions.toFixed(1)} kg
              </div>
              <p className="text-xs text-muted-foreground">
                CO2 equivalent
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {activities.length}
              </div>
              <p className="text-xs text-muted-foreground">
                Logged this week
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Total</CardTitle>
              <TrendingDown className="h-4 w-4 text-eco-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {totalEmissions.toFixed(1)} kg
              </div>
              <p className="text-xs text-eco-success">
                -12% vs last week
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add New Activity */}
          <Card className="hover-lift shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5 text-primary" />
                <span>Log New Activity</span>
              </CardTitle>
              <CardDescription>
                Record your daily activities to track their carbon impact
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="activity-type">Activity Type</Label>
                <Select value={newActivity.type} onValueChange={(value) => setNewActivity({...newActivity, type: value, category: ""})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select activity type" />
                  </SelectTrigger>
                  <SelectContent>
                    {activityTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center space-x-2">
                            <Icon className="h-4 w-4" />
                            <span>{type.label}</span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {newActivity.type && (
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={newActivity.category} onValueChange={(value) => setNewActivity({...newActivity, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {activityTypes
                        .find(t => t.value === newActivity.type)
                        ?.categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="e.g., Drive to work, Lunch meal..."
                  value={newActivity.description}
                  onChange={(e) => setNewActivity({...newActivity, description: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">CO2 Amount (kg)</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.1"
                  placeholder="0.0"
                  value={newActivity.amount}
                  onChange={(e) => setNewActivity({...newActivity, amount: e.target.value})}
                />
              </div>

              <Button 
                onClick={handleAddActivity} 
                className="w-full hover-lift shadow-eco"
                disabled={!newActivity.type || !newActivity.description || !newActivity.amount}
              >
                <Plus className="h-4 w-4 mr-2" />
                Log Activity
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="hover-lift shadow-soft">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                Your latest logged environmental activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {activities.map((activity) => {
                  const Icon = getActivityIcon(activity.type);
                  const colorClass = getActivityColor(activity.type);
                  
                  return (
                    <div key={activity.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover-lift">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 ${colorClass} rounded-lg shadow-soft`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">{activity.description}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {activity.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {activity.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-right">
                          <div className="font-bold text-foreground">
                            {activity.amount} kg
                          </div>
                          <div className="text-xs text-muted-foreground">CO2</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteActivity(activity.id)}
                          className="hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activities;