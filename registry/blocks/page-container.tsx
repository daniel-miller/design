import { cn } from "@/lib/cn";

type Width = "narrow" | "default" | "wide" | "full";

const widthClass: Record<Width, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
  full: "",
};

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: Width;
}

export function PageContainer({
  width = "default",
  className,
  children,
  ...props
}: PageContainerProps) {
  return (
    <div className={cn("space-y-6 p-6", widthClass[width], className)} {...props}>
      {children}
    </div>
  );
}
