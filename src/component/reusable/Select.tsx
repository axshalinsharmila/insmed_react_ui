// components/Select.js (with Tailwind)
import React from 'react';

interface Option {
    label: string;
    value: string;
  }
  6381491263
  interface SelectProps {
    options: Option[];
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }

const Select: React.FC<SelectProps> = ({ options, label, onChange, value }) => {
  return (
    <div className="select-container mb-4">
      {label && <label htmlFor="select" className="block text-xs font-medium text-gray-700">{label}</label>}
      <select
        id="select"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

