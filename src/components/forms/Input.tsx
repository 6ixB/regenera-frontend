import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="max-w-sm">
      <input
        className="py-3 px-4 w-full rounded-lg text-base border border-light-background-300 focus:border-light-primary-100 focus:ring-light-primary-100"
        {...props}
        ref={ref}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
