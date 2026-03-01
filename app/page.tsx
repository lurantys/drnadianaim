import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Appointment } from "../components/Appointment";
import { Schedule } from "../components/Schedule";
import { Location } from "../components/Location";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-brand-bg">
            <Navbar />
            <Hero />
            <About />
            <Appointment />
            <Schedule />
            <Location />
            <Footer />
        </main>
    );
}
