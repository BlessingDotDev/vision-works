import React from "react";
import clsx from "clsx";

type ButtonVariant = 
  | 'header'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'rounded'

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'round';

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant,
  size?: ButtonSize,
}

const variantStyles: Record<ButtonVariant, string> = {
  header: "bg-white/15 rounded-xl hover:bg-white/20",
  primary: "text-white leading-normal bg-green-800  hover:ring-1 hover:bg-black ring-green-600",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  tertiary: "text-gray-900 hover:bg-gray-800 text-white",
  outline: "leading-normal hover:bg-green-600 ring-1 bg-black ring-green-600",
  rounded: "bg-gray-200 text-gray-900 hover:bg-gray-300"
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: "text-[10px] px-1 rounded-md",
  sm: "text-sm py-2 px-4 rounded-lg",
  md: "text-sm py-2 px-8 rounded-lg ",
  lg: "text-base text-sm py-4 px-8 rounded-lg",
  round: "text-sm py-2 px-2 rounded-full"
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button 
      className={clsx(
        variantStyles[variant], sizeStyles[size], className, 
        "transition-all duration-200 cursor-pointer",
      )} 
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;