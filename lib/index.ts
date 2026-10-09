// The library entry the Claude Design converter reads: every registry component, block, and
// helper, re-exported from the registry sources in place. Relative paths rather than @/: the
// declaration rollup resolves a path alias to its first target only, and blocks are the fallback.

// Vite extracts this into dist/styles.css rather than leaving an import in dist/index.js.
import "./styles.css";

export * from "../registry/ui/badge";
export * from "../registry/ui/button";
export * from "../registry/ui/calendar";
export * from "../registry/ui/card";
export * from "../registry/ui/checkbox";
export * from "../registry/ui/dialog";
export * from "../registry/ui/dropdown-menu";
export * from "../registry/ui/file-dropzone";
export * from "../registry/ui/input";
export * from "../registry/ui/label";
export * from "../registry/ui/popover";
export * from "../registry/ui/select";
export * from "../registry/ui/sheet";
export * from "../registry/ui/skeleton";
export * from "../registry/ui/slider";
export * from "../registry/ui/table";
export * from "../registry/ui/tabs";
export * from "../registry/ui/textarea";
export * from "../registry/ui/toaster";
export * from "../registry/ui/tooltip";
export * from "../registry/blocks/confirm-dialog";
export * from "../registry/blocks/copyable-id";
export * from "../registry/blocks/danger-zone";
export * from "../registry/blocks/page-container";
export * from "../registry/blocks/page-header";
export * from "../registry/lib/cn";
export * from "../registry/lib/dates";
