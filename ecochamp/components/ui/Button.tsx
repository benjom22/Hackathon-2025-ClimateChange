import React from 'react';

type ButtonProps = {
  isLink?: boolean;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  style?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ isLink = false, onClick, href, children, style = 'primary', className }) => {
  if (href) {
    return (
      <a href={href} className={`button ${style} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`button ${style} ${className}`}>
      {children}
    </button>
  );
};

export default Button;