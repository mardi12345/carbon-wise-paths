import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Trophy, 
  Users, 
  Target, 
  Leaf, 
  Medal,
  Crown,
  TrendingUp,
  Calendar,
  Share2,
  CheckCircle
} from "lucide-react";

const Community = () => {
  // Mock data for leaderboard
  const leaderboard = [
    { id: 1, name: "Sarah Green", points: 2847, reduction: 89.2, rank: 1, avatar: "SG" },
    { id: 2, name: "Mike Forest", points: 2634, reduction: 76.8, rank: 2, avatar: "MF" },
    { id: 3, name: "Emma Earth", points: 2521, reduction: 82.1, rank: 3, avatar: "EE" },
    { id: 4, name: "John Eco", points: 2398, reduction: 71.5, rank: 4, avatar: "JE" },
    { id: 5, name: "You", points: 1247, reduction: 45.3, rank: 12, avatar: "YU" },
  ];

  // Mock challenges
  const challenges = [
    {
      id: 1,
      title: "Green Commute Week",
      description: "Use sustainable transport for 5 days",
      participants: 1247,
      progress: 60,
      reward: 500,
      timeLeft: "3 days",
      status: "active"
    },
    {
      id: 2,
      title: "Zero Waste Weekend",
      description: "Minimize waste production this weekend",
      participants: 892,
      progress: 0,
      reward: 300,
      timeLeft: "5 days",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Energy Saver Month",
      description: "Reduce home energy consumption by 20%",
      participants: 2341,
      progress: 85,
      reward: 1000,
      timeLeft: "12 days",
      status: "active"
    },
  ];

  const getChallengeIcon = (status: string) => {
    switch (status) {
      case "active": return <Target className="h-4 w-4 text-primary" />;
      case "completed": return <CheckCircle className="h-4 w-4 text-eco-success" />;
      default: return <Calendar className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Medal className="h-5 w-5 text-amber-600" />;
      default: return <Trophy className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Community
          </h1>
          <p className="text-muted-foreground">
            Join challenges, compete with others, and make a difference together
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Members</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                15,247
              </div>
              <p className="text-xs text-eco-success">
                +234 this week
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Rank</CardTitle>
              <Trophy className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                #12
              </div>
              <p className="text-xs text-muted-foreground">
                Top 8% globally
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO2 Saved</CardTitle>
              <Leaf className="h-4 w-4 text-eco-success animate-leaf-fall" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-eco-success">
                342T
              </div>
              <p className="text-xs text-muted-foreground">
                Community total
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Challenges</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                12
              </div>
              <p className="text-xs text-muted-foreground">
                2 joined by you
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leaderboard */}
          <Card className="hover-lift shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-accent" />
                <span>Weekly Leaderboard</span>
              </CardTitle>
              <CardDescription>
                Top eco-warriors making the biggest impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div 
                    key={user.id} 
                    className={`flex items-center justify-between p-4 rounded-lg hover-lift ${
                      user.name === "You" ? "bg-primary/10 border border-primary/20" : "bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        {getRankIcon(user.rank)}
                        <span className="font-medium text-sm">#{user.rank}</span>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-gradient-eco text-primary-foreground">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className={`font-medium ${user.name === "You" ? "text-primary" : ""}`}>
                          {user.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {user.reduction}% reduction
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-accent">{user.points}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Challenges */}
          <Card className="hover-lift shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Active Challenges</span>
              </CardTitle>
              <CardDescription>
                Join community challenges to earn points and make impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="p-4 bg-muted/50 rounded-lg hover-lift">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {getChallengeIcon(challenge.status)}
                        <h3 className="font-medium">{challenge.title}</h3>
                      </div>
                      <Badge 
                        variant={challenge.status === "active" ? "default" : "secondary"}
                        className={challenge.status === "active" ? "animate-eco-glow" : ""}
                      >
                        {challenge.status}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {challenge.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{challenge.participants.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{challenge.timeLeft}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-accent">
                          +{challenge.reward} pts
                        </span>
                        <Button size="sm" variant="outline" className="hover-lift">
                          {challenge.status === "active" ? "View" : "Join"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Sharing */}
        <Card className="mt-8 hover-lift shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Share2 className="h-5 w-5 text-secondary" />
              <span>Share Your Progress</span>
            </CardTitle>
            <CardDescription>
              Inspire others by sharing your environmental achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-gradient-hero rounded-lg text-primary-foreground">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <h3 className="text-xl font-bold mb-2">Amazing Progress!</h3>
                <p className="opacity-90">
                  You've reduced your carbon footprint by 45.3% this month
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="secondary" size="sm" className="hover-lift">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share on Twitter
                </Button>
                <Button variant="outline" size="sm" className="hover-lift bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Stats
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;