import cn from "@/lib/utils/cn";
import React from "react";

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  placeholder: string;
  className?: string;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ icon, placeholder, className, ...props }, ref) => {
    return (
      <div className={`relative w-64 max-w-[560px] lg:w-full`}>
        <input
          type={"text"}
          id={"hs-leading-icon"}
          name={"hs-leading-icon"}
          className={cn(
            "block w-full rounded-full border-light-background-300 px-4 py-3 ps-11 text-sm focus:z-10 focus:border-light-primary-100 focus:ring-light-primary-100",
            className,
          )}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        <div
          className={
            "pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4"
          }
        >
          {icon}
        </div>
      </div>
    );
  },
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
