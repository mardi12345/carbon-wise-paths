import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Carbon emission factors (kg CO2 per unit)
const emissionFactors = {
  transport: {
    "Car - Gasoline": 0.21, // per km
    "Car - Electric": 0.05, // per km
    "Bus": 0.09, // per km
    "Train": 0.04, // per km
    "Bicycle": 0, // per km
    "Walking": 0, // per km
  },
  energy: {
    "Electricity": 0.5, // per kWh
    "Natural Gas": 0.2, // per kWh
    "Solar Power": 0.02, // per kWh
    "Wind Power": 0.01, // per kWh
  },
  food: {
    "Meat": 27, // per meal
    "Dairy": 3.2, // per meal
    "Vegetables": 0.5, // per meal
    "Grains": 1.1, // per meal
    "Processed Food": 2.5, // per meal
  }
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, category, amount } = await req.json();

    console.log(`Calculating carbon for: ${type} - ${category} - ${amount}`);

    // Get the emission factor
    const factor = emissionFactors[type as keyof typeof emissionFactors]?.[category as string];
    
    if (!factor && factor !== 0) {
      throw new Error(`Unknown category: ${category} for type: ${type}`);
    }

    const co2Amount = amount * factor;

    console.log(`Carbon calculation result: ${co2Amount} kg CO2`);

    return new Response(JSON.stringify({ 
      co2_amount: parseFloat(co2Amount.toFixed(2)),
      factor,
      calculation: `${amount} × ${factor} = ${co2Amount.toFixed(2)} kg CO2`
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in calculate-carbon function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      co2_amount: 0 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});