import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase-types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vdkyahapnibtxkyofbap.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZka3lhaGFwbmlidHhreW9mYmFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MzYyMzAsImV4cCI6MjAyNTQxMjIzMH0.Wd0VQMt0I6WlPHEyxQYqFGVSKbP6dgCn0WZhXogdQXo'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)