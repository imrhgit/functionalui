import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const lib = join(root, "lib");
const entries = join(lib, "entries");

// Each entry: path=subpath, exports=[{name,source}]
// source is relative to lib/
const E = [
  {
    path: "container",
    exports: [
      { name: "Container", source: "styles/styled/container/component" },
    ],
  },
  {
    path: "layout",
    exports: [
      { name: "Layout", source: "styles/styled/layout/component" },
    ],
  },
  {
    path: "styled/button",
    exports: [
      { name: "F__Button", source: "styles/styled/button/component" },
    ],
  },
  {
    path: "styled/inputs/text",
    exports: [
      { name: "F__TextInput", source: "styles/styled/inputs/text/component" },
    ],
  },
  {
    path: "styled/inputs/text-area",
    exports: [
      { name: "F__TextArea", source: "styles/styled/inputs/textArea/component" },
    ],
  },
  {
    path: "styled/li",
    exports: [
      { name: "F__Li", source: "styles/styled/li/component" },
    ],
  },
  {
    path: "styled/ul",
    exports: [
      { name: "F__Ul", source: "styles/styled/ul/component" },
    ],
  },
  {
    path: "texts/p",
    exports: [
      { name: "Text_P", source: "styles/styled/texts/p/component" },
    ],
  },
  {
    path: "texts/span",
    exports: [
      { name: "Text_Span", source: "styles/styled/texts/span/component" },
    ],
  },
  {
    path: "texts/header",
    exports: [
      { name: "Text_Header", source: "styles/styled/texts/header/component" },
    ],
  },
  { path: "div-measure", useClient: true, exports: [{ name: "DivMeasure", source: "components/divMeasure/DivMeasure" }] },
  {
    path: "loading-spinner",
    useClient: true,
    exports: [
      { name: "LoadingSpinner", source: "components/loadings/LoadingSpinner" },
      { name: "Spinner", source: "components/loadings/Spinner" },
    ],
  },
  { path: "spring-open-close-height", useClient: true, exports: [{ name: "SpringOpenCloseHeight", source: "components/springAnimations/SpringOpenCloseHeight" }] },
  { path: "spring-enter", useClient: true, exports: [{ name: "SpringEnter", source: "components/springAnimations/springTransitions/SpringEnter" }] },
  { path: "spring-enter-offset-by", useClient: true, exports: [{ name: "SpringEnterOffsetBy", source: "components/springAnimations/springTransitions/SpringEnterOffsetBy" }] },
  { path: "spring-menu-transition", useClient: true, exports: [{ name: "SpringMenuTransition", source: "components/springAnimations/springTransitions/SpringMenuTransition" }] },
  { path: "icons", useClient: true, exports: [{ name: "UIcon", source: "components/icons/UIcon" }] },
  { path: "contexts/ui", useClient: true, exports: [{ name: "ProvideUiContext", source: "contexts/ui/UiContexts", defaultExport: false }, { name: "useUiContext", source: "contexts/ui/UiContexts", defaultExport: false }] },
  { path: "contexts/notifications", useClient: true, exports: [{ name: "ProvideGlobalEventContext", source: "contexts/notifications/GlobalEventContext", defaultExport: false }, { name: "useGlobalEventContext", source: "contexts/notifications/GlobalEventContext", defaultExport: false }] },
  { path: "admonition", exports: [{ name: "Admonition", source: "components/ui/admonition/Admonition" }] },
  { path: "avatar", exports: [{ name: "Avatar", source: "components/ui/avatar/Avatar" }] },
  { path: "avatar-group", exports: [{ name: "AvatarGroup", source: "components/ui/avatarGroup/AvatarGroup" }] },
  { path: "button", exports: [{ name: "Button", source: "components/ui/buttons/Button" }] },
  { path: "checkboxes", exports: [{ name: "Checkboxes", source: "components/ui/checkboxes/Checkboxes" }] },
  { path: "checkbox", exports: [{ name: "Checkbox", source: "components/ui/checkboxes/checkbox/Checkbox" }] },
  { path: "chip", exports: [{ name: "Chip", source: "components/ui/chip/Chip" }] },
  { path: "tag-color", exports: [{ name: "TagColor", source: "components/ui/tags/TagColor" }] },
  { path: "color-picker", exports: [{ name: "ColorPicker", source: "components/ui/colorPicker/ColorPicker" }] },
  { path: "gallery-modal", useClient: true, exports: [{ name: "GalleryModal", source: "components/ui/galleryModal/GalleryModal" }] },
  { path: "input-image", useClient: true, exports: [{ name: "InputImage", source: "components/ui/inputs/image/InputImage" }] },
  { path: "radio", useClient: true, exports: [{ name: "Radio", source: "components/ui/inputs/radio/Radio" }] },
  { path: "input-text", useClient: true, exports: [{ name: "InputText", source: "components/ui/inputs/text/InputText" }] },
  { path: "text-area", useClient: true, exports: [{ name: "TextArea", source: "components/ui/inputs/textArea/TextArea" }] },
  { path: "inset-group", useClient: true, exports: [{ name: "InsetGroup", source: "components/ui/insetGroup/InsetGroup" }] },
  { path: "notification-system", useClient: true, exports: [{ name: "NotificationSystem", source: "components/ui/notifications/NotificationSystem" }] },
  { path: "select-spring", useClient: true, exports: [{ name: "SelectSpring", source: "components/ui/selectSpring/SelectSpring" }] },
  { path: "table-grid", useClient: true, exports: [{ name: "TableGrid", source: "components/ui/tableGrid/TableGrid" }] },
  { path: "table-row", exports: [{ name: "TableRow", source: "components/ui/tableGrid/components/tableRow/TableRow" }] },
  { path: "table-header", exports: [{ name: "TableHeader", source: "components/ui/tableGrid/components/tableHeader/TableHeader" }] },
  { path: "tabs", exports: [{ name: "Tabs", source: "components/ui/tabs/Tabs" }] },
  { path: "toggle-switch", exports: [{ name: "ToggleSwitch", source: "components/ui/toggleSwitch/ToggleSwitch" }] },
];

function depth(p) {
  return p.split("/").length - 1;
}

function relFromEntries(p) {
  const d = depth(p);
  return "../".repeat(d + 2);
}

// --- Generate lib/entries/ source barrel files ---
for (const entry of E) {
  const dir = join(entries, entry.path);
  mkdirSync(dir, { recursive: true });

  const lines = entry.exports
    .filter((x) => x.source)
    .map((x) => {
      const s = relFromEntries(entry.path) + x.source;
      if (x.sourceName) {
        return `export { ${x.sourceName} as ${x.name} } from "${s}";`;
      }
      const hasDefault = x.defaultExport !== false;
      if (hasDefault) {
        return `export { default as ${x.name} } from "${s}";`;
      } else {
        return `export { ${x.name} } from "${s}";`;
      }
    });

  const header = entry.useClient ? '"use client";\n\n' : "";
  writeFileSync(join(dir, "index.ts"), header + lines.join("\n") + "\n", "utf-8");
}
