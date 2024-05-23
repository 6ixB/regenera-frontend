import cn from "@/lib/utils/cn";

interface CollapsedInputGroupProps {
  icon: React.ReactNode;
  placeholder: string;
  variant?: 'outlined' | 'no-outlined'
  className?: string
}

export default function CollapsedInputGroup({ icon, placeholder, variant = 'outlined', className }: CollapsedInputGroupProps) {
  return (
    <div className={cn(`w-64 max-w-[354px] lg:w-full relative`, className)}>
      <input
        type={"text"}
        id={"hs-leading-icon"}
        name={"hs-leading-icon"}
        className={
          `w-full py-2 px-4 ps-12 block rounded-full text-sm focus:z-10 focus:border-light-primary-100 focus:ring-light-primary-100
          ${variant === 'outlined' ? 'border-light-background-300' : 'border-none'}
          `
        }
        placeholder={placeholder}
      />
      <div
        className={
          "absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"
        }
      >
        {icon}
      </div>
    </div>
  );
}
