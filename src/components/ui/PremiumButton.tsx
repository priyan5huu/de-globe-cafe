import React from 'react';
import { motion } from 'framer-motion';

export interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'luxury' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  animation?: 'none' | 'bounce' | 'float' | 'glow' | 'shimmer';
}

const getVariantClasses = (variant: string = 'primary') => {
  const variants = {
    primary: [
      "bg-gradient-to-r from-caramel-600 to-caramel-700",
      "hover:from-caramel-500 hover:to-caramel-600",
      "text-white shadow-premium",
      "hover:shadow-glow-caramel hover:scale-105",
      "focus:ring-caramel-500/50",
      "relative overflow-hidden",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-gold-500 before:to-caramel-500 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
    ].join(' '),
    secondary: [
      "border-2 border-espresso-200 bg-white/80 backdrop-blur-md",
      "hover:border-espresso-300 hover:bg-white/90",
      "text-espresso-800 shadow-soft",
      "hover:shadow-medium hover:scale-105",
      "focus:ring-espresso-500/30"
    ].join(' '),
    outline: [
      "border-2 border-caramel-300 bg-transparent",
      "hover:border-caramel-500 hover:bg-caramel-50",
      "text-caramel-700 hover:text-caramel-800",
      "shadow-soft hover:shadow-medium",
      "focus:ring-caramel-500/30"
    ].join(' '),
    ghost: [
      "bg-transparent hover:bg-espresso-50",
      "text-espresso-600 hover:text-espresso-800",
      "hover:scale-105",
      "focus:ring-espresso-500/20"
    ].join(' '),
    luxury: [
      "bg-gradient-to-r from-gold-500 to-gold-600",
      "hover:from-gold-400 hover:to-gold-500",
      "text-white shadow-premium",
      "hover:shadow-glow-caramel hover:scale-105",
      "focus:ring-gold-500/50"
    ].join(' '),
    dark: [
      "bg-gradient-to-r from-espresso-800 to-espresso-900",
      "hover:from-espresso-700 hover:to-espresso-800",
      "text-cream-50 shadow-premium",
      "hover:shadow-glow-espresso hover:scale-105",
      "focus:ring-espresso-500/50"
    ].join(' ')
  };
  return variants[variant as keyof typeof variants] || variants.primary;
};

const getSizeClasses = (size: string = 'md') => {
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-6 py-3 text-base rounded-2xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-10 py-5 text-xl rounded-3xl",
    icon: "w-12 h-12 rounded-xl"
  };
  return sizes[size as keyof typeof sizes] || sizes.md;
};

const getAnimationClasses = (animation: string = 'none') => {
  const animations = {
    none: "",
    bounce: "hover:animate-bounce-subtle",
    float: "animate-float",
    glow: "animate-glow",
    shimmer: "relative before:absolute before:inset-0 before:bg-shimmer before:bg-[length:200%_100%] before:animate-shimmer"
  };
  return animations[animation as keyof typeof animations] || animations.none;
};

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ 
    className = '', 
    variant = 'primary', 
    size = 'md', 
    animation = 'none',
    loading = false,
    icon,
    iconPosition = 'left',
    children, 
    disabled,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;

    const baseClasses = [
      "relative inline-flex items-center justify-center gap-2",
      "font-montserrat font-semibold transition-all duration-500",
      "focus:outline-none focus:ring-4 focus:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "overflow-hidden group"
    ].join(' ');

    const allClasses = [
      baseClasses,
      getVariantClasses(variant),
      getSizeClasses(size),
      getAnimationClasses(animation),
      className
    ].filter(Boolean).join(' ');

    return (
      <motion.div
        whileHover={{ scale: isDisabled ? 1 : 1.02 }}
        whileTap={{ scale: isDisabled ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <button
          ref={ref}
          className={allClasses}
          disabled={isDisabled}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        >
        {/* Loading state */}
        {loading && (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Icon left */}
        {icon && iconPosition === 'left' && !loading && (
          <span className="transition-transform duration-300 group-hover:scale-110">
            {icon}
          </span>
        )}

        {/* Content */}
        {children && (
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
            {children}
          </span>
        )}

        {/* Icon right */}
        {icon && iconPosition === 'right' && !loading && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}

        {/* Ripple effect overlay */}
        <span className="absolute inset-0 rounded-inherit bg-white/20 opacity-0 group-active:opacity-100 transition-opacity duration-150" />
        </button>
      </motion.div>
    );
  }
);

PremiumButton.displayName = "PremiumButton";
