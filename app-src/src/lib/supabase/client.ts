import { createBrowserClient } from '@supabase/ssr'
import { Database } from './types'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error(
      '[Supabase] ❌ Variáveis de ambiente não encontradas!\n' +
      '→ NEXT_PUBLIC_SUPABASE_URL: ' + (supabaseUrl ? '✅ definida' : '❌ AUSENTE') + '\n' +
      '→ NEXT_PUBLIC_SUPABASE_ANON_KEY: ' + (supabaseKey ? '✅ definida' : '❌ AUSENTE') + '\n' +
      'Verifique os Secrets do repositório no GitHub (Settings → Secrets and variables → Actions).'
    )
    throw new Error('[Supabase] Variáveis de ambiente não configuradas. Veja o console para instruções.')
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseKey)
}
