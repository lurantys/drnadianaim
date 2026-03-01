import { MapPin, Phone, MessageCircle, CreditCard, AlertCircle } from "lucide-react";

export function Schedule() {
    const hours = [
        { day: "Lundi", am: "08:30 - 13:00", pm: "15:00 - 18:30" },
        { day: "Mardi", am: "08:30 - 13:00", pm: "15:00 - 18:30" },
        { day: "Mercredi", am: "08:30 - 13:00", pm: "15:00 - 18:30" },
        { day: "Jeudi", am: "08:30 - 13:00", pm: "15:00 - 17:00" },
        { day: "Vendredi", am: "08:30 - 13:00", pm: "15:00 - 18:30" },
        { day: "Samedi", am: "09:00 - 14:00", pm: "" },
        { day: "Dimanche", am: "Fermé", pm: "Fermé", isClosed: true },
    ];

    return (
        <section className="bg-brand-bg py-24" id="horaires">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-4">
                        Horaires
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-sans font-black tracking-tighter text-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-black/70">
                        Nous Sommes À Votre Écoute
                    </h3>
                </div>

                <div className="max-w-3xl mx-auto">

                    {/* Hours Table */}
                    <div className="space-y-6">
                        <div className="bg-brand-bg rounded-2xl p-6 md:p-8 shadow-lg border border-brand-primary/20">
                            <h4 className="font-sans font-black tracking-tight text-2xl font-bold text-black mb-6 border-b border-black/10 pb-4">
                                Heures d'Ouverture
                            </h4>
                            <div className="space-y-3">
                                {hours.map((schedule, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-center py-4 border-b border-brand-primary/10 last:border-0 group transition-all duration-300 ${schedule.isClosed ? 'text-rose-600 font-medium' : 'text-black/80 hover:text-black hover:translate-x-2'
                                            }`}
                                    >
                                        <span className="font-semibold text-lg">{schedule.day}</span>
                                        <div className="text-right text-sm sm:text-base bg-brand-primary/5 px-4 py-1 rounded-full group-hover:bg-brand-primary/10 transition-colors">
                                            {schedule.isClosed ? (
                                                <span>{schedule.am}</span>
                                            ) : (
                                                <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
                                                    <span className="font-medium text-black/90">{schedule.am}</span>
                                                    {schedule.pm && (
                                                        <>
                                                            <span className="hidden sm:inline text-brand-primary/30 mx-1">|</span>
                                                            <span className="font-medium text-black/90">{schedule.pm}</span>
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
