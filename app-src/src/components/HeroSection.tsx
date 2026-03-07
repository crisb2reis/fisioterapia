"use client";
import { useState } from "react";
import { Star, ChevronRight, Calendar } from "lucide-react";

export default function HeroSection() {
    const [imgOk, setImgOk] = useState(true);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-100/60 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-mint-100/40 blur-3xl" />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-teal-50/50 blur-2xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* LEFT – Copy */}
                    <div className="space-y-7 animate-fade-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white border border-teal-100 rounded-full px-4 py-2 shadow-sm">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-xs font-semibold text-teal-700">
                                +500 pacientes recuperados
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Recupere sua
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-mint-500">
                                mobilidade
                            </span>
                            e viva
                            <span className="italic font-black"> sem dor.</span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            Tratamentos personalizados com fisioterapia de ponta, aliando
                            tecnologia e cuidado humanizado para a sua total recuperação.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#scheduling"
                                className="inline-flex items-center justify-center gap-2 bg-mint-500 hover:bg-mint-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-base"
                            >
                                <Calendar size={18} />
                                Agendar Minha Consulta
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center gap-2 border-2 border-teal-500 text-teal-700 hover:bg-teal-50 font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base"
                            >
                                Saiba Mais
                                <ChevronRight size={16} />
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                            {[
                                { value: "97%", label: "Satisfação" },
                                { value: "10+", label: "Anos de exp." },
                                { value: "500+", label: "Pacientes" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="text-2xl font-extrabold text-teal-700">{s.value}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT – Image */}
                    <div className="relative flex justify-center animate-fade-up delay-200">
                        <div className="relative w-full max-w-md">
                            {/* Main image placeholder – premium gradient */}
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-200 via-teal-100 to-mint-100">
                                    {imgOk && (
                                        <img
                                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop"
                                            alt="Fisioterapeuta em atendimento"
                                            className="w-full h-full object-cover"
                                            onError={() => setImgOk(false)}
                                        />
                                    )}
                                </div>
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent" />
                            </div>

                            {/* Floating rating badge */}
                            <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                                        <span className="text-xl">⭐</span>
                                    </div>
                                    <div>
                                        <p className="font-extrabold text-gray-900 text-lg leading-none">4.9</p>
                                        <p className="text-xs text-gray-500">Google Avaliações</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating booking badge */}
                            <div className="absolute -top-4 -right-4 bg-teal-600 text-white rounded-2xl p-4 shadow-xl animate-float delay-300">
                                <div className="text-center">
                                    <p className="text-xs font-medium opacity-80">Próxima vaga</p>
                                    <p className="font-bold text-sm mt-0.5">Amanhã, 09h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 80H1440V40C1200 0 960 20 720 40C480 60 240 0 0 40V80Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}
