import cn from "@/lib/utils/cn";

interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className }: BadgeProps) {
  return (
    <span
      className={cn(

        "w-fit bg-gradient-to-r from-light-primary-200 to-light-primary-100 p-2 text-light-background-100 font-semibold rounded-md text-xs lg:text-sm"
      ,
      className
    )}
    >
      {text}
    </span>
  );
}
