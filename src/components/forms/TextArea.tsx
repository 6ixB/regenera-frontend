import cn from "@/lib/utils/cn";
import React from "react";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode;
  label?: string;
  desc?: string;
  error?: string | undefined;
  className?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ icon, label, desc, className, error, ...props }, ref) => {
    return (
      <div className="relative flex h-full w-full flex-col gap-y-2">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            {icon}
            <p className="text-base font-medium text-light-text-100">{label}</p>
          </div>
          <p className="text-xs font-medium text-gray-500">{desc}</p>
        </div>

        <textarea
          className={cn(
            `w-full rounded-lg border border-light-background-300 px-4 py-3 text-base focus:border-light-primary-100 focus:ring-light-primary-100 ${className}`,
            className,
          )}
          {...props}
          ref={ref}
        />
        {error && (
          <p className="absolute bottom-0 translate-y-full text-sm text-light-accent-100">
            {error}
          </p>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
