import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface LiquidityRequest {
  tokenA: string
  tokenB: string
  poolType: 'CONSTANT_PRODUCT' | 'CONCENTRATED' | 'STABLE'
  amount: number
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

    const { tokenA, tokenB, poolType, amount }: LiquidityRequest = await req.json()

    // Record the liquidity pool in the database
    const { data: pool, error } = await supabase
      .from('liquidity_pools')
      .insert({
        profile_id: user.id,
        token_a: tokenA,
        token_b: tokenB,
        pool_type: poolType,
        pool_address: 'PENDING', // Will be updated after on-chain deployment
        total_value_locked: amount
      })
      .select()
      .single()

    if (error) throw error

    return new Response(
      JSON.stringify({ success: true, data: pool }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})