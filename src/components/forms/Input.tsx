import cn from "@/lib/utils/cn";
import { error } from "console";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
  desc?: string;
  error?: string | undefined
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, label, desc, className, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-y-2 w-full relative">
        <div className="flex flex-col gap-y-1">
          <div className="flex gap-x-2 items-center">
            {icon}
            <p className="font-medium text-base text-light-text-100">{label}</p>
          </div>
          <p className="font-medium text-xs text-gray-500">{desc}</p>
        </div>

        <input
          className={cn(
            `py-3 px-4 w-full rounded-lg text-base border border-light-background-300 focus:border-light-primary-100 focus:ring-light-primary-100 ${className}`,
            className
          )}
          {...props}
          ref={ref}
        />
        {error && <p className="text-sm text-light-accent-100 absolute bottom-0 translate-y-full">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
