# Design

When you start a new web app, the fastest path is to copy `globals.css` and the `components/ui`
folder from the last one. Four apps have done that so far - `cmds-app/platform`, `bump`,
`festival`, and `openscorm/platform` - and the copies have drifted: 17, 14, 15, and 11 primitives,
with the same 14 core colour tokens underneath and a different accent in each.

This repo is the single source those copies come from. Apps still own their components: they pull
primitives in through the shadcn CLI from a registry published here, and pick a palette for their
accent.

## Layout

- `tokens/base.css` - shared type, radius, spacing, neutrals, and status colours, light and dark.
- `palettes/<app>.css` - one file per app: its accent, plus any neutral overrides.
- `registry/ui/` - the shadcn-style primitives.
- `registry/blocks/` - shared page pieces (page header, page container, copyable id, confirm
  dialog, danger zone).
- `registry/lib/` - `cn.ts` and `dates.ts`.
- `registry.json` - the shadcn registry manifest; `shadcn build` publishes it to R2.
- `docs/` - visual foundations and page guidelines.
- `web/` - the specimen app (every component in every palette) and the library build that
  Claude Design syncs from.

## Conventions

- Icons are Font Awesome Pro everywhere.
- Components reference semantic tokens only (`bg-primary`, `text-foreground`, `border-border`),
  never raw colours, so a palette file is all an app needs to change its look.
