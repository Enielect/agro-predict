import { cn } from "@/lib/utils";

export const Hamburger = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
      {...props}
    >
      <rect width="24" height="2" fill="#1E1E1E" />
      <rect y="6" width="24" height="2" fill="#1E1E1E" />
      <rect y="12" width="24" height="2" fill="#1E1E1E" />
    </svg>
  );
};
