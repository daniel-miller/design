import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/page-container";
import { PageHeader } from "@/components/ui/page-header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  applyPalette,
  applyTheme,
  isPalette,
  palettes,
  storedPalette,
  type Palette,
} from "./palettes";
import { BadgeSection } from "./sections/badge";
import { ButtonSection } from "./sections/button";
import { CardSection } from "./sections/card";
import { CheckboxSection, InputSection } from "./sections/forms";
import {
  DialogSheetSection,
  DropdownMenuSection,
  PopoverTooltipSection,
  SelectSection,
} from "./sections/overlays";

const sections = [
  { id: "button", title: "Button", Component: ButtonSection },
  { id: "badge", title: "Badge", Component: BadgeSection },
  { id: "card", title: "Card", Component: CardSection },
  { id: "input", title: "Input", Component: InputSection },
  { id: "checkbox", title: "Checkbox", Component: CheckboxSection },
  { id: "select", title: "Select", Component: SelectSection },
  { id: "dropdown-menu", title: "Dropdown menu", Component: DropdownMenuSection },
  { id: "popover", title: "Popover", Component: PopoverTooltipSection },
  { id: "dialog", title: "Dialog", Component: DialogSheetSection },
];

export function App() {
  const [palette, setPalette] = useState<Palette>(storedPalette);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  return (
    <div className="min-h-full">
      <header className="border-border bg-background/90 sticky top-0 z-10 border-b backdrop-blur">
        {/* Left-aligned like PageContainer, which expects an app shell to place it. */}
        <div className="flex max-w-5xl items-center gap-3 px-6 py-3">
          <span className="font-semibold">Design specimen</span>
          <div className="ml-auto flex items-center gap-2">
            <Select
              value={palette}
              onValueChange={(value) => {
                if (!isPalette(value)) return;
                setPalette(value);
                applyPalette(value);
              }}
            >
              <SelectTrigger className="w-36" aria-label="Palette">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(palettes).map((name) => (
                  <SelectItem key={name} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              aria-label={dark ? "Switch to light" : "Switch to dark"}
              onClick={() => {
                setDark(!dark);
                applyTheme(!dark);
              }}
            >
              <i
                className={dark ? "fa-sharp fa-regular fa-sun" : "fa-sharp fa-regular fa-moon"}
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </header>

      <PageContainer>
        <PageHeader
          title="Components"
          subtitle="Every registry component, rendered from the registry source"
        />

        <nav aria-label="Components" className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {sections.map(({ id, title }) => (
            <a key={id} href={`#${id}`} className="text-link hover:underline">
              {title}
            </a>
          ))}
        </nav>

        {sections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </PageContainer>
    </div>
  );
}
