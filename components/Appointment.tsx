import { Button } from "./ui/button";

export function Appointment() {
    return (
        <section className="bg-brand-bg text-black py-24 relative overflow-hidden" id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="bg-brand-bg rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-brand-primary/10 border border-brand-primary/20 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left side: Content and CTA */}
                    <div className="flex-1 space-y-8 relative z-10 w-full text-center lg:text-left">
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest">
                                Votre Santé N'Attend Pas
                            </h2>
                            <h3 className="text-5xl md:text-6xl font-sans font-black tracking-tighter text-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black via-black/90 to-black/70 pb-2">
                                Prendre Un Rendez-Vous
                            </h3>
                            <p className="text-black/70 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Nous avons simplifié la prise de rendez-vous pour vous offrir une expérience fluide. Contactez-nous directement via WhatsApp pour choisir le créneau qui vous convient.
                            </p>
                        </div>

                        <div className="pt-4 flex flex-col items-center lg:items-start">
                            <Button
                                size="lg"
                                className="bg-brand-primary hover:bg-[#b058c9] text-white border-none font-bold rounded-full px-10 py-7 text-lg shadow-[0_8px_30px_rgb(207,116,237,0.4)] hover:shadow-[0_12px_40px_rgb(207,116,237,0.6)] hover:-translate-y-1 transition-all duration-500 w-full sm:w-auto flex items-center justify-center gap-4 group"
                                asChild
                            >
                                <a
                                    href="https://wa.me/212645483280?text=Bonjour%20Dr.%20Naim,%20je%20souhaite%20prendre%20un%20rendez-vous."
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png" alt="WhatsApp" className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
                                    <span>Prendre RDV sur WhatsApp</span>
                                </a>
                            </Button>
                            <p className="mt-6 text-black/50 text-sm font-medium">
                                Notre secrétariat traite les demandes pendant les heures d'ouverture.
                            </p>
                        </div>
                    </div>

                    {/* Right side: Steps */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative z-10">
                        <div className="bg-brand-primary/5 rounded-3xl p-8 md:p-10 border border-brand-primary/10 shadow-inner space-y-8">

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-bg border border-brand-primary/20 text-brand-primary font-black text-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-sans font-black tracking-tight text-xl text-black mb-2 pt-1 group-hover:text-brand-primary transition-colors">Cliquez</h4>
                                    <p className="text-black/60 leading-relaxed font-medium text-sm md:text-base">Sur le bouton WhatsApp de prise de rendez-vous sur cette page.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-bg border border-brand-primary/20 text-brand-primary font-black text-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-sans font-black tracking-tight text-xl text-black mb-2 pt-1 group-hover:text-brand-primary transition-colors">Envoyez</h4>
                                    <p className="text-black/60 leading-relaxed font-medium text-sm md:text-base">Le message pré-rempli qui s'affichera automatiquement dans l'application.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-bg border border-brand-primary/20 text-brand-primary font-black text-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-sans font-black tracking-tight text-xl text-black mb-2 pt-1 group-hover:text-brand-primary transition-colors">Confirmez</h4>
                                    <p className="text-black/60 leading-relaxed font-medium text-sm md:text-base">L'heure et la date exactes de votre consultation avec notre secrétariat.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
