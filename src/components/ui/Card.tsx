import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  glow = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 p-6 ${hoverEffect ? 'hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5' : ''
        } ${glow ? 'after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-r after:from-emerald-500/10 after:to-teal-500/0 after:opacity-0 hover:after:opacity-100 after:transition-opacity' : ''
        } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
