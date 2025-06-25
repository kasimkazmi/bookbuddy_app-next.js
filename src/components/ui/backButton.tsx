'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './button';

interface BackButtonProps {
    className?: string;
    text?: string;
    iconSize?: number;
    showIcon?: boolean;
    variant?: 'text' | 'outline' | 'filled';
    onClick?: () => void;
}

export default function BackButton({
    className = '',
    text = 'Back to all rooms',
    iconSize = 16,
    showIcon = true,
    variant = 'text',
    onClick
}: BackButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            router.back();
        }
    };

    const baseClasses = `flex items-center gap-2 font-medium transition-all duration-200 ${className}`;

    const variantClasses = {
        text: 'hover:text-S3BG',
        outline:
            'border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-gray-700',
        filled: '   text-primary-foreground custom-btn hover:bg-primary/50 px-3 py-1.5 rounded-lg'
    };

    return (
        <motion.button
            onClick={handleClick}
            className={`${baseClasses} ${variantClasses[variant]}`}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.98 }}
            aria-label={text}
        >
            {showIcon && (
                <ArrowLeft
                    className="transition-transform duration-200 group-hover:-translate-x-0.5"
                    size={iconSize}
                />
            )}
            <span>{text}</span>
        </motion.button>
    );
}
