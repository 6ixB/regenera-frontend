import React from "react";
import cn from "@/lib/utils/cn";
import { User } from "lucide-react";

interface DummyUserIconProps extends React.InputHTMLAttributes<HTMLDivElement> {
    classNameContainer?: string;
    classNameIcon?: string;
}

const DummyUserIcon = React.forwardRef<HTMLDivElement, DummyUserIconProps>(({ classNameContainer, classNameIcon, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "flex w-auto h-full aspect-square rounded-full bg-light-primary-100 select-none items-center justify-center",
                classNameContainer
            )}
            {...props}
        >
            <User
                strokeWidth={1.5}
                className={cn("w-full h-full text-light-background-100 m-2", classNameIcon)}
            />
        </div>
    );
});

DummyUserIcon.displayName = "DummyUserIcon";

export default DummyUserIcon;
