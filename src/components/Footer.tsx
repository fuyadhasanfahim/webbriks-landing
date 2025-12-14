'use client';

import { motion } from 'framer-motion';
import { IconPhone } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import ReCaptchaWrapper from './ReCaptchaWrapper';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

export default function Footer() {
    const { formData, isSubmitting, handleInputChange, handleCheckboxChange, submitForm } = useContactForm();
    const [turnstileToken, setTurnstileToken] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitForm(turnstileToken || undefined);
        setTurnstileToken('');
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Dark gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(135deg, #1a1a1a 0%, #0a3d3a 50%, #009588 100%)',
                }}
            />

            {/* Optional: Add some texture/noise overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                }}
            />

            {/* Your content goes here */}
            <div className="relative z-10">
                <footer className="z-10 container mx-auto px-4 py-8 md:py-12 lg:py-16 relative">
                    <div className="w-full max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                        <div className="grid gap-10 grid-cols-1 lg:grid-cols-5 items-center">
                            <motion.div
                                className="space-y-4 lg:col-span-3"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={staggerContainer}
                            >
                                <motion.h2
                                    variants={fadeInUp}
                                    className="font-extrabold font-nunito text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight md:leading-tight lg:leading-[1.2] text-[#6CFFF1] max-w-2xl"
                                >
                                    The Only eCommerce Solution You'll Ever Need
                                </motion.h2>
                                <motion.p
                                    variants={fadeInUp}
                                    className="font-inter font-bold text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed md:leading-8 lg:leading-[1.4] text-white"
                                >
                                    Ecommerce marketing, Product Photos and reels
                                    Website design and development—done for you.
                                    Everything's under same umbrella
                                </motion.p>

                                <motion.figure variants={fadeInUp}>
                                    <Image
                                        src="/vector 2.svg"
                                        alt="vector"
                                        height={80}
                                        width={255}
                                    />
                                </motion.figure>

                                <motion.div
                                    variants={fadeInUp}
                                    className="flex items-center gap-4"
                                >
                                    <motion.div
                                        className="size-14 md:size-16 flex items-center justify-center bg-[#6CFFF1] ring-4 ring-yellow-100 rounded-full shadow-lg"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <IconPhone className="size-6 md:size-7 shrink-0" />
                                    </motion.div>
                                    <h3 className="font-extrabold font-nunito text-3xl md:text-4xl lg:text-5xl xl:text-[60px] text-[#6CFFF1] leading-tight drop-shadow-lg">
                                        Call us Now
                                    </h3>
                                </motion.div>
                                <motion.div
                                    variants={fadeInUp}
                                    className="space-y-2 text-white"
                                >
                                    <h3 className="font-extrabold font-nunito text-2xl md:text-3xl lg:text-4xl xl:text-[60px] leading-tight">
                                        +88 01767 201923
                                    </h3>
                                    <h3 className="font-extrabold font-nunito text-2xl md:text-3xl lg:text-4xl xl:text-[60px] leading-tight">
                                        +88 01977 201923
                                    </h3>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="relative w-full lg:col-span-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInRight}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Enhanced glow effect */}
                                <div className="hidden lg:block absolute size-180 bg-[#0ce4d1]/50 -top-1/5 -right-1/4 blur-[150px] rounded-full -z-10 animate-pulse" />

                                {/* iOS-style glassmorphism card */}
                                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/15 to-white/5 rounded-[25px] p-6 md:p-8 lg:p-10 space-y-6 border border-white/30 w-full mx-auto shadow-2xl hover:shadow-[0_0_40px_rgba(108,255,241,0.3)] transition-all duration-500">
                                    {/* Inner glow */}
                                    <div className="absolute inset-0 rounded-[25px] bg-gradient-to-br from-cyan-400/10 via-transparent to-teal-400/10 pointer-events-none" />

                                    <h3 className="relative font-nunito font-extrabold text-2xl md:text-[30px] leading-tight md:leading-[1.2] text-center text-white drop-shadow-lg">
                                        Be a Part of Us
                                    </h3>

                                    <motion.form
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid gap-4 font-inter">
                                            <motion.div
                                                variants={fadeInUp}
                                                className="grid gap-2"
                                            >
                                                <label
                                                    htmlFor="footer-name"
                                                    className="label"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    id="footer-name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Name"
                                                    className="input"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </motion.div>

                                            <motion.div
                                                variants={fadeInUp}
                                                className="grid gap-2"
                                            >
                                                <label
                                                    htmlFor="footer-email"
                                                    className="label"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    id="footer-email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    className="input"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </motion.div>

                                            <motion.div
                                                variants={fadeInUp}
                                                className="grid gap-2"
                                            >
                                                <label
                                                    htmlFor="footer-phone"
                                                    className="label"
                                                >
                                                    Phone
                                                </label>
                                                <input
                                                    id="footer-phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+123 456 789"
                                                    className="input"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </motion.div>

                                            <motion.div
                                                variants={fadeInUp}
                                                className="grid gap-3 w-full"
                                            >
                                                <label className="label">
                                                    Select Service
                                                </label>

                                                <div className="grid gap-3 grid-cols-1">
                                                    {['Product Photography', 'Product Video Creation', 'Digital Marketing', 'Web Design and Development'].map((service) => (
                                                        <div key={service} className="input flex items-center gap-3">
                                                            <input
                                                                type="checkbox"
                                                                id={`footer-${service.toLowerCase().replace(/ /g, '-')}`}
                                                                className="w-4 h-4 shrink-0"
                                                                checked={formData.services.includes(service)}
                                                                onChange={(e) => handleCheckboxChange(service, e.target.checked)}
                                                            />
                                                            <label
                                                                htmlFor={`footer-${service.toLowerCase().replace(/ /g, '-')}`}
                                                                className="text-sm md:text-base cursor-pointer"
                                                            >
                                                                {service}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                variants={fadeInUp}
                                                className="grid gap-2"
                                            >
                                                <label
                                                    htmlFor="footer-message"
                                                    className="label"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    id="footer-message"
                                                    name="message"
                                                    placeholder="Write your Message"
                                                    className="textarea min-h-24"
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                />
                                            </motion.div>

                                            <motion.div variants={fadeInUp}>
                                                <ReCaptchaWrapper onVerify={setTurnstileToken} />
                                            </motion.div>

                                            <motion.button
                                                variants={fadeInUp}
                                                type="submit"
                                                className="btn w-full"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Become Our Partner'}
                                            </motion.button>
                                        </div>
                                    </motion.form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </footer>

                <footer
                    className="w-full py-4 px-6"
                    style={{
                        backgroundColor: '#001C1A',
                    }}
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-white text-sm">
                        <p className="font-inter text-center md:text-left">
                            © Copyright 2025.{' '}
                            <span className="text-[#009588]">Wedekit LLC</span>.
                            All rights reserved
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="hover:text-[#009588] transition-colors"
                            >
                                Terms and Condition
                            </a>
                            <span>|</span>
                            <a
                                href="#"
                                className="hover:text-[#009588] transition-colors"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
