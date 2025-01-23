import React from 'react';

export const Button = ({ variant = "default", size = "default", className = "", children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-gray-100",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-8 px-3 text-sm",
    lg: "h-11 px-8",
    icon: "h-9 w-9",
  };

  const variantStyles = variants[variant] || variants.default;
  const sizeStyles = sizes[size] || sizes.default;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};