"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phone = "5511999999999";
    const message = encodeURIComponent(
        "Olá! Gostaria de agendar uma consulta de fisioterapia."
    );

    return (
        <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: "#25D366" }}
        >
            <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-40" />
            <MessageCircle size={26} className="text-white relative z-10" fill="white" />
        </a>
    );
}
