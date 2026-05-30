import { existsSync, mkdirSync, renameSync, unlinkSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");

const E = [
  "container",
  "layout",
  "styled/button",
  "styled/inputs/text",
  "styled/inputs/text-area",
  "styled/li",
  "styled/ul",
  "texts/p",
  "texts/span",
  "texts/header",
  "div-measure",
  "loading-spinner",
  "spring-open-close-height",
  "spring-enter",
  "spring-enter-offset-by",
  "spring-menu-transition",
  "icons",
  "contexts/ui",
  "contexts/notifications",
  "admonition",
  "avatar",
  "avatar-group",
  "button",
  "checkboxes",
  "checkbox",
  "chip",
  "tag-color",
  "color-picker",
  "gallery-modal",
  "label-text",
  "modal",
  "global-event-portal",
  "portals",
  "input-image",
  "radio",
  "input-text",
  "text-area",
  "inset-group",
  "notification-system",
  "select-spring",
  "table-grid",
  "table-row",
  "table-header",
  "tabs",
  "toggle-switch",
  "css",
];

for (const p of E) {
  const src = join(dist, `${p}.d.ts`);
  const dstDir = join(dist, p);
  const dst = join(dstDir, "index.d.ts");
  if (existsSync(src)) {
    mkdirSync(dstDir, { recursive: true });
    renameSync(src, dst);
  }
}

// Clean up any remaining .d.ts files in dist/ root that don't have a matching entry
const keep = new Set(E.map((p) => `${p}.d.ts`));
keep.add("types.d.ts");
for (const f of readdirSync(dist)) {
  if (f.endsWith(".d.ts") && !keep.has(f)) {
    unlinkSync(join(dist, f));
  }
}
