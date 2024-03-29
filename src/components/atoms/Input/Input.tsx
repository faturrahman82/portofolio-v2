import { useFormContext } from "react-hook-form";
import {  Button as _Button } from "../../../components/ui/button";
import React from "react";
interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  defaultValue?: string;
}
export default function Input(props: Props): JSX.Element {
  const { name, label, type, defaultValue = "", className = "", ...otherProps } = props;

  const { register } = useFormContext();

  const isEyeIconOpen = false; // Change to true if you want to use the eye icon

  // Use state to make the input a controlled component
  const [value, setValue] = React.useState(defaultValue);

  // Update the value when the input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      {label && (
        <label htmlFor={name} className="text-sm lg:text-base px-2 lg:px-4 font-medium transition-all duration-100 ease-in-out text-dark">
          {label}
        </label>
      )}
      <input
        {...register(name)}
        id={name}
        placeholder={otherProps.placeholder}
        className="w-full h-full outline-none py-3 mt-2 font-sans text-black text-sm rounded px-4 border-[1px] lg:text-base placeholder:text-lg"
        type={isEyeIconOpen ? "text" : type}
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
