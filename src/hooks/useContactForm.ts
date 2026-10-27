import { useState } from 'react';
import toast from 'react-hot-toast';

interface FormData {
    name: string;
    email: string;
    phone: string;
    services: string[];
    message: string;
}

export function useContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        services: [],
        message: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (service: string, checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            services: checked
                ? [...prev.services, service]
                : prev.services.filter((s) => s !== service),
        }));
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            services: [],
            message: '',
        });
    };

    const submitForm = async (turnstileToken?: string) => {
        // Validation
        if (!formData.name || !formData.email || !formData.phone) {
            toast.error('Please fill in all required fields');
            return false;
        }

        if (formData.services.length === 0) {
            toast.error('Please select at least one service');
            return false;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    turnstileToken,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message || 'Message sent successfully!');
                resetForm();
                return true;
            } else {
                toast.error(data.error || 'Failed to send message');
                return false;
            }
        } catch (error) {
            console.error('Form submission error:', error);
            toast.error('An error occurred. Please try again.');
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        isSubmitting,
        handleInputChange,
        handleCheckboxChange,
        submitForm,
        resetForm,
    };
}
