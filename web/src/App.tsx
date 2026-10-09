import { useState, type ReactNode } from "react";
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

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="border-border bg-card rounded-card space-y-4 border p-6">{children}</div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-muted-foreground w-24 shrink-0 text-xs">{label}</span>
      {children}
    </div>
  );
}

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

        <Section id="button" title="Button">
          <Row label="Variants">
            <Button>Save changes</Button>
            <Button variant="outline">Cancel</Button>
            <Button variant="ghost">Skip</Button>
            <Button variant="destructive">Delete course</Button>
          </Row>
          <Row label="Sizes">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" variant="outline" aria-label="Settings">
              <i className="fa-sharp fa-regular fa-gear" aria-hidden="true" />
            </Button>
          </Row>
          <Row label="Disabled">
            <Button disabled>Save changes</Button>
            <Button variant="outline" disabled>
              Cancel
            </Button>
          </Row>
        </Section>
      </PageContainer>
    </div>
  );
}
