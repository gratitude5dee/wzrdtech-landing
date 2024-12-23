import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const CROSSMINT_API_KEY = Deno.env.get('CROSSMINT_API_KEY')
const CROSSMINT_API_URL = 'https://api.crossmint.com/api/v1'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { collectionId, recipientAddress, metadata } = await req.json()

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Create mint request
    const mintResponse = await fetch(`${CROSSMINT_API_URL}/nfts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CROSSMINT_API_KEY!,
      },
      body: JSON.stringify({
        collection: collectionId,
        recipient: recipientAddress,
        metadata,
      }),
    })

    const mintData = await mintResponse.json()

    if (!mintResponse.ok) {
      throw new Error(`Mint failed: ${mintData.message}`)
    }

    // Store mint data in Supabase
    const { error: dbError } = await supabase
      .from('token_operations')
      .insert({
        operation_type: 'MINT',
        tx_hash: mintData.transactionHash,
        status: 'PENDING',
      })

    if (dbError) {
      console.error('Database error:', dbError)
    }

    console.log('Mint successful:', {
      transactionHash: mintData.transactionHash,
      tokenId: mintData.tokenId,
    })

    return new Response(
      JSON.stringify({
        success: true,
        transactionHash: mintData.transactionHash,
        tokenId: mintData.tokenId,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error handling mint:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})