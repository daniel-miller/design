import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/cn";

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    // Radix marks a disabled slider with data-disabled; the thumb and track are spans, so the
    // disabled: variant never matched them.
    className={cn(
      "relative flex w-full touch-none items-center select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="bg-muted relative h-2 w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range className="bg-primary absolute h-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="border-primary bg-background focus-visible:ring-primary block h-5 w-5 rounded-full border-2 transition-colors focus-visible:ring-2 focus-visible:outline-none" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;
