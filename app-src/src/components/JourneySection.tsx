import { ClipboardList, Zap, Trophy } from "lucide-react";

const steps = [
    {
        num: "01",
        icon: ClipboardList,
        title: "Avaliação Completa",
        desc: "Na primeira consulta, realizamos uma avaliação detalhada do seu histórico clínico, dores e limitações para entender suas necessidades específicas.",
        color: "bg-teal-600",
    },
    {
        num: "02",
        icon: Zap,
        title: "Plano de Tratamento",
        desc: "Desenvolvemos um protocolo de tratamento 100% personalizado, com técnicas manuais, exercícios terapêuticos e recursos tecnológicos.",
        color: "bg-mint-500",
    },
    {
        num: "03",
        icon: Trophy,
        title: "Alta & Prevenção",
        desc: "Após a recuperação total, entregamos um programa de exercícios preventivos para que você mantenha os resultados e evite recidivas.",
        color: "bg-teal-700",
    },
];

export default function JourneySection() {
    return (
        <section id="journey" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="section-tag">Como Funciona</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Sua jornada de{" "}
                        <span className="text-teal-600">recuperação</span>
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-lg mx-auto">
                        Um processo estruturado em 3 etapas para garantir sua recuperação
                        completa e duradoura.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connector line – desktop */}
                    <div className="hidden lg:block absolute top-16 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-teal-200 via-mint-200 to-teal-300 z-0" />

                    <div className="grid lg:grid-cols-3 gap-10 relative z-10">
                        {steps.map(({ num, icon: Icon, title, desc, color }, i) => (
                            <div key={num} className="flex flex-col items-center text-center group">
                                {/* Circle */}
                                <div
                                    className={`w-16 h-16 ${color} rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-200`}
                                >
                                    <Icon size={26} className="text-white" />
                                </div>

                                {/* Content */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full card-hover">
                                    <span className="text-4xl font-black text-gray-100 block mb-2 leading-none">
                                        {num}
                                    </span>
                                    <h3 className="font-bold text-gray-900 text-xl mb-3">{title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                                </div>

                                {/* Arrow for mobile */}
                                {i < steps.length - 1 && (
                                    <div className="lg:hidden text-2xl text-teal-300 my-4">↓</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
