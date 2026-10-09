import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { startsOpen } from "../open";
import { Row, Section } from "../specimen";

export function SelectSection() {
  return (
    <Section id="select" title="Select">
      <Row label="Default">
        <Select defaultValue="calgary" defaultOpen={startsOpen("select")}>
          <SelectTrigger className="w-56" aria-label="Site">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Alberta</SelectLabel>
              <SelectItem value="calgary">Calgary office</SelectItem>
              <SelectItem value="rimbey">Rimbey gas plant</SelectItem>
              <SelectItem value="strachan">Strachan gas plant</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>British Columbia</SelectLabel>
              <SelectItem value="pipestone">Pipestone</SelectItem>
              <SelectItem value="closed" disabled>
                Fort St. John (closed)
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-56" aria-label="Status">
            <SelectValue placeholder="Any status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="valid">Valid</SelectItem>
            <SelectItem value="expiring">Expiring</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
          </SelectContent>
        </Select>
      </Row>
      <Row label="Disabled">
        <Select disabled defaultValue="calgary">
          <SelectTrigger className="w-56" aria-label="Site, locked">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="calgary">Calgary office</SelectItem>
          </SelectContent>
        </Select>
      </Row>
    </Section>
  );
}

export function DropdownMenuSection() {
  const [showArchived, setShowArchived] = useState(false);
  const [sort, setSort] = useState("name");

  return (
    <Section id="dropdown-menu" title="Dropdown menu">
      <Row label="Actions">
        <DropdownMenu defaultOpen={startsOpen("dropdown-menu")}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Options
              <i className="fa-sharp fa-regular fa-chevron-down text-xs" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>Learner</DropdownMenuLabel>
            <DropdownMenuItem>
              <i className="fa-sharp fa-regular fa-pen" aria-hidden="true" />
              Edit profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <i className="fa-sharp fa-regular fa-envelope" aria-hidden="true" />
              Send invitation
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <i className="fa-sharp fa-regular fa-key" aria-hidden="true" />
              Reset password
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={showArchived} onCheckedChange={setShowArchived}>
              Show archived
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
              <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="expiry">Expiry date</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-danger">
              <i className="fa-sharp fa-regular fa-box-archive" aria-hidden="true" />
              Archive learner
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Row>
    </Section>
  );
}

export function PopoverTooltipSection() {
  return (
    <Section id="popover" title="Popover and tooltip">
      <Row label="Popover">
        <Popover defaultOpen={startsOpen("popover")}>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <i className="fa-sharp fa-regular fa-circle-info" aria-hidden="true" />
              Why is this expiring?
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 text-sm">
            H2S Alive is valid for three years from the issue date. This ticket was issued{" "}
            <span className="font-mono">2023-11-20</span>, so it lapses in six weeks.
          </PopoverContent>
        </Popover>
      </Row>
      <Row label="Tooltip">
        <Tooltip defaultOpen={startsOpen("tooltip")}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Download certificate">
              <i className="fa-sharp fa-regular fa-download" aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Download certificate</TooltipContent>
        </Tooltip>
      </Row>
    </Section>
  );
}

export function DialogSheetSection() {
  return (
    <Section id="dialog" title="Dialog and sheet">
      <Row label="Dialog">
        <Dialog defaultOpen={startsOpen("dialog")}>
          <DialogTrigger asChild>
            <Button>Rename course</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Rename course</DialogTitle>
              <DialogDescription>Learners see the new name on their next sign-in</DialogDescription>
            </DialogHeader>
            <div className="space-y-1.5">
              <Label htmlFor="course-name">Course name</Label>
              <Input id="course-name" defaultValue="H2S Alive" />
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Rename</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Row>
      <Row label="Sheet">
        <Sheet defaultOpen={startsOpen("sheet")}>
          <SheetTrigger asChild>
            <Button variant="outline">Open filters</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Narrow the ticket list</SheetDescription>
            </SheetHeader>
            <div className="space-y-1.5">
              <Label htmlFor="sheet-search">Learner name</Label>
              <Input id="sheet-search" placeholder="Jordan Lee" />
            </div>
          </SheetContent>
        </Sheet>
      </Row>
    </Section>
  );
}
