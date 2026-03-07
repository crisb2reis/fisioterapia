"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Loader2, User, Phone, Mail } from "lucide-react";

// ─── Supabase ──────────────────────────────────────────────────────────────
// Substitua pelos seus valores reais
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

async function saveToSupabase(data: {
    nome: string;
    whatsapp: string;
    email: string;
    data_hora: string | null;
    status: string;
}) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
    const res = await fetch(`${SUPABASE_URL}/rest/v1/consultas_fisioterapia`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            Prefer: "return=representation",
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erro ao salvar");
    return await res.json();
}

// ─── Available slots (mock – replace with Google Calendar API) ─────────────
const SLOTS = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
const BUSY = ["09:00", "14:00"]; // horários ocupados (simulado)

function formatMonth(date: Date) {
    return date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
}

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

export default function SchedulingSection() {
    const today = new Date();
    const [viewYear, setViewYear] = useState(today.getFullYear());
    const [viewMonth, setViewMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [form, setForm] = useState({ nome: "", whatsapp: "", email: "" });
    const [leadSaved, setLeadSaved] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const today0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    function prevMonth() {
        if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
        else setViewMonth(m => m - 1);
        setSelectedDay(null); setSelectedSlot(null);
    }

    function nextMonth() {
        if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
        else setViewMonth(m => m + 1);
        setSelectedDay(null); setSelectedSlot(null);
    }

    function isPast(day: number) {
        const d = new Date(viewYear, viewMonth, day);
        return d < today0;
    }

    function isWeekend(day: number) {
        const d = new Date(viewYear, viewMonth, day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    // Lead capture: save partial data on contact blur
    async function handleContactBlur() {
        if (leadSaved || !form.nome || !form.whatsapp) return;
        try {
            await saveToSupabase({ nome: form.nome, whatsapp: form.whatsapp, email: form.email, data_hora: null, status: "lead" });
            setLeadSaved(true);
        } catch (_) { /* silent */ }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!selectedDay || !selectedSlot) return;
        if (!form.nome || !form.whatsapp) return;

        setStatus("loading");
        const dataHora = new Date(viewYear, viewMonth, selectedDay, parseInt(selectedSlot), 0).toISOString();
        try {
            await saveToSupabase({ ...form, data_hora: dataHora, status: "agendado" });
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        const dtFormatted = new Date(viewYear, viewMonth, selectedDay!, parseInt(selectedSlot!), 0)
            .toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" });

        const gcLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consulta+de+Fisioterapia&details=Consulta+agendada+com+a+equipe+FisioTerapia+Pro&dates=${new Date(viewYear, viewMonth, selectedDay!, parseInt(selectedSlot!), 0)
                .toISOString().replace(/[-:]/g, "").split(".")[0]
            }Z/${new Date(viewYear, viewMonth, selectedDay!, parseInt(selectedSlot!) + 1, 0)
                .toISOString().replace(/[-:]/g, "").split(".")[0]
            }Z`;

        return (
            <section id="scheduling" className="py-20 bg-white">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-br from-teal-50 to-mint-50 rounded-3xl p-12 shadow-xl border border-teal-100">
                        <div className="w-20 h-20 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} className="text-mint-600" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Consulta Agendada! 🎉</h2>
                        <p className="text-gray-600 mb-2">Olá, <strong>{form.nome}</strong>!</p>
                        <p className="text-gray-600 mb-6">
                            Sua consulta foi confirmada para{" "}
                            <strong className="text-teal-700">{dtFormatted}</strong>.
                            Você receberá uma confirmação no WhatsApp em breve.
                        </p>
                        <a
                            href={gcLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-teal-700 transition-colors shadow-md"
                        >
                            📅 Adicionar ao Google Agenda
                        </a>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="scheduling" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="section-tag">Agendamento Online</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Agende sua <span className="text-teal-600">consulta</span>
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-lg mx-auto">
                        Escolha o melhor dia e horário. É rápido, simples e sem complicações.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Calendar */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            {/* Month nav */}
                            <div className="flex items-center justify-between mb-5">
                                <button type="button" onClick={prevMonth} className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-teal-400 transition-colors">
                                    <ChevronLeft size={16} />
                                </button>
                                <span className="font-bold text-gray-800 capitalize text-sm">
                                    {formatMonth(new Date(viewYear, viewMonth))}
                                </span>
                                <button type="button" onClick={nextMonth} className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-teal-400 transition-colors">
                                    <ChevronRight size={16} />
                                </button>
                            </div>

                            {/* Days of week */}
                            <div className="grid grid-cols-7 mb-2">
                                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(d => (
                                    <div key={d} className="text-center text-xs font-semibold text-gray-400 py-1">{d}</div>
                                ))}
                            </div>

                            {/* Calendar grid */}
                            <div className="grid grid-cols-7 gap-1">
                                {Array(firstDay).fill(null).map((_, i) => <div key={`e-${i}`} />)}
                                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                                    const past = isPast(day);
                                    const weekend = isWeekend(day);
                                    const disabled = past || weekend;
                                    const active = selectedDay === day;
                                    return (
                                        <button
                                            type="button"
                                            key={day}
                                            disabled={disabled}
                                            onClick={() => { setSelectedDay(day); setSelectedSlot(null); }}
                                            className={`aspect-square rounded-lg text-xs font-medium flex items-center justify-center transition-all duration-150 ${disabled
                                                    ? "text-gray-300 cursor-not-allowed"
                                                    : active
                                                        ? "bg-teal-600 text-white shadow-md"
                                                        : "hover:bg-teal-50 hover:text-teal-700 text-gray-700"
                                                }`}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Time slots */}
                            {selectedDay && (
                                <div className="mt-5 border-t border-gray-200 pt-5">
                                    <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                                        Horários disponíveis
                                    </p>
                                    <div className="grid grid-cols-4 gap-2">
                                        {SLOTS.map(slot => {
                                            const busy = BUSY.includes(slot);
                                            const selected = selectedSlot === slot;
                                            return (
                                                <button
                                                    type="button"
                                                    key={slot}
                                                    disabled={busy}
                                                    onClick={() => setSelectedSlot(slot)}
                                                    className={`py-2 rounded-lg text-xs font-semibold border transition-all duration-150 time-slot ${busy
                                                            ? "disabled"
                                                            : selected
                                                                ? "selected"
                                                                : "border-gray-200 text-gray-600"
                                                        }`}
                                                >
                                                    {slot}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-2">
                                        🔴 Ocupado &nbsp; ✅ Disponível
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Form */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-5">
                            <h3 className="font-bold text-gray-800 text-lg">Seus dados</h3>

                            <div className="space-y-4">
                                <div className="relative">
                                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Nome completo *"
                                        value={form.nome}
                                        onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                                        onBlur={handleContactBlur}
                                        className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:border-teal-500 transition-colors"
                                    />
                                </div>

                                <div className="relative">
                                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        required
                                        type="tel"
                                        placeholder="WhatsApp (com DDD) *"
                                        value={form.whatsapp}
                                        onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                                        onBlur={handleContactBlur}
                                        className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:border-teal-500 transition-colors"
                                    />
                                </div>

                                <div className="relative">
                                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="E-mail (opcional)"
                                        value={form.email}
                                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                        className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:border-teal-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Summary */}
                            {selectedDay && selectedSlot && (
                                <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                                    <p className="text-xs text-teal-700 font-semibold uppercase tracking-wide mb-1">
                                        Resumo do Agendamento
                                    </p>
                                    <p className="text-sm text-teal-800 font-medium">
                                        {new Date(viewYear, viewMonth, selectedDay).toLocaleDateString("pt-BR", {
                                            weekday: "long", day: "2-digit", month: "long"
                                        })} às {selectedSlot}h
                                    </p>
                                </div>
                            )}

                            {status === "error" && (
                                <p className="text-red-500 text-sm text-center">
                                    Ocorreu um erro. Tente novamente ou contate pelo WhatsApp.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={!selectedDay || !selectedSlot || status === "loading"}
                                className="w-full flex items-center justify-center gap-2 bg-mint-500 hover:bg-mint-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
                            >
                                {status === "loading" ? (
                                    <><Loader2 size={18} className="animate-spin" /> Confirmando...</>
                                ) : (
                                    "Confirmar Agendamento ✓"
                                )}
                            </button>

                            <p className="text-center text-xs text-gray-400">
                                🔒 Seus dados são protegidos e nunca compartilhados.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
