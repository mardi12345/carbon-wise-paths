import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const recommendations = [
  {
    category: "transport",
    suggestion: "Try cycling or walking for trips under 5km",
    potential_saving: 2.1,
    difficulty: "easy",
    icon: "Bicycle"
  },
  {
    category: "transport", 
    suggestion: "Use public transport instead of driving",
    potential_saving: 1.8,
    difficulty: "easy",
    icon: "Bus"
  },
  {
    category: "energy",
    suggestion: "Switch to LED bulbs throughout your home",
    potential_saving: 0.8,
    difficulty: "easy", 
    icon: "Lightbulb"
  },
  {
    category: "energy",
    suggestion: "Unplug devices when not in use",
    potential_saving: 0.5,
    difficulty: "easy",
    icon: "Zap"
  },
  {
    category: "food",
    suggestion: "Try 2 plant-based meals per week",
    potential_saving: 3.2,
    difficulty: "medium",
    icon: "Utensils"
  },
  {
    category: "food",
    suggestion: "Reduce food waste by meal planning",
    potential_saving: 1.5,
    difficulty: "medium", 
    icon: "ChefHat"
  },
  {
    category: "energy",
    suggestion: "Set thermostat 2°C lower in winter",
    potential_saving: 2.8,
    difficulty: "easy",
    icon: "Thermometer"
  },
  {
    category: "transport",
    suggestion: "Combine errands into one trip",
    potential_saving: 1.2,
    difficulty: "easy",
    icon: "MapPin"
  }
];

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { user_id } = await req.json();

    console.log(`Getting recommendations for user: ${user_id}`);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get user's recent activities to personalize recommendations
    const { data: activities, error } = await supabase
      .from('activities')
      .select('type, category, co2_amount')
      .eq('user_id', user_id)
      .gte('date', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      console.error('Error fetching activities:', error);
    }

    // Analyze user's highest impact categories
    const categoryTotals = activities?.reduce((acc, activity) => {
      acc[activity.type] = (acc[activity.type] || 0) + activity.co2_amount;
      return acc;
    }, {} as Record<string, number>) || {};

    // Sort categories by impact
    const sortedCategories = Object.entries(categoryTotals)
      .sort(([,a], [,b]) => b - a)
      .map(([category]) => category);

    // Prioritize recommendations based on user's high-impact categories
    const prioritizedRecommendations = recommendations
      .sort((a, b) => {
        const aIndex = sortedCategories.indexOf(a.category);
        const bIndex = sortedCategories.indexOf(b.category); 
        
        // If category not found, put at end
        const aPriority = aIndex === -1 ? 999 : aIndex;
        const bPriority = bIndex === -1 ? 999 : bIndex;
        
        if (aPriority !== bPriority) {
          return aPriority - bPriority;
        }
        
        // Secondary sort by potential saving
        return b.potential_saving - a.potential_saving;
      })
      .slice(0, 5); // Return top 5 recommendations

    console.log(`Generated ${prioritizedRecommendations.length} personalized recommendations`);

    return new Response(JSON.stringify({ 
      recommendations: prioritizedRecommendations,
      user_impact_categories: sortedCategories
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in get-recommendations function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      recommendations: recommendations.slice(0, 3) // Fallback to generic recommendations
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});