import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate } from "@/lib/dates";
import { Row, Section } from "../specimen";

const tickets = [
  {
    id: 48211,
    learner: "Jordan Lee",
    course: "H2S Alive",
    expires: "2028-11-05T00:00:00",
    status: "valid",
  },
  {
    id: 48190,
    learner: "Priya Raman",
    course: "Standard First Aid",
    expires: "2026-11-20T00:00:00",
    status: "expiring",
  },
  {
    id: 47702,
    learner: "Marc Tremblay",
    course: "Fall Protection",
    expires: "2026-09-14T00:00:00",
    status: "expired",
  },
] as const;

const statusBadge = {
  valid: <Badge variant="success">Valid</Badge>,
  expiring: <Badge variant="warning">Expiring</Badge>,
  expired: <Badge variant="destructive">Expired</Badge>,
};

export function TabsSection() {
  return (
    <Section id="tabs" title="Tabs">
      <Row label="Pill">
        <Tabs defaultValue="tickets">
          <TabsList>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
        </Tabs>
      </Row>
      <Row label="Underline">
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList variant="underline">
            <TabsTrigger variant="underline" value="overview">
              Overview
            </TabsTrigger>
            <TabsTrigger variant="underline" value="members">
              Members
            </TabsTrigger>
            <TabsTrigger variant="underline" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-muted-foreground pt-3 text-sm">
            214 learners across 6 sites
          </TabsContent>
          <TabsContent value="members" className="text-muted-foreground pt-3 text-sm">
            12 administrators
          </TabsContent>
          <TabsContent value="settings" className="text-muted-foreground pt-3 text-sm">
            Company settings
          </TabsContent>
        </Tabs>
      </Row>
    </Section>
  );
}

export function TableSection() {
  return (
    <Section id="table" title="Table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ticket</TableHead>
            <TableHead>Learner</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Expires</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((t) => (
            <TableRow key={t.id}>
              <TableCell className="font-mono">{t.id}</TableCell>
              <TableCell>{t.learner}</TableCell>
              <TableCell>{t.course}</TableCell>
              <TableCell className="font-mono">{formatDate(t.expires)}</TableCell>
              <TableCell>{statusBadge[t.status]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}

export function SkeletonSection() {
  return (
    <Section id="skeleton" title="Skeleton">
      <div className="flex max-w-md items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </Section>
  );
}
