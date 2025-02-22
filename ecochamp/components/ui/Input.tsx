import React from 'react';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  id: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, id, required, placeholder, className }) => (
  <div className={`flex flex-col gap-0.5 w-full ${className}`}>
    <label className='text-white text-sm font-regular' htmlFor={id}>{label}:</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className='border-none bg-forestGreen-600 placeholder:text-forestGreen-300 p-4 rounded-lg text-white focus:outline-earthGreen-500 focus:ring-0'
    />
  </div>
);

export default Input;
