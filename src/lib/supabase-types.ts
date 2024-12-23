export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          solana_address: string | null
          evm_address: string | null
          crossmint_address: string | null
          updated_at: string
        }
        Insert: {
          id: string
          created_at?: string
          solana_address?: string | null
          evm_address?: string | null
          crossmint_address?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          created_at?: string
          solana_address?: string | null
          evm_address?: string | null
          crossmint_address?: string | null
          updated_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          created_at: string
          user_id: string
          type: 'transfer' | 'stake' | 'unstake'
          amount: number
          token_address: string
          chain: 'solana' | 'evm'
          status: 'pending' | 'completed' | 'failed'
          tx_hash: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          type: 'transfer' | 'stake' | 'unstake'
          amount: number
          token_address: string
          chain: 'solana' | 'evm'
          status?: 'pending' | 'completed' | 'failed'
          tx_hash?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          type?: 'transfer' | 'stake' | 'unstake'
          amount?: number
          token_address?: string
          chain?: 'solana' | 'evm'
          status?: 'pending' | 'completed' | 'failed'
          tx_hash?: string | null
        }
      }
      ai_insights: {
        Row: {
          id: string
          created_at: string
          type: 'sentiment' | 'price_prediction' | 'trend'
          data: Json
          confidence: number
          token_address: string
        }
        Insert: {
          id?: string
          created_at?: string
          type: 'sentiment' | 'price_prediction' | 'trend'
          data: Json
          confidence: number
          token_address: string
        }
        Update: {
          id?: string
          created_at?: string
          type?: 'sentiment' | 'price_prediction' | 'trend'
          data?: Json
          confidence?: number
          token_address?: string
        }
      }
    }
  }
}