import EndlessScroll from '../components/EndlessScroll';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import PhilosophySection from '../components/sections/PhilosophySection';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
    return (
        <>
            {/* Hero Section - Scrollytelling */}
            <EndlessScroll />

            {/* Below the Hero */}
            <ServicesSection />
            <ProcessSection />
            <PhilosophySection />
            <CTASection />
        </>
    );
}
