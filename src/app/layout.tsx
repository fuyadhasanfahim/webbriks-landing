import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

const nunito = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
});

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'WeBriks - All-in-One eCommerce Solutions | Product Photography, Web Design & Digital Marketing',
    description: 'Complete eCommerce solutions for business success. Professional product photography, custom website design & development, and targeted digital marketing services. Everything you need to sell online under one umbrella.',
    keywords: [
        'eCommerce solutions',
        'product photography',
        'web design Bangladesh',
        'digital marketing',
        'Facebook ads',
        'custom eCommerce website',
        'product photoshoot',
        'video creation',
        'SEO services',
        'online store development',
    ],
    authors: [{ name: 'WeBriks', url: 'https://webbriks.com' }],
    creator: 'WeBriks',
    publisher: 'WeBriks',
    metadataBase: new URL('https://webbriks.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'WeBriks - All-in-One eCommerce Solutions',
        description: 'Complete eCommerce solutions: Product Photography, Custom Web Design & Targeted Digital Marketing. Everything under one umbrella.',
        url: 'https://webbriks.com',
        siteName: 'WeBriks',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'WeBriks - All-in-One eCommerce Solutions',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'WeBriks - All-in-One eCommerce Solutions',
        description: 'Complete eCommerce solutions for business success. Product Photography, Web Design & Digital Marketing.',
        images: ['/og-image.png'],
        creator: '@webbriks',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn('antialiased', nunito.variable, inter.variable)}
            >
                <Toaster
                    position="top-right"
                    toastOptions={{
                        duration: 4000,
                        style: {
                            background: '#009588',
                            color: '#fff',
                            fontWeight: '600',
                        },
                        success: {
                            iconTheme: {
                                primary: '#6CFFF1',
                                secondary: '#009588',
                            },
                        },
                        error: {
                            style: {
                                background: '#ef4444',
                            },
                        },
                    }}
                />
                {children}
            </body>
        </html>
    );
}
