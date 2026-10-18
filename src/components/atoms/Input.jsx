import React from 'react';

export function Input({ type = 'text', placeholder = '', value, onChange, className = '', ...props }) {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`form-control ${className}`.trim()} {...props} />;
}

export default Input;