import React from 'react';

export function Button({ children, onClick, className = '', ...props }) {
  return (
    <button type="button" onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}
export default Button;
