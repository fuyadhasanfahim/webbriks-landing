'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <figure>
                <Image
                    src="/logo.png"
                    alt="logo"
                    height={39}
                    width={126}
                    className="w-auto h-8 md:h-10"
                />
            </figure>
        </motion.nav>
    );
}
