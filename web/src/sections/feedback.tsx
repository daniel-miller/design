import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { CopyableId } from "@/components/ui/copyable-id";
import { DangerZone, DangerZoneItem } from "@/components/ui/danger-zone";
import { startsOpen } from "../open";
import { Row, Section } from "../specimen";

export function ToastSection() {
  return (
    <Section id="toast" title="Toast">
      <Row label="Kinds">
        <Button variant="outline" onClick={() => toast("Course renamed")}>
          Plain
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Invitation sent", { description: "Jordan Lee will get an email in a minute" })
          }
        >
          With description
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Learner archived", { action: { label: "Undo", onClick: () => {} } })
          }
        >
          With action
        </Button>
      </Row>
    </Section>
  );
}

export function ConfirmDialogSection() {
  const [open, setOpen] = useState(startsOpen("confirm-dialog"));
  const [publishOpen, setPublishOpen] = useState(startsOpen("confirm-dialog-default"));
  const [busy, setBusy] = useState(false);

  return (
    <Section id="confirm-dialog" title="Confirm dialog">
      <Row label="Tones">
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete course
        </Button>
        <Button variant="outline" onClick={() => setPublishOpen(true)}>
          Publish revision
        </Button>
      </Row>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Delete course?"
        description="H2S Alive and its 214 enrolments are removed. Issued tickets stay on each learner's record."
        confirmLabel="Delete course"
        busyLabel="Deleting..."
        busy={busy}
        onConfirm={() => {
          setBusy(true);
          setTimeout(() => {
            setBusy(false);
            setOpen(false);
            toast("Course deleted");
          }, 1200);
        }}
      />
      <ConfirmDialog
        open={publishOpen}
        onOpenChange={setPublishOpen}
        tone="default"
        title="Publish revision 4?"
        description="Revision 3 is retired. Learners already enrolled finish on it."
        confirmLabel="Publish revision"
        onConfirm={() => setPublishOpen(false)}
      />
    </Section>
  );
}

export function DangerZoneSection() {
  return (
    <Section id="danger-zone" title="Danger zone">
      <DangerZone className="max-w-2xl">
        <DangerZoneItem
          title="Archive company"
          description="Learners lose access; records are kept"
          action={
            <Button variant="outline" size="sm">
              Archive
            </Button>
          }
        />
        <DangerZoneItem
          title="Delete company"
          description="Removes every learner, course, and ticket. This cannot be undone."
          action={
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          }
        />
      </DangerZone>
    </Section>
  );
}

export function CopyableIdSection() {
  return (
    <Section id="copyable-id" title="Copyable id">
      <div className="flex flex-wrap gap-6">
        <CopyableId label="Learner" value="100482" />
        <CopyableId label="Company" value="8f3c2a1e-4b7d-4e9a-b1c6-2d5f7a9e0c13" />
      </div>
    </Section>
  );
}
