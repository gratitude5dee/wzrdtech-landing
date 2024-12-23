import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface TokenLaunchRequest {
  name: string
  symbol: string
  initialSupply: number
  initialPrice: number
  vestingSchedule?: {
    cliff: number
    duration: number
    intervals: number
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: { user } } = await supabase.auth.getUser(
      req.headers.get('Authorization')?.split(' ')[1] ?? ''
    )

    if (!user) throw new Error('Not authenticated')

    const { name, symbol, initialSupply, initialPrice, vestingSchedule }: TokenLaunchRequest = await req.json()

    // Record the token launch in the database
    const { data: launch, error } = await supabase
      .from('token_launches')
      .insert({
        profile_id: user.id,
        token_address: 'PENDING', // Will be updated after on-chain deployment
        initial_supply: initialSupply,
        initial_price: initialPrice,
        vesting_schedule: vestingSchedule,
        launch_status: 'PENDING'
      })
      .select()
      .single()

    if (error) throw error

    return new Response(
      JSON.stringify({ success: true, data: launch }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})