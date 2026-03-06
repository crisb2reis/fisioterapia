-- Tabela para captar leads da landing page de fisioterapia
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    interest TEXT, -- Ex: 'Coluna', 'Joelho', 'Esportiva'
    status TEXT DEFAULT 'novo', -- 'novo', 'atendido', 'convertido'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ativar RLS (Row Level Security)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Permitir inserções anônimas (necessário para landing page)
CREATE POLICY "Permitir inserção anônima" ON public.leads
    FOR INSERT 
    TO anon
    WITH CHECK (true);

-- Permitir leitura apenas para usuários autenticados (opcional, para dashboard)
CREATE POLICY "Permitir leitura autenticada" ON public.leads
    FOR SELECT 
    TO authenticated
    USING (true);
