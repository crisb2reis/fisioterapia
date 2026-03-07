import { Activity, Brain, Bone, Heart, Waves, Microscope } from "lucide-react";

const services = [
    {
        icon: Bone,
        title: "Fisioterapia Ortopédica",
        desc: "Tratamento de fraturas, entorses, tendinites, artrites e pós-cirúrgico ortopédico.",
        tag: "Mais Procurado",
        tagColor: "bg-mint-500",
    },
    {
        icon: Activity,
        title: "Fisioterapia Esportiva",
        desc: "Prevenção e reabilitação de lesões em atletas amadores e profissionais.",
        tag: "",
        tagColor: "",
    },
    {
        icon: Brain,
        title: "Fisioterapia Neurológica",
        desc: "Reabilitação de AVC, Parkinson, esclerose múltipla e outras condições neurológicas.",
        tag: "",
        tagColor: "",
    },
    {
        icon: Heart,
        title: "Rpg & Pilates Clínico",
        desc: "Reeducação postural global e fortalecimento muscular com método Pilates adaptado.",
        tag: "Novidade",
        tagColor: "bg-teal-500",
    },
    {
        icon: Waves,
        title: "Eletroterapia",
        desc: "TENS, ultrassom terapêutico e laser para alívio da dor e recuperação tecidual.",
        tag: "",
        tagColor: "",
    },
    {
        icon: Microscope,
        title: "Dry Needling",
        desc: "Agulhamento a seco para liberação de pontos-gatilho e alívio de dores crônicas.",
        tag: "",
        tagColor: "",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-tag">Especialidades</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Nossas <span className="text-teal-600">especialidades</span>
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-lg mx-auto">
                        Oferecemos tratamentos especializados para diversas condições,
                        utilizando técnicas modernas e equipamentos de última geração.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(({ icon: Icon, title, desc, tag, tagColor }) => (
                        <div
                            key={title}
                            className="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm card-hover overflow-hidden"
                        >
                            {/* Background accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-teal-50 group-hover:bg-teal-100 transition-colors duration-300" />

                            {/* Tag */}
                            {tag && (
                                <span
                                    className={`absolute top-4 right-4 text-white text-[10px] font-bold px-2.5 py-1 rounded-full ${tagColor}`}
                                >
                                    {tag}
                                </span>
                            )}

                            {/* Icon */}
                            <div className="relative w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors duration-200">
                                <Icon size={22} className="text-teal-600" />
                            </div>

                            <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>

                            <a
                                href="#scheduling"
                                className="inline-flex items-center gap-1 text-teal-600 text-sm font-semibold mt-4 hover:gap-2 transition-all duration-200"
                            >
                                Agendar →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
