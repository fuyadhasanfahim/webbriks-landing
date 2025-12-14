'use client';

import {
    IconCamera,
    IconCircleArrowRightFilled,
    IconGardenCart,
    IconMinus,
    IconPhone,
    IconPhoneFilled,
    IconPlus,
    IconSpeakerphone,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';

export default function LandingPage() {
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
        <section>
            <div className="relative min-h-screen overflow-hidden">
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

                <div className="relative z-10 container mx-auto px-4 py-6 md:p-8 lg:p-12">
                    <div className="w-full max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                        <nav>
                            <figure>
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    height={39}
                                    width={126}
                                    className="w-auto h-8 md:h-10"
                                />
                            </figure>
                        </nav>

                        <div className="grid grid-cols-1 lg:grid-cols-5 items-start lg:items-center gap-8 md:gap-10 lg:gap-16">
                            <div className="space-y-4 md:space-y-6 lg:col-span-3">
                                <h3 className="w-fit bg-[#FFFFFF] px-4 md:px-6 py-2 font-inter font-semibold text-sm md:text-base lg:text-lg text-[#009588] border border-white rounded-full">
                                    We offer you a full Package
                                </h3>
                                <h1 className="text-3xl md:text-4xl lg:text-[55px] font-nunito font-extrabold leading-tight md:leading-tight lg:leading-16.25 text-white">
                                    All-in-One eCommerce, Built to Grow Your
                                    Brand
                                </h1>
                                <p className="font-inter font-bold text-base md:text-lg lg:text-[24px] leading-relaxed md:leading-8 lg:leading-8.5 text-white">
                                    Ecommerce marketing, Product Photos and
                                    reels Website design and development—done
                                    for you. Everything's under same umbrella
                                </p>

                                <figure className="hidden md:block">
                                    <Image
                                        src="/vector.svg"
                                        alt="hero sign"
                                        width={486}
                                        height={63}
                                        className="w-full max-w-md"
                                    />
                                </figure>
                                <button className="btn w-full md:w-auto">
                                    I'm Interested to be a partner
                                    <IconCircleArrowRightFilled size={20} />
                                </button>
                            </div>

                            <div className="relative w-full lg:col-span-2">
                                <div className="hidden lg:block absolute size-180 bg-[#0ce4d1]/50 -top-1/5 -right-1/4 blur-[132px] rounded-full -z-10" />
                                <div className="bg-[#009588]/30 backdrop-blur-xl rounded-[25px] p-6 md:p-8 lg:p-10 space-y-6 border border-white/20 w-full mx-auto">
                                    <h3 className="font-nunito font-extrabold text-2xl md:text-[30px] leading-tight md:leading-7.5 text-center text-white">
                                        Be a Part of Us
                                    </h3>

                                    <form>
                                        <div className="grid gap-4 font-inter">
                                            <div className="grid gap-2">
                                                <label
                                                    htmlFor="name"
                                                    className="label"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Name"
                                                    className="input"
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <label
                                                    htmlFor="email"
                                                    className="label"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    className="input"
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <label
                                                    htmlFor="phone"
                                                    className="label"
                                                >
                                                    Phone
                                                </label>
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+123 456 789"
                                                    className="input"
                                                />
                                            </div>

                                            <div className="grid gap-3 w-full">
                                                <label className="label">
                                                    Select Service
                                                </label>

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
                                                            Product Video
                                                            Creation
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
                                                            Web Design and
                                                            Development
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid gap-2">
                                                <label
                                                    htmlFor="message"
                                                    className="label"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    placeholder="Write your Message"
                                                    className="textarea min-h-24"
                                                    rows={4}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn w-full"
                                            >
                                                Become Our Partner
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-10 container mx-auto px-4 py-6 md:p-8 lg:p-12 bg-white">
                <div className="w-full max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                    <div className="grid items-center grid-cols-2 gap-10 lg:gap-16">
                        <figure>
                            <Image
                                src={'/video.png'}
                                alt="video"
                                height={413}
                                width={561}
                                className="rounded-[15px] border border-gray-200"
                            />
                        </figure>
                        <div className="space-y-4 lg:space-y-6">
                            <div className="font-extrabold font-nunito text-[60px] leading-16.25">
                                <h3>
                                    Your{' '}
                                    <span className="bg-[#6CFFF1] p-1 rounded-[5px]">
                                        Products.
                                    </span>
                                </h3>
                                <h3>Your Store.</h3>
                                <h3>Your Growth—</h3>
                                <h3 className="text-[#009588]">
                                    We Handle the Rest
                                </h3>
                            </div>
                            <p className="font-inter font-bold text-base md:text-lg lg:text-[24px] leading-relaxed md:leading-8 lg:leading-8.5 text-[#000000]">
                                A full eCommerce solutions for business success.
                                we are providing to boost your sells with brand
                                value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-10 container mx-auto px-4 py-6 md:p-8 lg:p-12 bg-white">
                <div className="w-full max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                    <div className="space-y-4 lg:space-y-6">
                        <div className="grid gap-2 mx-auto items-center justify-center">
                            <h2 className="font-extrabold font-nunito text-[60px] leading-16.25">
                                What we offer
                            </h2>
                            <figure className="hidden md:block">
                                <Image
                                    src="/vector.svg"
                                    alt="hero sign"
                                    width={408}
                                    height={53}
                                    className="w-full max-w-md"
                                />
                            </figure>
                        </div>
                        <p className="font-inter font-bold text-base md:text-lg lg:text-[24px] leading-relaxed md:leading-8 lg:leading-8.5 text-[#000000] text-center max-w-3xl mx-auto">
                            Everything You Need to Sell Online: Product
                            Photography, eCommerce Website & Targeted Digital
                            Marketing
                        </p>

                        <div>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="relative overflow-hidden w-full h-auto rounded-[15px]">
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0">
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

                                    {/* Overlay with blur and gradient */}
                                    <div
                                        className="absolute inset-0 backdrop-blur-3xl z-10"
                                        style={{
                                            background:
                                                'radial-gradient(circle, rgba(0, 47, 43, 1) 0%, rgba(0, 149, 136, 1) 100%)',
                                            opacity: 0.9,
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-20 space-y-6 p-6 text-white">
                                        <div className="flex items-center justify-center p-2 rounded-md bg-white/10 size-19.5 ml-auto">
                                            <IconSpeakerphone
                                                size={40}
                                                className="text-white"
                                            />
                                        </div>

                                        <div className="space-y-6">
                                            <h4 className="text-[30px] leading-4.5 font-semibold font-nunito">
                                                Digital Marketing
                                            </h4>

                                            <figure>
                                                <Image
                                                    src="/vector 1.svg"
                                                    alt="vector 2"
                                                    height={8}
                                                    width={264}
                                                />
                                            </figure>

                                            <ul className="space-y-2 list-disc list-inside text-base leading-8 font-inter">
                                                <li>
                                                    Facebook Ad Campaign Run &
                                                    Optimization
                                                </li>
                                                <li>
                                                    Facebook Ad Campaign
                                                    Management
                                                </li>
                                                <li>Pixel & GTM Setup</li>
                                                <li>Browser Side Tracking</li>
                                                <li>Server Side Tracking</li>
                                            </ul>

                                            <button className="btn w-full">
                                                I’m Interested{' '}
                                                <IconCircleArrowRightFilled
                                                    size={20}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden w-full h-auto rounded-[15px]">
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0">
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

                                    {/* Overlay with blur and gradient */}
                                    <div
                                        className="absolute inset-0 backdrop-blur-3xl z-10"
                                        style={{
                                            background:
                                                'radial-gradient(circle, rgba(0, 47, 43, 1) 0%, rgba(0, 149, 136, 1) 100%)',
                                            opacity: 0.9,
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-20 space-y-6 p-6 text-white">
                                        <div className="flex items-center justify-center p-2 rounded-md bg-white/10 size-19.5 ml-auto">
                                            <IconCamera
                                                size={40}
                                                className="text-white"
                                            />
                                        </div>

                                        <div className="space-y-6">
                                            <h4 className="text-[30px] leading-10 font-semibold font-nunito">
                                                Photography & Video Creatives
                                            </h4>

                                            <figure>
                                                <Image
                                                    src="/vector 1.svg"
                                                    alt="vector 2"
                                                    height={8}
                                                    width={264}
                                                />
                                            </figure>

                                            <ul className="space-y-2 list-disc list-inside text-base leading-8 font-inter">
                                                <li>
                                                    Product Photoshoot (
                                                    with/without model)
                                                </li>
                                                <li>Voice Over Reels</li>
                                                <li>Model Reels</li>
                                                <li>Motion Video Ads</li>
                                            </ul>

                                            <button className="btn w-full">
                                                I’m Interested{' '}
                                                <IconCircleArrowRightFilled
                                                    size={20}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden w-full h-auto rounded-[15px]">
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0">
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

                                    {/* Overlay with blur and gradient */}
                                    <div
                                        className="absolute inset-0 backdrop-blur-3xl z-10"
                                        style={{
                                            background:
                                                'radial-gradient(circle, rgba(0, 47, 43, 1) 0%, rgba(0, 149, 136, 1) 100%)',
                                            opacity: 0.9,
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-20 space-y-6 p-6 text-white">
                                        <div className="flex items-center justify-center p-2 rounded-md bg-white/10 size-19.5 ml-auto">
                                            <IconGardenCart
                                                size={40}
                                                className="text-white"
                                            />
                                        </div>

                                        <div className="space-y-6">
                                            <h4 className="text-[30px] leading-10 font-semibold font-nunito">
                                                Custom eCommerce Website
                                            </h4>

                                            <figure>
                                                <Image
                                                    src="/vector 1.svg"
                                                    alt="vector 2"
                                                    height={8}
                                                    width={264}
                                                />
                                            </figure>

                                            <ul className="space-y-2 list-disc list-inside text-base leading-8 font-inter">
                                                <li>
                                                    Fully Raw Coding with
                                                    React.js
                                                </li>
                                                <li>Custom Admin Panel</li>
                                                <li>Fully SEO Friendly</li>
                                                <li>Super Fast Loading</li>
                                            </ul>

                                            <button className="btn w-full">
                                                I’m Interested{' '}
                                                <IconCircleArrowRightFilled
                                                    size={20}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-10 container mx-auto px-4 py-6 md:p-8 lg:p-12 relative">
                {/* Radial gradient background */}
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        background:
                            'radial-gradient(circle at center, #FFFFFF 0%, #21DBCB 100%)',
                    }}
                />

                <div className="w-full max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                    <div className="space-y-4 lg:space-y-6">
                        <div className="grid gap-10 grid-cols-2 items-center">
                            <div className="space-y-6">
                                <h2 className="font-extrabold font-nunito text-[55px] leading-17.5 items-start">
                                    Turn Your Products Into a Brand With Our
                                    Complete eCommerce Suite
                                </h2>

                                <figure className="mx-auto w-fit">
                                    <Image
                                        src="/vector.svg"
                                        alt="hero sign"
                                        width={408}
                                        height={53}
                                        className="w-full max-w-md"
                                    />
                                </figure>

                                <p className="font-inter font-bold text-base md:text-lg lg:text-[24px] leading-relaxed md:leading-8 lg:leading-8.5 text-[#000000] max-w-3xl mx-auto">
                                    Your Full eCommerce Growth Partner: Visual
                                    Content, Custom Store Design & Digital
                                    Marketing
                                </p>

                                <button className="btn mx-auto">
                                    I'm Interested to be a partner
                                    <IconCircleArrowRightFilled size={20} />
                                </button>
                            </div>

                            <figure>
                                <Image
                                    src={'/steptodown 1.png'}
                                    alt="step tp down"
                                    width={469}
                                    height={701}
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-10 container mx-auto px-4 py-6 md:p-8 lg:p-12 relative">
                <div className="w-full max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                    <div className="min-h-screen py-12 px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="grid gap-2 mx-auto items-center justify-center">
                                <h2 className="font-extrabold font-nunito text-[60px] leading-16.25">
                                    Your Questions Answered!
                                </h2>
                                <figure className="hidden md:block">
                                    <Image
                                        src="/vector.svg"
                                        alt="hero sign"
                                        width={408}
                                        height={53}
                                        className="w-full max-w-md mx-auto"
                                    />
                                </figure>
                            </div>

                            <div className="space-y-3">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                                        style={{
                                            borderColor:
                                                openIndex === index
                                                    ? '#009588'
                                                    : '#E5E7EB',
                                        }}
                                    >
                                        <button
                                            onClick={() =>
                                                toggleAccordion(index)
                                            }
                                            className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200"
                                            style={{
                                                backgroundColor:
                                                    openIndex === index
                                                        ? '#F0FDFA'
                                                        : 'white',
                                            }}
                                        >
                                            <span
                                                className="font-semibold text-base md:text-lg pr-4"
                                                style={{
                                                    color:
                                                        openIndex === index
                                                            ? '#009588'
                                                            : '#1F2937',
                                                }}
                                            >
                                                {faq.question}
                                            </span>
                                            <div
                                                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                                                style={{
                                                    backgroundColor:
                                                        openIndex === index
                                                            ? '#009588'
                                                            : '#F3F4F6',
                                                }}
                                            >
                                                {openIndex === index ? (
                                                    <IconMinus
                                                        size={18}
                                                        className="text-white"
                                                    />
                                                ) : (
                                                    <IconPlus
                                                        size={18}
                                                        style={{
                                                            color: '#009588',
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </button>

                                        <div
                                            className="overflow-hidden transition-all duration-300 ease-in-out"
                                            style={{
                                                maxHeight:
                                                    openIndex === index
                                                        ? '500px'
                                                        : '0',
                                            }}
                                        >
                                            <div className="px-6 pb-6 pt-2">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                    <footer className="z-10 container mx-auto px-4 py-6 md:p-8 lg:p-12 relative">
                        <div className="w-full max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                            <div className="grid gap-10 grid-cols-5 items-center">
                                <div className="space-y-4 col-span-3">
                                    <h2 className="font-extrabold font-nunito text-[60px] leading-16.25 text-[#6CFFF1] max-w-2xl">
                                        The Only eCommerce Solution You’ll Ever
                                        Need
                                    </h2>
                                    <p className="font-inter font-bold text-base md:text-lg lg:text-[24px] leading-relaxed md:leading-8 lg:leading-8.5 text-white">
                                        Ecommerce marketing, Product Photos and
                                        reels Website design and
                                        development—done for you. Everything's
                                        under same umbrella
                                    </p>

                                    <figure>
                                        <Image
                                            src="/vector 2.svg"
                                            alt="vector"
                                            height={80}
                                            width={255}
                                        />
                                    </figure>

                                    <div className="flex items-center gap-4">
                                        <div className="size-14.25 flex items-center justify-center bg-[#6CFFF1] ring-4 ring-yellow-100 rounded-full">
                                            <IconPhone className="size-6 shrink-0" />
                                        </div>
                                        <h3 className="font-extrabold font-nunito text-[60px] text-[#6CFFF1] leading-16.25">
                                            Call us Now
                                        </h3>
                                    </div>
                                    <div className="space-y-2 text-white">
                                        <h3 className="font-extrabold font-nunito text-[60px] leading-16.25">
                                            +88 01767 201923
                                        </h3>
                                        <h3 className="font-extrabold font-nunito text-[60px] leading-16.25">
                                            +88 01977 201923
                                        </h3>
                                    </div>
                                </div>

                                <div className="relative w-full lg:col-span-2">
                                    <div className="hidden lg:block absolute size-180 bg-[#0ce4d1]/50 -top-1/5 -right-1/4 blur-[132px] rounded-full -z-10" />
                                    <div className="bg-[#009588]/30 backdrop-blur-xl rounded-[25px] p-6 md:p-8 lg:p-10 space-y-6 border border-white/20 w-full mx-auto">
                                        <h3 className="font-nunito font-extrabold text-2xl md:text-[30px] leading-tight md:leading-7.5 text-center text-white">
                                            Be a Part of Us
                                        </h3>

                                        <form>
                                            <div className="grid gap-4 font-inter">
                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="name"
                                                        className="label"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                        className="input"
                                                    />
                                                </div>

                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="email"
                                                        className="label"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        className="input"
                                                    />
                                                </div>

                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="phone"
                                                        className="label"
                                                    >
                                                        Phone
                                                    </label>
                                                    <input
                                                        id="phone"
                                                        type="tel"
                                                        placeholder="+123 456 789"
                                                        className="input"
                                                    />
                                                </div>

                                                <div className="grid gap-3 w-full">
                                                    <label className="label">
                                                        Select Service
                                                    </label>

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
                                                                Product
                                                                Photography
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
                                                                Product Video
                                                                Creation
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
                                                                Digital
                                                                Marketing
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
                                                                Web Design and
                                                                Development
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="message"
                                                        className="label"
                                                    >
                                                        Message
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        placeholder="Write your Message"
                                                        className="textarea min-h-24"
                                                        rows={4}
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="btn w-full"
                                                >
                                                    Become Our Partner
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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
                                <span className="text-[#009588]">
                                    Wedekit LLC
                                </span>
                                . All rights reserved
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
        </section>
    );
}
