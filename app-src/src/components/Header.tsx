"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Contato", href: "#contact" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-mint-500 flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-sm">F+</span>
                        </div>
                        <div className="leading-tight">
                            <span className="block font-bold text-teal-700 text-base">FisioTerapia</span>
                            <span className="block text-[10px] text-teal-500 font-medium tracking-widest uppercase">Pro</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 rounded-full transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="tel:+5511999999999"
                            className="flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors"
                        >
                            <Phone size={15} />
                            (11) 99999-9999
                        </a>
                        <a
                            href="#scheduling"
                            className="bg-mint-500 hover:bg-mint-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Agendar Consulta
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-lg text-teal-700"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-fade-in">
                    <div className="px-4 py-5 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-3 border-t border-gray-100">
                            <a
                                href="#scheduling"
                                onClick={() => setMobileOpen(false)}
                                className="block w-full text-center bg-mint-500 text-white font-semibold py-3 rounded-full text-sm"
                            >
                                Agendar Consulta
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
