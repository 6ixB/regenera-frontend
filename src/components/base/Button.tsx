interface ButtonProps {
  variant: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
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
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={"button"}
      className={`${variantStyles[variant]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
