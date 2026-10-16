import React from 'react';

export function Button({ children, onClick, className = '' }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
export default Button;