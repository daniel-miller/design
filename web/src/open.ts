// ?open=<id> starts that one overlay open, so a headless capture can show it. Only one at a time:
// modal overlays take focus and pointer events from everything else.
export function startsOpen(id: string): boolean {
  return new URLSearchParams(location.search).get("open") === id;
}
