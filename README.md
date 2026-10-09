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
- `registry.json` - the shadcn registry manifest; `npm run build:registry` writes it to
  `public/r/`, which is what gets published to R2.
- `docs/` - visual foundations and page guidelines.
- `web/` - the specimen app: every component, in every palette, rendered from the registry
  sources.
- `lib/` - `@daniel-miller/design`, the registry built as one library (`npm run build:lib`) for
  the Claude Design converter. Its `dist/styles.css` is the cmds palette with the fonts and Font
  Awesome inlined, compiled from the classes in the registry and the specimen.

## Using it in an app

The registry is namespaced `@design`. Without the namespace, a bare name such as `button` in
`registryDependencies` resolves to shadcn's own registry, not this one. Add it to the app's
`components.json`:

```json
"registries": {
  "@design": "https://<registry host>/r/{name}.json"
}
```

Then install a palette (it pulls in `tokens`) and whatever primitives the app needs:

```powershell
npx shadcn add @design/palette-cmds @design/button @design/dialog @design/confirm-dialog
```

The CSS lands in `src/styles/design/`, and the app's `globals.css` imports it after Tailwind:

```css
@import "tailwindcss";
@import "./design/base.css";
@import "./design/palettes/cmds.css";
```

Sources import `@/lib/cn` and `@/components/ui/*`, the paths every app's `components.json`
already maps. The CLI rewrites them to the app's own aliases, so an app with different aliases
still gets working imports. Every registry component lands in `components/ui/`, blocks included,
so anything in that folder came from here and anything outside it is the app's own.

Font Awesome Pro is not a registry dependency, because installing it needs the Pro npm token. Each
app installs `@fortawesome/fontawesome-pro` and imports `fontawesome.min.css` plus the two styles
the registry uses, `sharp-regular.min.css` and `sharp-solid.min.css`.

## Running the specimen

The repo root is an npm workspace with `web/` as its one member, so the dependencies hoist to the
root `node_modules`, where the registry sources outside `web/` can resolve them. Installing needs
`FONTAWESOME_NPM_AUTH_TOKEN` set, which `.npmrc` reads:

```powershell
npm install
npm run dev
```

The specimen opens on port 5180. It renders the registry sources in place under the same import
paths an app uses, and swaps whole palette stylesheets from the toolbar.

## Conventions

- Icons are Font Awesome Pro everywhere.
- Components reference semantic tokens only (`bg-primary`, `text-foreground`, `border-border`),
  never raw colours, so a palette file is all an app needs to change its look.
