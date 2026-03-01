import { CheckCircle2, Award, GraduationCap } from "lucide-react";

export function About() {
    const diplomas = [
        "Lauréate de la Faculté de Médecine et de Pharmacie de Casablanca",
        "Diplômée en Thérapeutique Homéopathique (CEDH Maroc)",
    ];

    return (
        <section className="bg-brand-bg py-24" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text & Approach */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-black uppercase tracking-widest">
                                À Propos Du Dr. Nadia Naim
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-sans font-black tracking-tighter text-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-black/70 pb-2">
                                L'Excellence Médicale au Service de Votre Santé
                            </h3>
                        </div>

                        <div className="space-y-6 text-black/80 text-lg leading-relaxed">
                            <p>
                                Avec une approche alliant rigueur scientifique et écoute bienveillante,
                                le Cabinet ORL du Dr. Nadia Naim s'engage à vous offrir des soins de la
                                plus haute qualité. Chaque patient bénéficie d'une attention personnalisée
                                dans un environnement conçu pour son confort et sa sérénité.
                            </p>
                            <p>
                                Spécialisée dans le dépistage, le diagnostic et le traitement médical ou
                                chirurgical des affections touchant les oreilles, le nez, la gorge et le
                                cou, pour les enfants comme pour les adultes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                                <span className="font-medium text-black">Diagnostic Précis</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                                <span className="font-medium text-black">Soins Personnalisés</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                                <span className="font-medium text-black">Matériel de Pointe</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                                <span className="font-medium text-black">Suivi Rigoureux</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Diplomas Card */}
                    <div className="relative">
                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-black/5 rounded-3xl -z-10 translate-x-4 translate-y-4" />

                        <div className="bg-brand-bg text-black rounded-3xl p-8 md:p-10 shadow-2xl shadow-brand-primary/10 border border-brand-primary/20 hover:border-brand-primary/40 transition-colors duration-500 relative bg-opacity-95 backdrop-blur-sm z-10">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-black/10">
                                <div className="p-3 bg-brand-primary/10 rounded-xl">
                                    <GraduationCap className="w-8 h-8 text-brand-primary" />
                                </div>
                                <div>
                                    <h4 className="font-sans font-black tracking-tight text-2xl font-bold">Diplômes & Formations</h4>
                                    <p className="text-black text-sm font-medium mt-1">Parcours Universitaire</p>
                                </div>
                            </div>

                            <ul className="space-y-6">
                                {diplomas.map((diploma, index) => (
                                    <li key={index} className="flex items-start gap-4 group">
                                        <div className="mt-1">
                                            <Award className="w-5 h-5 text-brand-primary/70 group-hover:text-brand-primary transition-colors" />
                                        </div>
                                        <span className="text-black/90 leading-snug group-hover:text-black transition-colors">
                                            {diploma}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 pt-6 border-t border-black/10">
                                <p className="text-sm text-black/50 italic text-center">
                                    Inscrite à l'Ordre National des Médecins
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
