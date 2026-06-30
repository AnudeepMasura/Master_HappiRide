import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`button ${loading ? 'loading' : ''} ${className}`.trim()}
      disabled={disabled || loading}
      {...props}
    >
      {icon && <span className={`icon ${loading ? 'spin' : ''}`.trim()}>{icon}</span>}
      <span className="label">{children}</span>
    </button>
  );
};
