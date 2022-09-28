import React, { useState } from "react";

interface Props {
  label: string;
  onChange: (e: React.FormEvent) => void;
  type: string;
  input: [];
  errorMessage: string;
}

const FormInput = ({ label, onChange, errorMessage, ...input }: Props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e: React.FormEvent) => {
    setFocused(true);
  };
  return (
    <div className="app mb-4">
      <label className="block mb-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {label}
        </span>
        <input
          {...input}
          className="mt-1 custom-input mb-4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          required
        />
        <div
          className="hidden error-message p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Danger alert!</span> {errorMessage}
          </div>
        </div>
      </label>
    </div>
  );
};

export default FormInput;
