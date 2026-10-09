import { Badge } from "@/components/ui/badge";
import { Row, Section } from "../specimen";

export function BadgeSection() {
  return (
    <Section id="badge" title="Badge">
      <Row label="Variants">
        <Badge>Default</Badge>
        <Badge variant="secondary">Draft</Badge>
        <Badge variant="outline">Archived</Badge>
      </Row>
      <Row label="Status">
        <Badge variant="success">Valid</Badge>
        <Badge variant="warning">Expiring</Badge>
        <Badge variant="destructive">Expired</Badge>
      </Row>
      <Row label="With icon">
        <Badge variant="success">
          <i className="fa-sharp fa-solid fa-circle-check" aria-hidden="true" />
          Compliant
        </Badge>
        <Badge variant="destructive">
          <i className="fa-sharp fa-solid fa-circle-xmark" aria-hidden="true" />
          Overdue
        </Badge>
      </Row>
    </Section>
  );
}
