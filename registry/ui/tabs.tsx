import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/cn";

export const Tabs = TabsPrimitive.Root;

/**
 * Two looks, chosen by where the tabs sit.
 *
 * `pill` is the default and the original: a bordered group that reads as a control, right for
 * switching a view inside a card. `underline` reads as navigation and is for tabs directly under
 * a page title, where a bordered group competes with the heading for attention.
 */
type TabsVariant = "pill" | "underline";

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { variant?: TabsVariant }
>(({ className, variant = "pill", ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "text-muted-foreground inline-flex items-center",
      variant === "pill"
        ? "border-border bg-muted h-9 justify-center rounded-lg border p-1"
        : "border-border w-full justify-start gap-1 border-b",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { variant?: TabsVariant }
>(({ className, variant = "pill", ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "focus-visible:ring-primary inline-flex items-center justify-center text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
      variant === "pill"
        ? "data-[state=active]:bg-card data-[state=active]:text-foreground rounded-md px-3 py-1 data-[state=active]:shadow"
        : // The active underline sits on the same line as the list's border, so it replaces that
          // segment rather than stacking a second rule under it.
          "hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground -mb-px border-b-2 border-transparent px-3.5 py-2 data-[state=active]:font-semibold",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "focus-visible:ring-primary mt-2 focus-visible:ring-2 focus-visible:outline-none",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
