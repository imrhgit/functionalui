import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const lib = join(root, "lib");
const entries = join(lib, "entries");

// Each entry: path=subpath, exports=[{name,source}]
// source is relative to lib/
const E = [
  {
    path: "container",
    exports: [
      { name: "Container", source: "styles/styled/container/component" },
      { name: "ContainerRef", source: "styles/styled/container/componentRef" },
    ],
  },
  {
    path: "layout",
    exports: [
      { name: "Layout", source: "styles/styled/layout/component" },
      { name: "LayoutRef", source: "styles/styled/layout/componentRef" },
    ],
  },
  {
    path: "styled/button",
    exports: [
      { name: "F__Button", source: "styles/styled/button/component" },
      { name: "F__ButtonRef", source: "styles/styled/button/componentRef" },
    ],
  },
  {
    path: "styled/inputs/text",
    exports: [
      { name: "F__TextInput", source: "styles/styled/inputs/text/component" },
      { name: "F__TextInputRef", source: "styles/styled/inputs/text/componentRef" },
    ],
  },
  {
    path: "styled/inputs/text-area",
    exports: [
      { name: "F__TextArea", source: "styles/styled/inputs/textArea/component" },
      { name: "F__TextAreaRef", source: "styles/styled/inputs/textArea/componentRef" },
    ],
  },
  {
    path: "styled/li",
    exports: [
      { name: "F__Li", source: "styles/styled/li/component" },
      { name: "F__LiRef", source: "styles/styled/li/componentRef" },
    ],
  },
  {
    path: "styled/ul",
    exports: [
      { name: "F__Ul", source: "styles/styled/ul/component" },
      { name: "F__UlRef", source: "styles/styled/ul/componentRef" },
    ],
  },
  {
    path: "texts/h1",
    exports: [
      { name: "Text_H1", source: "styles/styled/texts/h1/component" },
      { name: "Text_H1Ref", source: "styles/styled/texts/h1/componentRef" },
    ],
  },
  {
    path: "texts/h2",
    exports: [
      { name: "Text_H2", source: "styles/styled/texts/h2/component" },
      { name: "Text_H2Ref", source: "styles/styled/texts/h2/componentRef" },
    ],
  },
  {
    path: "texts/h3",
    exports: [
      { name: "Text_H3", source: "styles/styled/texts/h3/component" },
      { name: "Text_H3Ref", source: "styles/styled/texts/h3/componentRef" },
    ],
  },
  {
    path: "texts/h4",
    exports: [
      { name: "Text_H4", source: "styles/styled/texts/h4/component" },
      { name: "Text_H4Ref", source: "styles/styled/texts/h4/componentRef" },
    ],
  },
  {
    path: "texts/h5",
    exports: [
      { name: "Text_H5", source: "styles/styled/texts/h5/component" },
      { name: "Text_H5Ref", source: "styles/styled/texts/h5/componentRef" },
    ],
  },
  {
    path: "texts/h6",
    exports: [
      { name: "Text_H6", source: "styles/styled/texts/h6/component" },
      { name: "Text_H6Ref", source: "styles/styled/texts/h6/componentRef" },
    ],
  },
  {
    path: "texts/p",
    exports: [
      { name: "Text_P", source: "styles/styled/texts/p/component" },
      { name: "Text_PRef", source: "styles/styled/texts/p/componentRef" },
    ],
  },
  {
    path: "texts/span",
    exports: [
      { name: "Text_Span", source: "styles/styled/texts/span/component" },
      { name: "Text_SpanRef", source: "styles/styled/texts/span/componentRef" },
    ],
  },
  {
    path: "texts/header",
    exports: [
      { name: "Text_Header", source: "styles/styled/texts/header/component" },
      { name: "Text_HeaderRef", source: "styles/styled/texts/header/componentRef" },
    ],
  },
  { path: "div-measure", exports: [{ name: "DivMeasure", source: "components/divMeasure/DivMeasure" }] },
  {
    path: "loading-spinner",
    exports: [
      { name: "LoadingSpinner", source: "components/loadings/LoadingSpinner" },
      { name: "Spinner", source: "components/loadings/Spinner" },
    ],
  },
  { path: "spring-open-close-height", exports: [{ name: "SpringOpenCloseHeight", source: "components/springAnimations/SpringOpenCloseHeight" }] },
  { path: "spring-enter", exports: [{ name: "SpringEnter", source: "components/springAnimations/springTransitions/SpringEnter" }] },
  { path: "spring-enter-offset-by", exports: [{ name: "SpringEnterOffsetBy", source: "components/springAnimations/springTransitions/SpringEnterOffsetBy" }] },
  { path: "spring-menu-transition", exports: [{ name: "SpringMenuTransition", source: "components/springAnimations/springTransitions/SpringMenuTransition" }] },
  { path: "icons", exports: [{ name: "UIcon", source: "components/icons/UIcon" }] },
  { path: "contexts/ui", exports: [{ name: "ProvideUiContext", source: "contexts/ui/UiContexts", defaultExport: false }, { name: "useUiContext", source: "contexts/ui/UiContexts", defaultExport: false }] },
  { path: "contexts/notifications", exports: [{ name: "ProvideGlobalEventContext", source: "contexts/notifications/GlobalEventContext", defaultExport: false }, { name: "useGlobalEventContext", source: "contexts/notifications/GlobalEventContext", defaultExport: false }] },
  { path: "admonition", exports: [{ name: "Admonition", source: "components/ui/admonition/Admonition" }] },
  { path: "avatar", exports: [{ name: "Avatar", source: "components/ui/avatar/Avatar" }] },
  { path: "avatar-group", exports: [{ name: "AvatarGroup", source: "components/ui/avatarGroup/AvatarGroup" }] },
  { path: "button", exports: [{ name: "Button", source: "components/ui/buttons/Button" }] },
  { path: "checkboxes", exports: [{ name: "Checkboxes", source: "components/ui/checkboxes/Checkboxes" }] },
  { path: "checkbox", exports: [{ name: "Checkbox", source: "components/ui/checkboxes/checkbox/Checkbox" }] },
  { path: "chip", exports: [{ name: "Chip", source: "components/ui/chip/Chip" }] },
  { path: "tag-color", exports: [{ name: "TagColor", source: "components/ui/tags/TagColor" }] },
  { path: "color-picker", exports: [{ name: "ColorPicker", source: "components/ui/colorPicker/ColorPicker" }] },
  { path: "gallery-modal", exports: [{ name: "GalleryModal", source: "components/ui/galleryModal/GalleryModal" }] },
  { path: "label-text", exports: [{ name: "LabelText", source: "components/ui/label/LabelText" }] },
  { path: "modal", exports: [{ name: "Modal", source: "components/ui/modals/Modal" }] },
  { path: "global-event-portal", exports: [{ name: "GlobalEventPortal", source: "components/ui/portals/GlobalEventPortal" }] },
  { path: "portals", exports: [{ name: "FunctionalUiPortals", source: "components/ui/portals/types" }] },
  { path: "input-image", exports: [{ name: "InputImage", source: "components/ui/inputs/image/InputImage" }] },
  { path: "radio", exports: [{ name: "Radio", source: "components/ui/inputs/radio/Radio" }] },
  { path: "input-text", exports: [{ name: "InputText", source: "components/ui/inputs/text/InputText" }] },
  { path: "text-area", exports: [{ name: "TextArea", source: "components/ui/inputs/textArea/TextArea" }] },
  { path: "inset-group", exports: [{ name: "InsetGroup", source: "components/ui/insetGroup/InsetGroup" }] },
  {
    path: "notification-system",
    exports: [{ name: "NotificationSystem", source: "components/ui/notifications/NotificationSystem" }],
  },
  { path: "select-spring", exports: [{ name: "SelectSpring", source: "components/ui/selectSpring/SelectSpring" }] },
  { path: "table-grid", exports: [{ name: "TableGrid", source: "components/ui/tableGrid/TableGrid" }] },
  { path: "table-row", exports: [{ name: "TableRow", source: "components/ui/tableGrid/components/tableRow/TableRow" }] },
  { path: "table-header", exports: [{ name: "TableHeader", source: "components/ui/tableGrid/components/tableHeader/TableHeader" }] },
  { path: "tabs", exports: [{ name: "Tabs", source: "components/ui/tabs/Tabs" }] },
  { path: "toggle-switch", exports: [{ name: "ToggleSwitch", source: "components/ui/toggleSwitch/ToggleSwitch" }] },
];

