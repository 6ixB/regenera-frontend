import cn from "@/lib/utils/cn";
import { error } from "console";
import React from "react";

interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    label?: string;
    desc?: string;
    error?: string | undefined
    className?: string;
}

const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
    ({ icon, label, desc, className, error, ...props }, ref) => {
        return (
            <div className={`flex flex-row w-full items-center relative gap-x-4 ${error || label ? 'gap-y-2' : ''}`}>
                <div className={`flex flex-col  ${desc ? 'gap-y-1' : ''} `}>
                    <div className="flex gap-x-2 items-center">
                        {icon}
                        <p className="font-medium text-base text-light-text-100">{label}</p>
                        <input
                            className={cn(
                                `p-2  rounded-xl text-base border border-light-primary-100 focus:border-light-primary-100 focus:ring-light-primary-100 ${className}`,
                                className
                            )}
                            {...props}
                            ref={ref}
                        />
                    </div>
                    <p className="font-medium text-xs text-gray-500">{desc}</p>
                </div>

                {error && <p className="text-sm text-light-accent-100 absolute bottom-0 translate-y-full">{error}</p>}
            </div> 
        );
    }
);

CheckboxInput.displayName = "Input";

export default CheckboxInput;
