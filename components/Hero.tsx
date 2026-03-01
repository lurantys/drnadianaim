"use client";

import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { Star, Award, Users, Stethoscope } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen bg-brand-bg text-black overflow-hidden pt-24" id="home">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 relative z-10 min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Side: Typography & CTAs */}
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-8 relative z-30 pt-10 lg:pt-0">
                    <Badge variant="outline" className="border-brand-primary text-brand-primary bg-brand-primary/10 tracking-widest uppercase py-1 px-3 shadow-none">
                        Cabinet Médical Spécialisé
                    </Badge>

                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-sans tracking-tighter leading-none text-black pb-2 relative z-30 drop-shadow-sm">
                            Dr. Nadia Naim
                        </h1>
                        <h2 className="text-xl md:text-2xl text-black/90 font-semibold tracking-wide bg-brand-bg/50 backdrop-blur-md rounded-lg md:bg-transparent md:backdrop-blur-none inline-block px-3 py-1 md:p-0">
                            Spécialiste en Oto-Rhino-Laryngologie
                        </h2>
                        <p className="text-black/70 max-w-lg text-lg mx-auto md:mx-0 leading-relaxed bg-brand-bg/50 backdrop-blur-md rounded-xl md:bg-transparent md:backdrop-blur-none p-3 md:p-0">
                            Une approche médicale rigoureuse, humaine et personnalisée pour votre santé auditive, nasale et vocale.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full md:w-auto relative z-30">
                        <Button size="lg" className="bg-brand-primary hover:bg-[#b058c9] text-white border-none font-bold rounded-full px-8 py-6 text-lg shadow-[0_8px_30px_rgb(207,116,237,0.3)] hover:shadow-[0_12px_40px_rgb(207,116,237,0.5)] hover:-translate-y-1 transition-all duration-300" asChild>
                            <a href="https://wa.me/212645483280?text=Bonjour%20Dr.%20Naim,%20je%20souhaite%20prendre%20un%20rendez-vous." target="_blank" rel="noreferrer" className="flex items-center gap-3">
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png" alt="WhatsApp" className="w-5 h-5" />
                                Prendre RDV (WhatsApp)
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="border-brand-primary/50 bg-transparent backdrop-blur-sm text-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary rounded-full font-bold px-8 py-6 text-lg transition-all duration-300" asChild>
                            <a href="#about">
                                En Savoir Plus
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Right Side: Elegant Rounded Profile Picture */}
                <div className="w-full md:w-1/2 flex justify-center relative z-20 mt-10 md:mt-0">
                    <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
                        {/* Purple Glow Effect */}
                        <div className="absolute inset-0 bg-brand-primary/30 rounded-full blur-[80px]" />

                        {/* Circular container */}
                        <div className="relative w-full h-full rounded-full border-8 border-white bg-white/50 shadow-2xl overflow-hidden backdrop-blur-sm">
                            <Image
                                src="/naimnadia.png"
                                alt="Dr. Nadia Naim"
                                fill
                                className="object-cover object-top"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Frame Motion Scroll Animation Section */}
            <div className="bg-brand-bg mt-10" id="experience">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight font-bold text-black mb-4">
                                Découvrez Notre Cabinet
                            </h2>
                            <p className="text-black/70 max-w-2xl mx-auto mb-10 text-lg">
                                Des équipements de pointe dans un cadre apaisant
                            </p>
                        </>
                    }
                >
                    {/* Clinic Interior Image */}
                    <div className="relative w-full h-full">
                        <Image
                            src="/herocabinet.png"
                            alt="Intérieur du Cabinet"
                            fill
                            className="object-cover rounded-2xl object-center"
                            draggable={false}
                            priority
                            unoptimized
                        />
                    </div>
                </ContainerScroll>
            </div>
        </section>
    );
}
