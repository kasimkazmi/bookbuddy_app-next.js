import Link from 'next/link';
import clsx from 'clsx';

interface SidebarIconProps {
    icon: React.ElementType;
    label: string;
    href: string;
    isOpen: boolean;
    isActive?: boolean; // Optional prop to indicate if the icon is active
    className?: string; // Optional className for additional styling
}

export default function SidebarIcon({
    icon: Icon,
    label,
    href,
    isOpen,
    isActive, // Destructure isActive
    className // Destructure className
}: SidebarIconProps) {
    return (
        <Link
            href={href}
            className={clsx(
                'flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors',
                { 'justify-center': !isOpen, 'gap-3': isOpen },
                className, // Include additional className
                { 'bg-gray-800': isActive } // Add active class
            )}
        >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span
                className={clsx(
                    'transition-all duration-300 origin-left overflow-hidden',
                    isOpen
                        ? 'opacity-100 scale-100 ml-2'
                        : 'opacity-0 scale-90 ml-0 w-0'
                )}
            >
                {label}
            </span>
        </Link>
    );
}
