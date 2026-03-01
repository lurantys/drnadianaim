import { MapPin } from "lucide-react";

export function Location() {
    return (
        <section className="bg-brand-bg py-24 border-t border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-brand-bg rounded-3xl p-6 md:p-10 border border-brand-primary/20 shadow-xl">

                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-black/10 rounded-xl">
                                    <MapPin className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="font-sans font-black tracking-tighter text-3xl text-black">Localisation</h3>
                            </div>
                            <p className="text-black/70 text-lg">
                                Notre cabinet est situé en plein cœur du quartier médical, facilement accessible en voiture ou en transports en commun.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-black/10">
                            <a
                                href="https://maps.google.com/?q=33.2324639,-8.5226866"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-black hover:text-black font-bold transition-colors group"
                            >
                                Ouvrir dans Google Maps
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 h-[400px] w-full rounded-2xl overflow-hidden shadow-inner border border-black/10 relative">
                        <iframe
                            src="https://maps.google.com/maps?q=33.2324639,-8.5226866&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location"
                            className="absolute inset-0 grayscale-[20%] contrast-[95%] mix-blend-multiply opacity-90"
                        />
                        <div className="absolute inset-0 bg-brand-primary/5 mix-blend-multiply pointer-events-none rounded-2xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
