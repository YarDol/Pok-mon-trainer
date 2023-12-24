import React from 'react';

export interface SelectProps {
  id: string;
  label: string;
  assistiveText: string;
  options: { value: string; label: string }[];
  ariaDescribedBy: string;
}

export const Select = ({
  id,
  label,
  assistiveText,
  options,
  ariaDescribedBy,
}: SelectProps) => {
  return (
    <>
      <label htmlFor={id} className="block font-bold mb-1">
        {label}
      </label>
      <select
        id={id}
        aria-describedby={ariaDescribedBy}
        className="border border-black rounded-md p-2 w-full"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p id={ariaDescribedBy} className="text-sm text-gray-500 ">
        {assistiveText}
      </p>
    </>
  );
};
