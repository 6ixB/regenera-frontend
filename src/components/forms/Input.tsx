interface InputProps {
  placeholder?: string;
}

export default function Input({ placeholder }: InputProps) {
  return (
    <div className={"max-w-sm"}>
      <input
        type={"text"}
        className={
          "py-3 px-4 w-full rounded-lg text-base border border-light-background-300 focus:border-light-primary-100  focus:ring-light-primary-100"
        }
        placeholder={placeholder}
      />
    </div>
  );
}
