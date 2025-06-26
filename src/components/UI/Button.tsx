import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'form';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-ishine-blue-500 text-white hover:bg-ishine-blue-600 focus:ring-ishine-blue-500',
    secondary: 'bg-ishine-teal-500 text-white hover:bg-ishine-teal-600 focus:ring-ishine-teal-500',
    outline: 'border-2 border-ishine-blue-500 text-ishine-blue-500 hover:bg-ishine-blue-500 hover:text-white focus:ring-ishine-blue-500',
    form: 'bg-ishine-form-500 text-white hover:bg-ishine-form-600 focus:ring-ishine-form-500'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;