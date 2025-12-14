'use client';

import { motion } from 'framer-motion';
import { IconCircleArrowRightFilled } from '@tabler/icons-react';
import Image from 'next/image';

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

export default function EcommerceSuiteSection() {
    return (
        <section className="z-10 container mx-auto px-4 py-8 md:py-12 lg:py-16 relative">
            {/* Radial gradient background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        'radial-gradient(circle at center, #FFFFFF 0%, #21DBCB 100%)',
                }}
            />

            <div className="w-full max-w-6xl mx-auto">
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 items-center">
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInLeft}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-extrabold font-nunito text-3xl md:text-4xl lg:text-5xl xl:text-[55px] leading-tight md:leading-tight lg:leading-[1.2] items-start">
                            Turn Your Products Into a Brand With Our Complete
                            eCommerce Suite
                        </h2>

                        <figure className="w-fit">
                            <Image
                                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1765727071/xwqyoruuj2r9bk7eihac.svg"
                                alt="hero sign"
                                width={408}
                                height={53}
                                className="w-full max-w-md"
                            />
                        </figure>

                        <p className="font-inter font-bold text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed md:leading-8 lg:leading-[1.4] text-[#000000] max-w-3xl mx-auto">
                            Your Full eCommerce Growth Partner: Visual Content,
                            Custom Store Design & Digital Marketing
                        </p>

                        <motion.button
                            className="btn mx-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            I'm Interested to be a partner
                            <IconCircleArrowRightFilled size={20} />
                        </motion.button>
                    </motion.div>

                    <motion.figure
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInRight}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="drop-shadow-2xl"
                    >
                        <Image
                            src={'https://res.cloudinary.com/dny7zfbg9/image/upload/v1765727071/v5vlobu79jp2024vtchv.png'}
                            alt="step to down"
                            width={469}
                            height={701}
                            className="w-full h-auto"
                        />
                    </motion.figure>
                </div>
            </div>
        </section>
    );
}
