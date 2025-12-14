'use client';

import { motion } from 'framer-motion';
import { IconCircleArrowRightFilled } from '@tabler/icons-react';
import Image from 'next/image';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
};

export default function HeroSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 items-start lg:items-center gap-8 md:gap-10 lg:gap-16">
            <motion.div
                className="space-y-4 md:space-y-6 lg:col-span-3"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h3
                    variants={fadeInUp}
                    className="w-fit bg-[#FFFFFF] px-4 md:px-6 py-2 font-inter font-semibold text-sm md:text-base lg:text-lg text-[#009588] border border-white rounded-full"
                >
                    We offer you a full Package
                </motion.h3>
                <motion.h1
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-nunito font-extrabold leading-tight md:leading-tight lg:leading-[1.2] text-white"
                >
                    All-in-One eCommerce, Built to Grow Your Brand
                </motion.h1>
                <motion.p
                    variants={fadeInUp}
                    className="font-inter font-bold text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed md:leading-8 lg:leading-[1.4] text-white"
                >
                    Ecommerce marketing, Product Photos and reels Website
                    design and development—done for you. Everything's under
                    same umbrella
                </motion.p>

                <motion.figure variants={fadeInUp} className="hidden md:block">
                    <Image
                        src="/vector.svg"
                        alt="hero sign"
                        width={486}
                        height={63}
                        className="w-full max-w-md"
                    />
                </motion.figure>
                <motion.button variants={fadeInUp} className="btn w-full md:w-auto">
                    I'm Interested to be a partner
                    <IconCircleArrowRightFilled size={20} />
                </motion.button>
            </motion.div>

            <motion.div
                className="relative w-full lg:col-span-2"
                initial="hidden"
                animate="visible"
                variants={slideInRight}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="hidden lg:block absolute size-180 bg-[#0ce4d1]/50 -top-1/5 -right-1/4 blur-[132px] rounded-full -z-10" />
                <div className="bg-[#009588]/30 backdrop-blur-xl rounded-[25px] p-6 md:p-8 lg:p-10 space-y-6 border border-white/20 w-full mx-auto">
                    <h3 className="font-nunito font-extrabold text-2xl md:text-[30px] leading-tight md:leading-[1.2] text-center text-white">
                        Be a Part of Us
                    </h3>

                    <motion.form
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="grid gap-4 font-inter">
                            <motion.div variants={fadeInUp} className="grid gap-2">
                                <label htmlFor="name" className="label">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    className="input"
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp} className="grid gap-2">
                                <label htmlFor="email" className="label">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="input"
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp} className="grid gap-2">
                                <label htmlFor="phone" className="label">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="+123 456 789"
                                    className="input"
                                />
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="grid gap-3 w-full"
                            >
                                <label className="label">Select Service</label>

                                <div className="grid gap-3 grid-cols-1">
                                    <div className="input flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="product-photography"
                                            className="w-4 h-4 shrink-0"
                                        />
                                        <label
                                            htmlFor="product-photography"
                                            className="text-sm md:text-base cursor-pointer"
                                        >
                                            Product Photography
                                        </label>
                                    </div>
                                    <div className="input flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="product-video"
                                            className="w-4 h-4 shrink-0"
                                        />
                                        <label
                                            htmlFor="product-video"
                                            className="text-sm md:text-base cursor-pointer"
                                        >
                                            Product Video Creation
                                        </label>
                                    </div>
                                    <div className="input flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="digital-marketing"
                                            className="w-4 h-4 shrink-0"
                                        />
                                        <label
                                            htmlFor="digital-marketing"
                                            className="text-sm md:text-base cursor-pointer"
                                        >
                                            Digital Marketing
                                        </label>
                                    </div>
                                    <div className="input flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="web-design"
                                            className="w-4 h-4 shrink-0"
                                        />
                                        <label
                                            htmlFor="web-design"
                                            className="text-sm md:text-base cursor-pointer"
                                        >
                                            Web Design and Development
                                        </label>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="grid gap-2">
                                <label htmlFor="message" className="label">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Write your Message"
                                    className="textarea min-h-24"
                                    rows={4}
                                />
                            </motion.div>

                            <motion.button
                                variants={fadeInUp}
                                type="submit"
                                className="btn w-full"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Become Our Partner
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </motion.div>
        </div>
    );
}
