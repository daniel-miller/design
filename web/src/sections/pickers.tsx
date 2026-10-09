import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { formatDate } from "@/lib/dates";
import { Row, Section } from "../specimen";

export function SliderSection() {
  const [score, setScore] = useState([80]);

  return (
    <Section id="slider" title="Slider">
      <div className="max-w-sm space-y-2">
        <div className="flex items-center justify-between">
          <Label>Pass mark</Label>
          <span className="text-sm tabular-nums">{score[0]} percent</span>
        </div>
        <Slider value={score} onValueChange={setScore} min={50} max={100} step={5} />
      </div>
      <Row label="Disabled">
        <Slider className="max-w-sm" defaultValue={[60]} disabled />
      </Row>
    </Section>
  );
}

export function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 9, 14));

  return (
    <Section id="calendar" title="Calendar">
      <div className="flex flex-wrap items-start gap-6">
        <div className="border-border rounded-lg border">
          <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date} />
        </div>
        <div className="border-border rounded-lg border">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            startMonth={new Date(2020, 0)}
            endMonth={new Date(2030, 11)}
            defaultMonth={new Date(2026, 9)}
          />
        </div>
        <p className="text-muted-foreground text-sm">
          Selected{" "}
          <span className="font-mono">{date ? formatDate(date.toISOString()) : "none"}</span>
        </p>
      </div>
    </Section>
  );
}

export function FileDropzoneSection() {
  const [file, setFile] = useState<string | null>(null);

  return (
    <Section id="file-dropzone" title="File dropzone">
      <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
        <FileDropzone
          label="Drop a SCORM package or click to choose"
          hint="A .zip file up to 500 MB"
          accept=".zip"
          onFile={(f) => setFile(f.name)}
        />
        <FileDropzone
          label="Uploads paused"
          hint="The storage quota is full"
          disabled
          onFile={() => {}}
        />
      </div>
      {file && (
        <p className="text-muted-foreground text-sm">
          Chose <span className="font-mono">{file}</span>
        </p>
      )}
    </Section>
  );
}
