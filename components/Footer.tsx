import { Stethoscope } from "lucide-react";
import Link from "next/link";

const WhatsappIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M11.996 0C5.372 0 0 5.373 0 11.999c0 2.656.862 5.112 2.308 7.098l-1.574 5.75L6.64 23.27A11.93 11.93 0 0011.996 24c6.623 0 12.004-5.373 12.004-12.001C24 5.373 18.619 0 11.996 0zm0 21.986c-2.181 0-4.226-.566-5.998-1.558l-.43-.24-3.562.935.948-3.473-.263-.418a9.927 9.927 0 01-1.611-5.466c0-5.508 4.49-9.986 10.005-9.986 5.514 0 9.993 4.478 9.993 9.986 0 5.509-4.479 9.986-9.993 9.986zm5.492-7.514c-.301-.15-1.782-.879-2.062-.979s-.48-.15-.68.15c-.201.3-.778.979-.958 1.179-.18.2-.36.226-.66.076-1.503-.755-2.618-1.502-3.618-3.237-.2-.346-.021-.531.129-.681.135-.135.301-.345.45-.526.15-.18.201-.3.301-.5a.53.53 0 00-.025-.5c-.075-.15-.681-1.638-.933-2.242-.243-.585-.494-.505-.68-.515-.175-.01-.375-.011-.576-.011-.201 0-.526.075-.801.375-.276.3-.984 1.157-.984 2.8s1.085 3.22 1.235 3.42c.15.2 2.336 3.565 5.657 4.996 1.948.841 2.76.903 3.738.756.883-.133 2.502-.857 2.852-1.684.351-.827.351-1.535.251-1.684-.101-.15-.361-.225-.662-.375z" />
    </svg>
);

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-brand-bg text-black relative mt-12">
                {/* Subtle gold separator at the top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-neutral-400/50 to-gray-200" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-black/10 pb-12">

                        {/* Brand Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <Stethoscope className="h-8 w-8 text-brand-primary" />
                                <div className="flex flex-col">
                                    <span className="font-sans font-black tracking-tight text-xl font-semibold leading-none">
                                        Dr. Nadia Naim
                                    </span>
                                    <span className="text-xs text-black/80 font-medium tracking-wide">
                                        Spécialiste ORL
                                    </span>
                                </div>
                            </div>
                            <p className="text-black/60 text-sm leading-relaxed max-w-sm">
                                Une prise en charge globale et spécialisée de toutes les affections de la sphère ORL pour adultes et enfants.
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-black">Navigation</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="#about" className="text-black/60 hover:text-black transition-colors">À Propos</Link></li>
                                <li><Link href="#services" className="text-black/60 hover:text-black transition-colors">Nos Services</Link></li>
                                <li><Link href="#horaires" className="text-black/60 hover:text-black transition-colors">Horaires</Link></li>
                                <li><Link href="#contact" className="text-black/60 hover:text-black transition-colors">Prendre Rendez-vous</Link></li>
                            </ul>
                        </div>

                        {/* Quick Contact */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-black">Contact</h4>
                            <ul className="space-y-3 text-sm text-black/60">
                                <li>Hay almatar, aerodrome ouassat, El Jadida 24000, Morocco</li>
                                <li>Tél: +212 6 45 48 32 80</li>
                                <li>WhatsApp: +212 6 45 48 32 80</li>
                            </ul>
                        </div>

                    </div>

                    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black/40">
                        <p>&copy; {currentYear} Cabinet ORL Dr. Nadia Naim. Tous droits réservés.</p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-black transition-colors">Mentions Légales</Link>
                            <Link href="#" className="hover:text-black transition-colors">Politique de Confidentialité</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp Button (Mobile Only) */}
            <div className="md:hidden fixed bottom-6 right-6 z-50">
                <a
                    href="https://wa.me/212645483280?text=Bonjour%20Dr.%20Naim,%20je%20souhaite%20prendre%20un%20rendez-vous."
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white shadow-xl shadow-brand-primary/20 hover:scale-110 transition-transform border-none"
                >
                    {/* Pulsing glow animation */}
                    <span className="absolute inset-0 rounded-full bg-brand-primary opacity-40 animate-ping" />
                    <WhatsappIcon className="h-7 w-7 relative z-10" />
                </a>
            </div>
        </>
    );
}
