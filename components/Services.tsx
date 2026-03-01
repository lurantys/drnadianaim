import { Stethoscope, Activity, Ear, MessageCircle, ArrowRight } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Consultation ORL générale",
            description: "Bilan complet de la sphère ORL, diagnostic et traitement des affections courantes du nez, de la gorge et des oreilles.",
            icon: <Stethoscope className="w-8 h-8 text-black group-hover:text-black transition-colors" />,
        },
        {
            title: "Audiométrie",
            description: "Exploration approfondie de l'audition, tests auditifs complets (audiométrie tonale et vocale) pour adultes et enfants.",
            icon: <Activity className="w-8 h-8 text-black group-hover:text-black transition-colors" />,
        },
        {
            title: "Fibroscopie nasale",
            description: "Examen endoscopique détaillé des fosses nasales, du pharynx et du larynx avec un matériel de pointe.",
            icon: <Stethoscope className="w-8 h-8 text-black group-hover:text-black transition-colors" />,
        },
        {
            title: "Troubles de la voix",
            description: "Diagnostic et prise en charge des dysphonies, évaluation des cordes vocales et conseils de rééducation.",
            icon: <MessageCircle className="w-8 h-8 text-black group-hover:text-black transition-colors" />,
        },
        {
            title: "Vertiges & Acouphènes",
            description: "Bilan vestibulaire, exploration des troubles de l'équilibre et des bourdonnements d'oreilles avec suivi adapté.",
            icon: <Activity className="w-8 h-8 text-black group-hover:text-black transition-colors" />,
        },
        {
            title: "ORL pédiatrique",
            description: "Prise en charge spécialisée des nourrissons et enfants (otites à répétition, végétations, amygdales, audition).",
            icon: <Ear className="w-8 h-8 text-black group-hover:text-black transition-colors" />,
        },
    ];

    return (
        <section className="bg-white py-24" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full" />
                    <p className="text-black/70 text-lg">
                        Le cabinet offre une gamme complète de diagnostics et de traitements
                        pour toutes les pathologies liées à la sphère oto-rhino-laryngologique.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 border border-black/5 hover:border-black/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Teal Bottom Hover Line */}
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-transparent rounded-b-2xl transition-all duration-300 group-hover:h-1 group-hover:bg-neutral-300" />

                            <div className="w-16 h-16 rounded-xl bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center mb-6 transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h4 className="font-sans font-black tracking-tight text-2xl font-bold text-black mb-4 group-hover:text-black transition-colors">
                                {service.title}
                            </h4>

                            <p className="text-black/70 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex items-center text-neutral-400 font-medium text-sm gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                En savoir plus <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
