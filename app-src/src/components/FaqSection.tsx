"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Preciso de encaminhamento médico para fazer fisioterapia?",
        a: "Não é obrigatório. Você pode buscar atendimento fisioterapêutico diretamente, sem encaminhamento. No entanto, em alguns casos o laudo médico pode auxiliar no diagnóstico e acelerar o tratamento.",
    },
    {
        q: "Quantas sessões precisarei fazer?",
        a: "O número de sessões varia conforme a condição e evolução de cada paciente. Na avaliação inicial, traçamos um plano estimado. A maioria dos casos se resolve entre 10 e 24 sessões.",
    },
    {
        q: "Os planos de saúde cobrem as sessões?",
        a: "Trabalhamos com os principais planos de saúde. Entre em contato conosco com o número do seu plano para confirmar a cobertura antes de agendar.",
    },
    {
        q: "Qual a duração de cada sessão?",
        a: "As sessões têm duração média de 50 minutos a 1 hora, dependendo do protocolo de tratamento estabelecido para cada paciente.",
    },
    {
        q: "O consultório atende crianças e idosos?",
        a: "Sim! Atendemos todas as faixas etárias com protocolos adaptados. Temos especialistas em fisioterapia pediátrica e geronto-fisioterapia.",
    },
    {
        q: "Fazem atendimento domiciliar?",
        a: "Sim, oferecemos atendimento domiciliar para pacientes com dificuldade de locomoção. Entre em contato para verificar disponibilidade e cobertura na sua região.",
    },
];

export default function FaqSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-tag">Dúvidas Frequentes</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Perguntas <span className="text-teal-600">frequentes</span>
                    </h2>
                    <p className="mt-4 text-gray-500">
                        Tire suas dúvidas antes de agendar. Se precisar de mais informações,
                        entre em contato pelo WhatsApp.
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map(({ q, a }, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full text-left flex items-center justify-between gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                                    {q}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`flex-shrink-0 text-teal-600 transition-transform duration-300 ${open === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-400 ease-in-out ${open === i ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                style={{
                                    transition: "max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease",
                                }}
                            >
                                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        Não encontrou o que procurava?
                    </p>
                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-mint-500 hover:bg-mint-600 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-md"
                    >
                        💬 Falar no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
