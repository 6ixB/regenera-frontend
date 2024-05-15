interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span
      className={
        "w-fit bg-gradient-to-r from-light-primary-200 to-light-primary-100 p-2 text-base text-light-background-100 font-semibold"
      }
    >
      {text}
    </span>
  );
}
