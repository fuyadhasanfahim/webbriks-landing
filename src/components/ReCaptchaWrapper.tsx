'use client';

import { Turnstile } from '@marsidev/react-turnstile';

interface TurnstileCaptchaProps {
    onVerify: (token: string) => void;
}

export default function TurnstileCaptcha({ onVerify }: TurnstileCaptchaProps) {
    // Skip rendering in development
    if (process.env.NODE_ENV === 'development') {
        return null;
    }

    const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    if (!turnstileSiteKey) {
        console.warn('Turnstile site key is not configured');
        return null;
    }

    return (
        <div className="flex justify-center">
            <Turnstile
                siteKey={turnstileSiteKey}
                onSuccess={onVerify}
            />
        </div>
    );
}
