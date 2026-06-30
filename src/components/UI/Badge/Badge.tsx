import React from 'react';
import './Badge.css';

export type BadgeVariant = 'master' | 'taxi' | 'pooling' | 'private' | 'active';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'taxi', className = '' }) => {
  const badgeClass = `badge ${variant} ${className}`.trim();
  return <span className={badgeClass}>{children}</span>;
};
