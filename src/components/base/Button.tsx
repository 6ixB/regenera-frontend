import cn from "@/lib/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variantStyles = {
  solid:
    "py-3 px-4 inline-flex items-center justify-center gap-x-2 text-base font-medium rounded-lg bg-light-text-100 text-white hover:bg-light-text-200 border border-transparent focus:outline-light-primary-200",
  outline:
    "py-3 px-4 inline-flex items-center justify-center gap-x-2 text-base font-medium rounded-lg border border-light-text-100 text-light-text-100 hover:border-blue-600 hover:text-blue-600 focus:outline-light-primary-200",
};

export default function Button({
  variant,
  children,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(`${variantStyles[variant]} disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed `, className )}
    >
      {children}
    </button>
  );
}
