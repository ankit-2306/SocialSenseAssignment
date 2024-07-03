import React, { useState } from 'react';

type DateInputBoxProps = {
  label: string;
  placeholder: string;
};

export default function DatePicker({ label, placeholder }: DateInputBoxProps) {
  const [dateValue, setDateValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value);
  };

  return (
    <div className="h-3 w-60 ml-10">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type="date"
        value={dateValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
}