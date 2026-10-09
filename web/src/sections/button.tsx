import { Button } from "@/components/ui/button";
import { Row, Section } from "../specimen";

export function ButtonSection() {
  return (
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
      <Row label="With icon">
        <Button>
          <i className="fa-sharp fa-regular fa-plus" aria-hidden="true" />
          Add learner
        </Button>
        <Button variant="outline">
          <i className="fa-sharp fa-regular fa-download" aria-hidden="true" />
          Export
        </Button>
      </Row>
      <Row label="Disabled">
        <Button disabled>Save changes</Button>
        <Button variant="outline" disabled>
          Cancel
        </Button>
      </Row>
    </Section>
  );
}
