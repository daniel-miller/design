import { Toaster as Sonner } from "sonner";

/**
 * Takes the theme rather than reading a hook, because every app resolves its theme its own way
 * (localStorage key, a cookie shared with a marketing site). Omitted, sonner follows the OS.
 */
export function Toaster({ theme = "system" }: { theme?: "light" | "dark" | "system" }) {
  return (
    <Sonner
      theme={theme}
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  );
}
