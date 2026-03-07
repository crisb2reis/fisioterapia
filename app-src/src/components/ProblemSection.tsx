import { AlertCircle, Dumbbell, HeartHandshake, Stethoscope } from "lucide-react";

const problems = [
    {
        icon: AlertCircle,
        color: "text-red-400",
        bg: "bg-red-50",
        title: "Dor Lombar",
        desc: "Dores nas costas que impedem tarefas simples do dia a dia e afetam sua qualidade de vida.",
    },
    {
        icon: Dumbbell,
        color: "text-orange-400",
        bg: "bg-orange-50",
        title: "Lesões Esportivas",
        desc: "Entorses, rupturas musculares e tendinites que afastam você da prática esportiva.",
    },
    {
        icon: HeartHandshake,
        color: "text-purple-400",
        bg: "bg-purple-50",
        title: "Pós-Operatório",
        desc: "Recuperação segura e eficiente após cirurgias, acelerando seu retorno à vida normal.",
    },
    {
        icon: Stethoscope,
        color: "text-teal-500",
        bg: "bg-teal-50",
        title: "Tensões e Estresse",
        desc: "Contraturas musculares, tensão cervical e dores relacionadas ao estresse crônico.",
    },
];

export default function ProblemSection() {
    return (
        <section className="py-20 bg-gray-50" id="problems">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-tag">Quem Atendemos</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
                        Você se identifica com
                        <span className="text-teal-600"> alguma dessas situações?</span>
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-lg mx-auto text-base">
                        Se você sofre com alguma destas condições, a fisioterapia pode ser
                        a solução que você estava procurando.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map(({ icon: Icon, color, bg, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
                        >
                            <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                                <Icon size={22} className={color} />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA strip */}
                <div className="mt-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-white font-bold text-xl">Não precisa conviver com a dor.</p>
                        <p className="text-teal-100 text-sm mt-1">Tratamento especializado e resultados comprovados.</p>
                    </div>
                    <a
                        href="#scheduling"
                        className="shrink-0 bg-white text-teal-700 font-bold px-8 py-3.5 rounded-full hover:bg-teal-50 transition-colors shadow-lg"
                    >
                        Quero me recuperar →
                    </a>
                </div>
            </div>
        </section>
    );
}
