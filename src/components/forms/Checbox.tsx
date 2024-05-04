interface CheckboxProps {
  label: string;
}

export default function Checkbox({ label }: CheckboxProps) {
  return (
    <div className={"flex items-center py-2"}>
      <input
        type={"checkbox"}
        className={
          "shrink-0 border-light-text-100 rounded text-blue-600 focus:ring-light-primary-100"
        }
      />
      <label className={"text-sm text-light-text-100 ms-2"}>{label}</label>
    </div>
  );
}
