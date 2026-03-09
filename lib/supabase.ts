import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ofwycxgvgxnbbyogkhgk.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Blog {
  id: string
  title: string
  slug: string
  content: string
  meta_description: string
  site: string
  status: string
  created_at: string
  updated_at: string
}
