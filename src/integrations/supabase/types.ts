export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent_performance: {
        Row: {
          created_at: string | null
          id: string
          profile_id: string | null
          total_fees: number | null
          total_trades: number | null
          total_volume: number | null
          updated_at: string | null
          win_rate: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          profile_id?: string | null
          total_fees?: number | null
          total_trades?: number | null
          total_volume?: number | null
          updated_at?: string | null
          win_rate?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          profile_id?: string | null
          total_fees?: number | null
          total_trades?: number | null
          total_volume?: number | null
          updated_at?: string | null
          win_rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_performance_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      liquidity_pools: {
        Row: {
          created_at: string | null
          id: string
          pool_address: string
          pool_type: Database["public"]["Enums"]["pool_type"]
          profile_id: string | null
          token_a: string
          token_b: string
          total_value_locked: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          pool_address: string
          pool_type: Database["public"]["Enums"]["pool_type"]
          profile_id?: string | null
          token_a: string
          token_b: string
          total_value_locked?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          pool_address?: string
          pool_type?: Database["public"]["Enums"]["pool_type"]
          profile_id?: string | null
          token_a?: string
          token_b?: string
          total_value_locked?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "liquidity_pools_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          updated_at: string
          wallet_address: string | null
        }
        Insert: {
          created_at?: string
          id: string
          updated_at?: string
          wallet_address?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string
          wallet_address?: string | null
        }
        Relationships: []
      }
      token_launches: {
        Row: {
          created_at: string | null
          id: string
          initial_price: number
          initial_supply: number
          launch_status: Database["public"]["Enums"]["launch_status"] | null
          profile_id: string | null
          token_address: string
          updated_at: string | null
          vesting_schedule: Json | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          initial_price: number
          initial_supply: number
          launch_status?: Database["public"]["Enums"]["launch_status"] | null
          profile_id?: string | null
          token_address: string
          updated_at?: string | null
          vesting_schedule?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: string
          initial_price?: number
          initial_supply?: number
          launch_status?: Database["public"]["Enums"]["launch_status"] | null
          profile_id?: string | null
          token_address?: string
          updated_at?: string | null
          vesting_schedule?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "token_launches_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      token_operations: {
        Row: {
          amount: number | null
          created_at: string | null
          id: string
          operation_type: Database["public"]["Enums"]["operation_type"]
          profile_id: string | null
          status: Database["public"]["Enums"]["operation_status"] | null
          tx_hash: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          id?: string
          operation_type: Database["public"]["Enums"]["operation_type"]
          profile_id?: string | null
          status?: Database["public"]["Enums"]["operation_status"] | null
          tx_hash?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          id?: string
          operation_type?: Database["public"]["Enums"]["operation_type"]
          profile_id?: string | null
          status?: Database["public"]["Enums"]["operation_status"] | null
          tx_hash?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "token_operations_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      trading_positions: {
        Row: {
          created_at: string | null
          entry_price: number
          id: string
          leverage: number | null
          market_address: string
          pnl: number | null
          position_size: number
          position_status: Database["public"]["Enums"]["position_status"] | null
          profile_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          entry_price: number
          id?: string
          leverage?: number | null
          market_address: string
          pnl?: number | null
          position_size: number
          position_status?:
            | Database["public"]["Enums"]["position_status"]
            | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          entry_price?: number
          id?: string
          leverage?: number | null
          market_address?: string
          pnl?: number | null
          position_size?: number
          position_status?:
            | Database["public"]["Enums"]["position_status"]
            | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trading_positions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_wallets: {
        Row: {
          created_at: string | null
          id: string
          is_crossmint: boolean | null
          profile_id: string | null
          updated_at: string | null
          wallet_address: string
          wallet_type: Database["public"]["Enums"]["wallet_type"]
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_crossmint?: boolean | null
          profile_id?: string | null
          updated_at?: string | null
          wallet_address: string
          wallet_type: Database["public"]["Enums"]["wallet_type"]
        }
        Update: {
          created_at?: string | null
          id?: string
          is_crossmint?: boolean | null
          profile_id?: string | null
          updated_at?: string | null
          wallet_address?: string
          wallet_type?: Database["public"]["Enums"]["wallet_type"]
        }
        Relationships: [
          {
            foreignKeyName: "user_wallets_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      launch_status: "PENDING" | "ACTIVE" | "COMPLETED" | "FAILED"
      operation_status: "PENDING" | "COMPLETED" | "FAILED"
      operation_type: "TRANSFER" | "STAKE" | "UNSTAKE"
      order_type: "MARKET" | "LIMIT" | "STOP_LOSS" | "TAKE_PROFIT"
      pool_type: "CONSTANT_PRODUCT" | "CONCENTRATED" | "STABLE"
      position_status: "OPEN" | "CLOSED" | "LIQUIDATED"
      wallet_type: "SOLANA" | "EVM" | "CROSSMINT"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never