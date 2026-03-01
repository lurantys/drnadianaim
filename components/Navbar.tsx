"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Stethoscope, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "#" },
        { name: "À propos", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Horaires", href: "#horaires" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-primary/20 py-3 shadow-lg"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-2">
                        <Stethoscope className="h-8 w-8 text-brand-primary" />
                        <div className="flex flex-col">
                            <span className="font-sans font-black tracking-tighter text-xl md:text-2xl font-semibold text-black leading-none">
                                Dr. Nadia Naim
                            </span>
                            <span className="text-xs text-black font-medium tracking-wide">
                                Spécialiste ORL
                            </span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-black/80 hover:text-brand-primary transition-colors hover:translate-y-[-1px]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Button
                            className="bg-brand-primary hover:bg-brand-primary/80 text-white font-semibold rounded-full px-6 shadow-md border-none"
                            asChild
                        >
                            <a
                                href="https://wa.me/212645483280?text=Bonjour%20Dr.%20Naim,%20je%20souhaite%20prendre%20un%20rendez-vous."
                                target="_blank"
                                rel="noreferrer"
                            >
                                Prendre RDV
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-brand-primary hover:text-brand-primary/80 p-2"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-brand-bg/95 backdrop-blur-xl border-b border-brand-primary/20 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-3 text-base font-medium text-black hover:bg-white/5 hover:text-neutral-400 rounded-md transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-3 pt-4">
                            <Button
                                className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white font-semibold rounded-full shadow-md border-none"
                                asChild
                            >
                                <a
                                    href="https://wa.me/212645483280?text=Bonjour%20Dr.%20Naim,%20je%20souhaite%20prendre%20un%20rendez-vous."
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Prendre RDV via WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
