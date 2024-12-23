import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js'
import { ethers } from 'ethers'
import { supabase } from '@/lib/supabase'

// Solana Integration
export const solanaService = {
  connection: new Connection(process.env.RPC_URL || 'https://api.devnet.solana.com'),
  
  async transfer(fromPubkey: PublicKey, toPubkey: PublicKey, amount: number) {
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey,
          toPubkey,
          lamports: amount,
        })
      )
      
      // Record transaction in database
      const { data, error } = await supabase
        .from('transactions')
        .insert({
          type: 'transfer',
          amount,
          chain: 'solana',
          status: 'pending',
          token_address: toPubkey.toString(),
        })
      
      if (error) throw error
      return transaction
    } catch (error) {
      console.error('Error in Solana transfer:', error)
      throw error
    }
  },

  async stake(amount: number, stakingProgramId: string) {
    // Implement staking logic
    // This is a placeholder - actual implementation would depend on your staking program
    console.log('Staking on Solana:', amount, stakingProgramId)
  }
}

// EVM Integration
export const evmService = {
  provider: new ethers.JsonRpcProvider(process.env.EVM_PROVIDER_URL),
  
  async transfer(to: string, amount: string) {
    try {
      const wallet = new ethers.Wallet(process.env.EVM_PRIVATE_KEY!, this.provider)
      const tx = await wallet.sendTransaction({
        to,
        value: ethers.parseEther(amount)
      })
      
      // Record transaction in database
      const { data, error } = await supabase
        .from('transactions')
        .insert({
          type: 'transfer',
          amount: parseFloat(amount),
          chain: 'evm',
          status: 'pending',
          tx_hash: tx.hash,
          token_address: to,
        })
      
      if (error) throw error
      return tx
    } catch (error) {
      console.error('Error in EVM transfer:', error)
      throw error
    }
  },

  async stake(amount: string, stakingContract: string) {
    // Implement staking logic
    // This is a placeholder - actual implementation would depend on your staking contract
    console.log('Staking on EVM:', amount, stakingContract)
  }
}

// Crossmint Integration
export const crossmintService = {
  async createWallet(userId: string) {
    try {
      const response = await fetch('https://api.crossmint.com/api/v1/wallets', {
        method: 'POST',
        headers: {
          'x-api-key': process.env.CROSSMINT_API_KEY!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId })
      })
      
      const wallet = await response.json()
      
      // Update user's crossmint address in database
      const { data, error } = await supabase
        .from('users')
        .update({ crossmint_address: wallet.address })
        .eq('id', userId)
      
      if (error) throw error
      return wallet
    } catch (error) {
      console.error('Error creating Crossmint wallet:', error)
      throw error
    }
  }
}