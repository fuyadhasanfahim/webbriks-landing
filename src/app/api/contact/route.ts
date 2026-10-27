import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting store (in-memory, use Redis in production for multi-instance deployments)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Email template function
function createEmailTemplate(data: {
    name: string;
    email: string;
    phone: string;
    services: string[];
    message: string;
}) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Partnership Inquiry - WeBriks</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #f3f4f6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #009588 0%, #002f2b 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; font-family: 'Nunito', Arial, sans-serif;">
                                New Partnership Inquiry
                            </h1>
                            <p style="margin: 10px 0 0 0; color: #6CFFF1; font-size: 16px; font-weight: 600;">
                                WeBriks - All-in-One eCommerce Solutions
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 30px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                                You have received a new partnership inquiry through the WeBriks website. Here are the details:
                            </p>
                            
                            <!-- Contact Information -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 15px 20px; background-color: #f9fafb; border-left: 4px solid #009588;">
                                        <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Full Name
                                        </p>
                                        <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                                            ${data.name}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 15px 20px; background-color: #f9fafb; border-left: 4px solid #009588;">
                                        <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Email Address
                                        </p>
                                        <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                                            <a href="mailto:${data.email}" style="color: #009588; text-decoration: none;">
                                                ${data.email}
                                            </a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 15px 20px; background-color: #f9fafb; border-left: 4px solid #009588;">
                                        <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Phone Number
                                        </p>
                                        <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                                            <a href="tel:${data.phone}" style="color: #009588; text-decoration: none;">
                                                ${data.phone}
                                            </a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Services -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 15px 20px; background-color: #f0fdfa; border-left: 4px solid #009588;">
                                        <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Interested Services
                                        </p>
                                        <ul style="margin: 0; padding: 0 0 0 20px; color: #111827; font-size: 15px; line-height: 1.8;">
                                            ${data.services.map(service => `<li style="margin: 5px 0;">${service}</li>`).join('')}
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message -->
                            ${data.message ? `
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 15px 20px; background-color: #f9fafb; border-left: 4px solid #009588;">
                                        <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Message
                                        </p>
                                        <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
                                            ${data.message}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            ` : ''}
                            
                            <!-- CTA Button -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 40px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:${data.email}" style="display: inline-block; padding: 14px 32px; background-color: #F27021; color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(242, 112, 33, 0.3);">
                                            Reply to ${data.name.split(' ')[0]}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
                                <strong style="color: #009588;">WeBriks</strong> - All-in-One eCommerce Solutions
                            </p>
                            <p style="margin: 0 0 5px 0; color: #9ca3af; font-size: 13px;">
                                Product Photography • Web Design • Digital Marketing
                            </p>
                            <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px;">
                                This email was sent from your website contact form
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `.trim();
}

// Rate limiting function
function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
    const now = Date.now();
    const limit = rateLimitStore.get(ip);

    if (!limit || now > limit.resetTime) {
        // Reset or create new limit
        rateLimitStore.set(ip, {
            count: 1,
            resetTime: now + 60000, // 1 minute window
        });
        return { allowed: true };
    }

    if (limit.count >= 3) {
        // Max 3 requests per minute
        const retryAfter = Math.ceil((limit.resetTime - now) / 1000);
        return { allowed: false, retryAfter };
    }

    limit.count++;
    return { allowed: true };
}

// Verify Cloudflare Turnstile token
async function verifyTurnstile(token: string): Promise<boolean> {
    if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: Skipping Turnstile verification');
        return true;
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
        console.error('TURNSTILE_SECRET_KEY not configured');
        return false;
    }

    try {
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                secret: secretKey,
                response: token,
            }),
        });

        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error('Turnstile verification error:', error);
        return false;
    }
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
    return input
        .replace(/[<>]/g, '') // Remove < and >
        .trim()
        .substring(0, 1000); // Limit length
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

        // Check rate limit
        const rateLimit = checkRateLimit(ip);
        if (!rateLimit.allowed) {
            return NextResponse.json(
                { error: `Too many requests. Please try again in ${rateLimit.retryAfter} seconds.` },
                { 
                    status: 429,
                    headers: {
                        'Retry-After': rateLimit.retryAfter!.toString(),
                    },
                }
            );
        }

        const body = await request.json();
        const { name, email, phone, services, message, turnstileToken } = body;

        // Validate required fields
        if (!name || !email || !phone || !services || services.length === 0) {
            return NextResponse.json(
                { error: 'Please fill in all required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        // Verify Turnstile in production
        if (process.env.NODE_ENV !== 'development') {

            // Verify Cloudflare Turnstile
            if (!turnstileToken) {
                return NextResponse.json(
                    { error: 'Turnstile verification required' },
                    { status: 400 }
                );
            }

            const isValidTurnstile = await verifyTurnstile(turnstileToken);
            if (!isValidTurnstile) {
                return NextResponse.json(
                    { error: 'Turnstile verification failed. Please try again.' },
                    { status: 400 }
                );
            }
        }

        // Sanitize inputs
        const sanitizedData = {
            name: sanitizeInput(name),
            email: sanitizeInput(email),
            phone: sanitizeInput(phone),
            services: services.map((s: string) => sanitizeInput(s)),
            message: message ? sanitizeInput(message) : 'No message provided',
        };

        // Configure nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // SSL
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `New Partnership Inquiry from ${sanitizedData.name}`,
            html: createEmailTemplate(sanitizedData),
            replyTo: sanitizedData.email,
        });

        return NextResponse.json(
            { success: true, message: 'Your message has been sent successfully!' },
            { 
                status: 200,
                headers: {
                    'X-Content-Type-Options': 'nosniff',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                },
            }
        );
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
