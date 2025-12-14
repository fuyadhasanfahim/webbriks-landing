'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import ServicesSection from '@/components/ServicesSection';
import EcommerceSuiteSection from '@/components/EcommerceSuiteSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function LandingPage() {
    return (
        <main>
            {/* Hero Section with Background */}
            <section className="relative min-h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full -z-20">
                    <figure className="w-full h-full">
                        <Image
                            src="/hero.png"
                            alt="hero image"
                            width={1920}
                            height={800}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                </div>

                <div
                    className="absolute top-0 left-0 w-full h-full backdrop-blur-3xl -z-10"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(0, 47, 43, 1) 0%, rgba(0, 149, 136, 1) 100%)',
                        opacity: 0.9,
                    }}
                />

                <div className="absolute -bottom-20 -left-40 min-w-1200 w-full h-100 backdrop-blur-3xl z-0 -rotate-10 bg-white opacity-90" />

                <div className="relative z-10 container mx-auto px-4 py-6 md:py-8 lg:py-12">
                    <div className="w-full max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                        <Navbar />
                        <HeroSection />
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <ProductsSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Ecommerce Suite Section */}
            <EcommerceSuiteSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* Footer */}
            <Footer />
        </main>
    );
}
