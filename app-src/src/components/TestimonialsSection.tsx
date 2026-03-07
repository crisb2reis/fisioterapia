"use client";
import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Maria Fernanda S.",
        role: "Professora – Rio de Janeiro",
        stars: 5,
        text: "Após uma hérnia de disco, eu mal conseguia caminhar. Em 3 meses de tratamento com a Dra. Ana, recuperei total mobilidade. O atendimento é impecável e muito humano!",
        initials: "MF",
        color: "bg-teal-500",
    },
    {
        name: "Carlos Eduardo M.",
        role: "Atleta – São Paulo",
        stars: 5,
        text: "Sofri uma ruptura no ligamento do joelho. O protocolo de reabilitação esportiva foi perfeito. Voltei a correr em tempo recorde! Indico a todos os atletas.",
        initials: "CE",
        color: "bg-mint-600",
    },
    {
        name: "Ana Paula R.",
        role: "Empresária – Campinas",
        stars: 5,
        text: "Vivia com dores cervicais crônicas por causa do escritório. As sessões de RPG e fisioterapia mudaram minha vida. Durmo melhor e trabalho muito mais confortável.",
        initials: "AP",
        color: "bg-teal-700",
    },
    {
        name: "Roberto F.",
        role: "Engenheiro – São Paulo",
        stars: 5,
        text: "Pós-operatório do quadril foi muito tranquilo com a orientação da equipe. Senti segurança em cada etapa da recuperação. Profissionais excelentes!",
        initials: "RF",
        color: "bg-teal-500",
    },
    {
        name: "Juliana P.",
        role: "Estudante – São Paulo",
        stars: 5,
        text: "Comecei o pilates clínico para correção postural e os resultados em apenas 2 meses foram surpreendentes. As aulas são personalizadas e muito eficazes.",
        initials: "JP",
        color: "bg-mint-500",
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, next]);

    const visible = [
        testimonials[current],
        testimonials[(current + 1) % testimonials.length],
    ];

    return (
        <section id="testimonials" className="py-20 teal-gradient overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        O que nossos pacientes dizem
                    </h2>
                    <p className="mt-3 text-teal-100">
                        Resultados reais de quem recuperou a qualidade de vida.
                    </p>
                </div>

                {/* Slider */}
                <div className="grid md:grid-cols-2 gap-6">
                    {visible.map((t, i) => (
                        <div
                            key={`${t.name}-${i}`}
                            className="bg-white rounded-2xl p-7 shadow-xl relative"
                        >
                            {/* Quote icon */}
                            <Quote
                                size={36}
                                className="absolute top-5 right-6 text-teal-50 fill-teal-50"
                            />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.stars)].map((_, j) => (
                                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 italic text-sm">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div
                                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6 mt-10">
                    <button
                        onClick={() => { prev(); setIsAutoPlaying(false); }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-2 bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => { next(); setIsAutoPlaying(false); }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
