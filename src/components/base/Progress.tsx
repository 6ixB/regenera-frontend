import cn from "@/lib/utils/cn";

interface ProgressProps {
  progress: number;
  color?: "red" | "green";
  background?: boolean;
  className?: string;
}

export default function Progress({
  progress,
  color = "red",
  background = true,
  className,
}: ProgressProps) {
  return (
    <div
      className={cn(
        `flex w-full h-1.5 ${background ? "bg-light-background-300" : ""} rounded-full overflow-hidden `,
        className
      )}
    >
      <div
        className={`flex flex-col justify-center rounded-full overflow-hidden ${
          color === "red"
            ? "bg-light-accent-100"
            : "bg-gradient-to-r from-light-primary-200 to-light-primary-100"
        } text-center whitespace-nowrap transition duration-500`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
