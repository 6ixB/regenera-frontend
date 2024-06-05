interface InputGroupProps {
    icon: React.ReactNode;
    placeholder: string;
    
  }
  
  export default function SquareInputGroup({ icon, placeholder }: InputGroupProps) {
    return (
      <div className={`w-full lg:w-full relative`}>
        <input
          type={"text"}
          id={"hs-leading-icon"}
          name={"hs-leading-icon"}
          className={
            "w-full py-3 px-4 ps-11 block border-light-background-300 text-sm focus:z-10 focus:border-light-primary-100 focus:ring-light-primary-100 bg-light-background-100"
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
  