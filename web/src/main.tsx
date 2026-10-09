import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/geist-mono";
// Font Awesome Pro: core plus the two styles the registry uses.
import "@fortawesome/fontawesome-pro/css/fontawesome.min.css";
import "@fortawesome/fontawesome-pro/css/sharp-regular.min.css";
import "@fortawesome/fontawesome-pro/css/sharp-solid.min.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { applyPalette, storedPalette } from "./palettes";
import { App } from "./App";

// Before the first render, so the page never paints unstyled.
applyPalette(storedPalette());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TooltipProvider delayDuration={200}>
      <App />
    </TooltipProvider>
  </React.StrictMode>,
);