function depth(p) {
  return p.split("/").length - 1;
}

function relFromDist(p) {
  const d = depth(p);
  return d === 0 ? "./main" : "../".repeat(d) + "main";
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
      const hasDefault = x.defaultExport !== false;
      return hasDefault
        ? `export { default as ${x.name} } from "${s}";`
        : `export { ${x.name} } from "${s}";`;
    });

  writeFileSync(join(dir, "index.ts"), lines.join("\n") + "\n", "utf-8");
}

// --- Generate dist/ wrapper files ---
for (const entry of E) {
  const dir = join(dist, entry.path);
  mkdirSync(dir, { recursive: true });

  const jsPath = join(dir, "index.mjs");
  const cjsPath = join(dir, "index.cjs");
  const dtsPath = join(dir, "index.d.ts");

  const names = entry.exports.map((x) => x.name).join(", ");
  const relative = relFromDist(entry.path);

  writeFileSync(jsPath, `export { ${names} } from "${relative}.js";\n`, "utf-8");

  const cjsContent = `"use strict";
var main = require("${relative}.cjs");
${entry.exports.map((x) => `exports.${x.name} = main.${x.name};`).join("\n")}
`;
  writeFileSync(cjsPath, cjsContent, "utf-8");

  writeFileSync(dtsPath, `export { ${names} } from "${relative}";\n`, "utf-8");
}
