import React, { useState } from 'react';

interface InputGroupProps {
  icon: React.ReactNode;
  placeholder: string;
  onChange: (value: string) => void; 
}

export default function LongInputGroup({ icon, placeholder, onChange }: InputGroupProps) {
  const [value, setValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange(value); 
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="w-full lg:w-full relative">
      <textarea
        id="hs-leading-icon"
        name="hs-leading-icon"
        className="w-full py-3 px-4 ps-11 h-fit max-h-40  block border-light-background-300 rounded-lg text-sm focus:z-10 focus:border-light-primary-100 focus:ring-light-primary-100 resize-none"
        placeholder={placeholder}
        rows={1}  
        value={value} 
        onChange={handleInput} 
      ></textarea>
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
        {icon}
      </div>
    </div>
  );
}
