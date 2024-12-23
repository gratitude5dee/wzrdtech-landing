import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { ethers } from "npm:ethers@^6.7.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const MODE_RPC_URL = Deno.env.get('MODE_RPC_URL') || 'https://mainnet.mode.network/'
const PRIVATE_KEY = Deno.env.get('MODE_PRIVATE_KEY')

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { to, data, value, gasLimit } = await req.json()

    // Initialize provider and wallet
    const provider = new ethers.JsonRpcProvider(MODE_RPC_URL)
    const wallet = new ethers.Wallet(PRIVATE_KEY!, provider)

    // Estimate gas if not provided
    const estimatedGas = gasLimit || await provider.estimateGas({
      to,
      data,
      value: value || '0',
    })

    // Get current gas price with 10% buffer
    const gasPrice = (await provider.getFeeData()).gasPrice
    const adjustedGasPrice = gasPrice * BigInt(110) / BigInt(100)

    // Send transaction
    const tx = await wallet.sendTransaction({
      to,
      data,
      value: value || '0',
      gasLimit: estimatedGas,
      gasPrice: adjustedGasPrice,
    })

    // Wait for confirmation
    const receipt = await tx.wait()

    console.log('Transaction successful:', {
      hash: receipt.hash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString(),
    })

    return new Response(
      JSON.stringify({
        success: true,
        hash: receipt.hash,
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed.toString(),
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error processing transaction:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})