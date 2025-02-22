import React from 'react';

type ButtonProps = {
  isLink?: boolean;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  style?: string;
  className?: string;
  submitButton?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isLink = false, onClick, href, children, style = 'primary', className, submitButton }) => {
  if (href) {
    return (
      <a href={href} className={`button ${style} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={submitButton ? 'submit' : 'button'} onClick={onClick} className={`button ${style} ${className}`}>
      {children}
    </button>
  );
};

export default Button;