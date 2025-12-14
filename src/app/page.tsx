'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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
                {/* Background image */}
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

                {/* Enhanced gradient overlay with subtle animation */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full backdrop-blur-3xl -z-10"
                    style={{
                        background:
                            'radial-gradient(circle at 30% 50%, rgba(0, 149, 136, 0.92) 0%, rgba(0, 47, 43, 0.95) 100%)',
                    }}
                    animate={{
                        background: [
                            'radial-gradient(circle at 30% 50%, rgba(0, 149, 136, 0.92) 0%, rgba(0, 47, 43, 0.95) 100%)',
                            'radial-gradient(circle at 70% 50%, rgba(0, 149, 136, 0.92) 0%, rgba(0, 47, 43, 0.95) 100%)',
                            'radial-gradient(circle at 30% 50%, rgba(0, 149, 136, 0.92) 0%, rgba(0, 47, 43, 0.95) 100%)',
                        ],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Decorative white wave - positioned higher and pure white */}
                <div className="absolute bottom-6 -left-30 w-1000 h-160 bg-white shadow-2xl -rotate-[20deg]" />

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
