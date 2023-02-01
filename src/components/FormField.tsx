import React from "react";

type fieldSubmit = {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: any;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: any;
};

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}: fieldSubmit) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded=[5px] text-black"
          >
            SurpriseMe
          </button>
        )}
      </div>
      <input type={type} id={name} name={name} placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray border border-gray text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
