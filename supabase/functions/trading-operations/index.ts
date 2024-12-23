import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface TradeRequest {
  marketAddress: string
  positionSize: number
  entryPrice: number
  leverage?: number
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

    const { marketAddress, positionSize, entryPrice, leverage = 1 }: TradeRequest = await req.json()

    // Record the trading position in the database
    const { data: position, error } = await supabase
      .from('trading_positions')
      .insert({
        profile_id: user.id,
        market_address: marketAddress,
        position_size: positionSize,
        entry_price: entryPrice,
        leverage,
        position_status: 'OPEN'
      })
      .select()
      .single()

    if (error) throw error

    // Update agent performance metrics
    await supabase.rpc('update_agent_performance', {
      p_profile_id: user.id,
      p_position_size: positionSize
    })

    return new Response(
      JSON.stringify({ success: true, data: position }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})