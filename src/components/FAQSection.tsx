'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'What makes your web design unique?',
            answer: "Our web design is unique because we blend modern aesthetics with strategic functionality. Every layout, interaction, and visual detail is crafted to enhance usability while reflecting the brand's identity. We don't just follow trends—we create designs that feel fresh yet timeless, ensuring the final design not only looks premium but also feels intuitive, engaging, and purpose-driven.",
        },
        {
            question: 'Do you offer mobile app development services?',
            answer: 'Yes, we offer comprehensive mobile app development services for both iOS and Android platforms. Our team specializes in creating native and cross-platform applications that deliver exceptional user experiences.',
        },
        {
            question: 'Which file formats do you allow?',
            answer: 'We accept a wide range of file formats including PNG, JPG, SVG, PDF, AI, PSD, Figma, and Sketch files. For video content, we support MP4, MOV, and AVI formats. If you have specific format requirements, please let us know.',
        },
        {
            question: 'I need fast service, can you do it?',
            answer: 'Absolutely! We offer expedited service options for clients with tight deadlines. Our team can work on rush projects while maintaining our high quality standards. Contact us to discuss your timeline requirements.',
        },
        {
            question: 'How many images can I submit for the trial?',
            answer: 'For our trial package, you can submit up to 10 images. This allows you to experience our quality and turnaround time before committing to a larger project. Additional images can be added to your order at any time.',
        },
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="z-10 container mx-auto px-4 py-8 md:py-12 lg:py-16 relative">
            <div className="w-full max-w-6xl mx-auto">
                <div className="min-h-screen py-12 px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            className="grid gap-2 mx-auto items-center justify-center mb-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-extrabold font-nunito text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight text-center">
                                Your Questions Answered!
                            </h2>
                            <figure className="hidden md:block mx-auto">
                                <Image
                                    src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1765727071/xwqyoruuj2r9bk7eihac.svg"
                                    alt="hero sign"
                                    width={408}
                                    height={53}
                                    className="w-full max-w-md"
                                />
                            </figure>
                        </motion.div>

                        <motion.div
                            className="space-y-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white/95 backdrop-blur-md border-2 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10"
                                    style={{
                                        borderColor:
                                            openIndex === index
                                                ? '#009588'
                                                : '#E5E7EB',
                                    }}
                                >
                                    <motion.button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
                                        style={{
                                            backgroundColor:
                                                openIndex === index
                                                    ? '#F0FDFA'
                                                    : 'white',
                                        }}
                                        whileHover={{
                                            backgroundColor: openIndex === index ? '#E0F9F6' : '#F9FAFB'
                                        }}
                                    >
                                        <span
                                            className="font-semibold text-base md:text-lg pr-4 transition-colors duration-300"
                                            style={{
                                                color:
                                                    openIndex === index
                                                        ? '#009588'
                                                        : '#1F2937',
                                            }}
                                        >
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                                            style={{
                                                backgroundColor:
                                                    openIndex === index
                                                        ? '#009588'
                                                        : '#F3F4F6',
                                                boxShadow: openIndex === index
                                                    ? '0 0 20px rgba(0, 149, 136, 0.3)'
                                                    : 'none'
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {openIndex === index ? (
                                                <IconMinus
                                                    size={20}
                                                    className="text-white"
                                                />
                                            ) : (
                                                <IconPlus
                                                    size={20}
                                                    style={{
                                                        color: '#009588',
                                                    }}
                                                />
                                            )}
                                        </motion.div>
                                    </motion.button>

                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 pt-2">
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
