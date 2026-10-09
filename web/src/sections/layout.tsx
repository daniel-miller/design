import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AppShell,
  ShellBody,
  ShellMain,
  Sidebar,
  SidebarBrand,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarNav,
  SidebarNavItem,
  Topbar,
} from "@/components/ui/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "../specimen";

// An app passes its router's NavLink through asChild, which sets aria-current on the active item.
// The specimen has no router, so plain anchors set it by hand.
const items = [
  { label: "Home", icon: "fa-house", current: false },
  { label: "Learners", icon: "fa-users", current: true },
  { label: "Courses", icon: "fa-book-open", current: false },
];

const reports = [
  { label: "Expiring tickets", icon: "fa-calendar-clock" },
  { label: "Compliance", icon: "fa-chart-pie" },
];

export function AppShellSection() {
  return (
    <Section id="app-shell" title="App shell">
      <div className="border-border rounded-card h-96 overflow-hidden border">
        <AppShell>
          <Sidebar aria-label="Example sidebar">
            <SidebarBrand>CMDS</SidebarBrand>
            <SidebarNav aria-label="Example">
              {items.map((item) => (
                <SidebarNavItem
                  key={item.label}
                  href="#app-shell"
                  icon={`fa-sharp fa-regular ${item.icon}`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </SidebarNavItem>
              ))}
              <SidebarGroupLabel>Reporting</SidebarGroupLabel>
              {reports.map((item) => (
                <SidebarNavItem
                  key={item.label}
                  href="#app-shell"
                  icon={`fa-sharp fa-regular ${item.icon}`}
                >
                  {item.label}
                </SidebarNavItem>
              ))}
            </SidebarNav>
            <SidebarFooter className="text-muted-foreground text-center text-xs">
              Keyera
            </SidebarFooter>
          </Sidebar>
          <ShellBody>
            <Topbar>
              <Badge variant="secondary">Work</Badge>
              <Button variant="ghost" className="ml-auto h-8 gap-1.5 px-2">
                <i className="fa-sharp fa-regular fa-circle-question" aria-hidden="true" />
                Help
              </Button>
            </Topbar>
            <ShellMain className="space-y-4 p-6">
              <PageHeader title="Learners" subtitle="214 learners across 6 sites" />
              <Card>
                <CardHeader>
                  <CardTitle>Content sits on white</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Cards separate from the page by their hairline border; the tint belongs to the
                  sidebar.
                </CardContent>
              </Card>
            </ShellMain>
          </ShellBody>
        </AppShell>
      </div>
    </Section>
  );
}
