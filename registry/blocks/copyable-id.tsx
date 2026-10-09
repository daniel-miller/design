import { useEffect, useState } from "react";

/**
 * A machine identifier, demoted out of the field grid and made copyable.
 *
 * The copy control is an icon rather than a labelled button: two of these often sit side by side
 * on a detail page, and two buttons reading "Copy" carry more weight than the ids they copy. An icon has no label to promise feedback, so the confirmation is the icon
 * itself turning into a check for a moment.
 *
 * Each instance owns its copied state, so confirming one id does not flip the icon beside another.
 */
export function CopyableId({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1400);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <span className="flex items-center gap-2">
      <span className="text-muted-foreground text-xs">{label}</span>
      <span className="bg-muted text-muted-foreground rounded px-1.5 py-0.5 font-mono text-xs">
        {value}
      </span>
      <button
        type="button"
        aria-label={copied ? "Copied" : `Copy ${label}`}
        title={copied ? "Copied" : "Copy"}
        className="text-muted-foreground hover:bg-muted hover:text-primary focus-visible:ring-primary rounded p-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
        }}
      >
        <i
          className={
            copied ? "fa-sharp fa-regular fa-check text-success" : "fa-sharp fa-regular fa-copy"
          }
          aria-hidden="true"
        />
      </button>
    </span>
  );
}
