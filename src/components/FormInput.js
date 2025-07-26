import React from 'react';

function FormInput({ label, type = "text", name, value, onChange, placeholder, error }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
          {label}
        </label>
      )}
      <input 
        type={type} 
        name={name} 
        id={name}
        value={value} 
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-intellipromptOrange transition-colors ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default FormInput;
