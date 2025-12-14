'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

export default function ProductsSection() {
    return (
        <section className="z-10 container mx-auto px-4 py-8 md:py-12 lg:py-16 bg-white">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
                    <motion.figure
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInLeft}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src={'/video.png'}
                            alt="video"
                            height={413}
                            width={561}
                            className="rounded-[15px] border border-gray-200 w-full h-auto"
                        />
                    </motion.figure>
                    <motion.div
                        className="space-y-4 lg:space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInRight}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="font-extrabold font-nunito text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight md:leading-tight lg:leading-[1.2]">
                            <h2>
                                Your{' '}
                                <span className="bg-[#6CFFF1] p-1 rounded-[5px]">
                                    Products.
                                </span>
                            </h2>
                            <h2>Your Store.</h2>
                            <h2>Your Growth—</h2>
                            <h2 className="text-[#009588]">
                                We Handle the Rest
                            </h2>
                        </div>
                        <p className="font-inter font-bold text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed md:leading-8 lg:leading-[1.4] text-[#000000]">
                            A full eCommerce solutions for business success. we
                            are providing to boost your sells with brand value.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
