import type { CSSProperties } from "react";
import { Toaster as Sonner } from "sonner";

// Sonner colours each toast from three variables it sets on its own root, with attribute
// selectors outside any cascade layer, so no utility class can override them. An inline style on
// that root can: it points the variables at the palette's tokens.
const paletteVariables = {
  "--normal-bg": "var(--color-card)",
  "--normal-text": "var(--color-card-foreground)",
  "--normal-border": "var(--color-border)",
} as CSSProperties;

/**
 * Takes the theme rather than reading a hook, because every app resolves its theme its own way
 * (localStorage key, a cookie shared with a marketing site). Omitted, sonner follows the OS.
 */
export function Toaster({ theme = "system" }: { theme?: "light" | "dark" | "system" }) {
  return (
    <Sonner
      theme={theme}
      position="bottom-right"
      style={paletteVariables}
      toastOptions={{
        // The description and button colours are set by the same unlayered rules, so these
        // classes need the important modifier to win.
        classNames: {
          toast: "shadow-lg!",
          description: "text-muted-foreground!",
          actionButton: "bg-primary! text-primary-foreground!",
          cancelButton: "bg-muted! text-muted-foreground!",
        },
      }}
    />
  );
}
