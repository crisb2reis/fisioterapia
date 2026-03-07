import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-tag">Onde Estamos</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Venha nos <span className="text-teal-600">visitar</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Contact info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
                            {[
                                {
                                    icon: MapPin,
                                    label: "Endereço",
                                    value: "Av. Paulista, 1234 – Sala 101\nBela Vista, São Paulo – SP\nCEP 01310-100",
                                },
                                {
                                    icon: Phone,
                                    label: "Telefone / WhatsApp",
                                    value: "(11) 99999-9999",
                                },
                                {
                                    icon: Mail,
                                    label: "E-mail",
                                    value: "contato@fisioterapiapro.com.br",
                                },
                                {
                                    icon: Clock,
                                    label: "Horário de Atendimento",
                                    value: "Segunda a Sexta: 08h – 19h\nSábado: 08h – 13h",
                                },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex gap-4">
                                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icon size={18} className="text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-0.5">
                                            {label}
                                        </p>
                                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social */}
                        <div className="flex gap-3">
                            {[
                                { icon: Instagram, label: "@fisioterapiapro", href: "#" },
                                { icon: Facebook, label: "FisioTerapia Pro", href: "#" },
                            ].map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 hover:text-teal-600 hover:border-teal-200 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm"
                                >
                                    <Icon size={16} />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-96 lg:h-full min-h-80">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0966497!2d-46.6548387!3d-23.5629285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "320px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização FisioTerapia Pro – Av. Paulista, São Paulo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
