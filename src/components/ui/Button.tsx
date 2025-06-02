import React from "react";
import type { ButtonHTMLAttributes } from "react";
type ButtonProps = {
  children: React.ReactNode;

  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  const baseClasses = "px-3 py-2 font-medium rounded-lg cursor-pointer";

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
