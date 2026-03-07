import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Brand */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-mint-500 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">F+</span>
                        </div>
                        <span className="text-white font-semibold text-sm">FisioTerapia Pro</span>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-center">
                        © {new Date().getFullYear()} FisioTerapia Pro. CREFITO-3 #123456-F. Todos os direitos reservados.
                    </p>

                    {/* Made with love */}
                    <div className="flex items-center gap-1 text-xs">
                        Feito com <Heart size={12} className="text-red-400 fill-red-400 mx-0.5" /> no Brasil
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800 flex flex-wrap justify-center gap-6 text-xs">
                    {["Política de Privacidade", "Termos de Uso", "LGPD"].map(item => (
                        <a key={item} href="#" className="hover:text-white transition-colors">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
