'use client';

import { motion } from 'framer-motion';
import {
    IconCamera,
    IconCircleArrowRightFilled,
    IconGardenCart,
    IconSpeakerphone,
} from '@tabler/icons-react';
import Image from 'next/image';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const ServiceCard = ({
    icon: Icon,
    title,
    items,
    image
}: {
    icon: React.ElementType;
    title: string;
    items: string[];
    image: string
}) => {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden w-full h-auto rounded-[20px] group"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Gradient overlay on top of image */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(0, 149, 136, 0.95) 0%, rgba(0, 47, 43, 0.95) 100%)',
                }}
            />

            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 z-20 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-30 space-y-6 p-6 md:p-8">
                {/* Icon container with glass effect */}
                <div className="flex items-center justify-center p-3 rounded-xl bg-white/15 backdrop-blur-md size-20 ml-auto border border-white/20 shadow-lg group-hover:shadow-[0_0_30px_rgba(108,255,241,0.4)] transition-all duration-500">
                    <Icon size={40} className="text-white drop-shadow-lg" />
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl md:text-[30px] leading-tight font-semibold font-nunito text-white">
                        {title}
                    </h3>

                    <figure>
                        <Image
                            src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1765727070/qimccruzshkklv4qlfut.svg"
                            alt="vector 2"
                            height={8}
                            width={264}
                        />
                    </figure>

                    <ul className="space-y-2 list-disc list-inside text-sm md:text-base leading-relaxed md:leading-8 font-inter text-white">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <motion.button
                        className="btn w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        I'm Interested <IconCircleArrowRightFilled size={20} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default function ServicesSection() {
    const services = [
        {
            icon: IconSpeakerphone,
            title: 'Digital Marketing',
            items: [
                'Facebook Ad Campaign Run & Optimization',
                'Facebook Ad Campaign Management',
                'Pixel & GTM Setup',
                'Browser Side Tracking',
                'Server Side Tracking',
            ],
            image: "https://res.cloudinary.com/dny7zfbg9/image/upload/v1765727138/t0wlww2uj8nvpbilucpm.png"
        },
        {
            icon: IconCamera,
            title: 'Photography & Video Creatives',
            items: [
                'Product Photoshoot ( with/without model)',
                'Voice Over Reels',
                'Model Reels',
                'Motion Video Ads',
            ],
            image: "https://res.cloudinary.com/dny7zfbg9/image/upload/v1765727138/pwtfdt0iq9gbfclhznhw.png"
        },
        {
            icon: IconGardenCart,
            title: 'Custom eCommerce Website',
            items: [
                'Fully Raw Coding with React.js',
                'Custom Admin Panel',
                'Fully SEO Friendly',
                'Super Fast Loading',
            ],
            image: "https://res.cloudinary.com/dny7zfbg9/image/upload/v1765727138/m7lm2wgq3xhrhj2jpyil.png"
        },
    ];

    return (
        <section className="z-10 container mx-auto px-4 py-8 md:py-12 lg:py-16 bg-white">
            <div className="w-full max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                <motion.div
                    className="space-y-4 lg:space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid gap-2 mx-auto items-center justify-center">
                        <h2 className="font-extrabold font-nunito text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight text-center">
                            What we offer
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
                    </div>
                    <p className="font-inter font-bold text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed md:leading-8 lg:leading-[1.4] text-[#000000] text-center max-w-3xl mx-auto">
                        Everything You Need to Sell Online: Product
                        Photography, eCommerce Website & Targeted Digital
                        Marketing
                    </p>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
