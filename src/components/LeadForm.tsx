'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function LeadForm() {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) return;

        setStatus('loading');

        const { error } = await supabase.from('leads').insert([
            { name: formData.name, phone: formData.phone }
        ]);

        if (error) {
            console.error(error);
            setStatus('error');
        } else {
            setStatus('success');
            setFormData({ name: '', phone: '' });
        }
    };

    return (
        <div className="w-full max-w-2xl flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
                <input
                    required
                    className="flex-1 rounded-full px-6 py-3 border-none bg-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-secondary backdrop-blur-sm"
                    placeholder="Seu nome"
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    required
                    className="flex-1 rounded-full px-6 py-3 border-none bg-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-secondary backdrop-blur-sm"
                    placeholder="Seu telefone / WhatsApp"
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
                <button
                    disabled={status === 'loading'}
                    className="bg-secondary hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-bold rounded-full px-8 py-3 transition-colors shadow-lg whitespace-nowrap"
                    type="submit"
                >
                    {status === 'loading' ? 'Enviando...' : 'Agendar Avaliação'}
                </button>
            </form>
            {status === 'success' && (
                <p className="mt-4 text-secondary font-medium">✅ Recebemos seu contato! Nossa equipe falará com você em breve.</p>
            )}
            {status === 'error' && (
                <p className="mt-4 text-red-300 font-medium">❌ Ocorreu um erro ao enviar. Tente novamente mais tarde.</p>
            )}
        </div>
    );
}
