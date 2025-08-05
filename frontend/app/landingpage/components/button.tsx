import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
    const baseClasses = "px-4 py-2 rounded-full transition-all duration-300 font-medium";
    const variantClasses = {
        primary: "bg-white text-black hover:bg-gray-200",
        secondary: "border border-white/20 text-white hover:bg-white/10"
    };
    
    return (
        <button 
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}