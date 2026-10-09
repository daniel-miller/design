import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Row, Section } from "../specimen";

export function InputSection() {
  return (
    <Section id="input" title="Input and textarea">
      <div className="grid max-w-xl gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Jordan Lee" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="handle">Handle</Label>
          <Input id="handle" defaultValue="keyera-calgary" className="font-mono" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="issued">Issued</Label>
          <Input id="issued" type="date" defaultValue="2025-11-05" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="locked">Employee number</Label>
          <Input id="locked" defaultValue="100482" disabled className="font-mono" />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" placeholder="Anything the assessor should know" rows={3} />
        </div>
      </div>
    </Section>
  );
}

export function CheckboxSection() {
  return (
    <Section id="checkbox" title="Checkbox">
      <Row label="States">
        <div className="flex items-center gap-2">
          <Checkbox id="c1" />
          <Label htmlFor="c1">Unchecked</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="c2" defaultChecked />
          <Label htmlFor="c2">Checked</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="c3" checked="indeterminate" />
          <Label htmlFor="c3">Indeterminate</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="c4" disabled defaultChecked />
          <Label htmlFor="c4">Disabled</Label>
        </div>
      </Row>
      <Row label="Native">
        {/* base.css themes every native checkbox, so plain inputs match the palette too. */}
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked /> Send reminders
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" disabled /> Disabled
        </label>
      </Row>
    </Section>
  );
}
