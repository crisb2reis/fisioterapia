"use client";
import { useState } from "react";
import { Award, Bookmark, Users } from "lucide-react";

const credentials = [
    { icon: Award, text: "CREFITO-3: 123456-F" },
    { icon: Bookmark, text: "Pós-graduação em Reabilitação Neurológica – USP" },
    { icon: Users, text: "+500 pacientes atendidos com sucesso" },
];

export default function AboutSection() {
    const [imgOk, setImgOk] = useState(true);

    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* LEFT – Photo */}
                    <div className="relative flex justify-center">
                        <div className="relative w-72 h-80 sm:w-80 sm:h-96">
                            {/* Frame */}
                            <div className="absolute inset-0 rounded-3xl border-4 border-teal-200 translate-x-4 translate-y-4" />
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-100 to-mint-100">
                                {imgOk && (
                                    <img
                                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80&fit=crop"
                                        alt="Dra. Ana Silva – Fisioterapeuta"
                                        className="w-full h-full object-cover"
                                        onError={() => setImgOk(false)}
                                    />
                                )}
                            </div>
                            {/* Credential badge */}
                            <div className="absolute -bottom-6 -right-4 bg-teal-600 text-white rounded-2xl px-5 py-3 shadow-xl">
                                <p className="text-xs font-medium opacity-80">CREFITO Ativo</p>
                                <p className="font-bold text-sm">#123456-F</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT – Bio */}
                    <div className="space-y-6">
                        <div>
                            <span className="section-tag">Conheça a Especialista</span>
                            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
                                Dra. Ana Silva,
                                <span className="block text-teal-600">Fisioterapeuta</span>
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-base">
                            Com mais de 10 anos de experiência clínica, a Dra. Ana Silva é
                            especialista em reabilitação musculoesquelética, neurológica e
                            esportiva. Formada pela Universidade de São Paulo com pós-graduação
                            em Fisioterapia Neurológica.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-base">
                            Acredita que cada paciente é único e merece um plano de tratamento
                            totalmente personalizado, aliando as técnicas mais modernas com um
                            cuidado humano e acolhedor.
                        </p>

                        {/* Credentials */}
                        <div className="space-y-3 pt-2">
                            {credentials.map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                                        <Icon size={16} className="text-teal-600" />
                                    </div>
                                    <p className="text-sm text-gray-700 font-medium">{text}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#scheduling"
                            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2"
                        >
                            Agendar com a Dra. Ana
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
