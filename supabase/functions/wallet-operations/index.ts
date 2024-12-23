import { serve } from 'https://deno.fresh.run/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface WalletOperation {
  operation: 'CONNECT' | 'CREATE' | 'TRANSFER'
  userId: string
  params: {
    chain?: 'SOLANA' | 'EVM'
    to?: string
    amount?: number
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

    const { operation, userId, params }: WalletOperation = await req.json()

    switch (operation) {
      case 'CONNECT':
        // Store wallet connection in database
        const { error: connectError } = await supabase
          .from('user_wallets')
          .insert({
            profile_id: userId,
            wallet_type: params.chain,
            wallet_address: params.to,
          })

        if (connectError) throw connectError

        return new Response(
          JSON.stringify({ success: true }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )

      case 'TRANSFER':
        // Record transfer operation
        const { error: transferError } = await supabase
          .from('token_operations')
          .insert({
            profile_id: userId,
            operation_type: 'TRANSFER',
            amount: params.amount,
            status: 'PENDING',
          })

        if (transferError) throw transferError

        return new Response(
          JSON.stringify({ success: true }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )

      default:
        throw new Error('Invalid operation')
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})