import { readFileSync, writeFileSync } from "fs";
import { glob } from "glob";

// Map of export name → subpath (must match generate-subpath-exports.mjs)
const EXPORT_TO_SUBPATH = {
  Container: "container",
  ContainerRef: "container",
  Layout: "layout",
  LayoutRef: "layout",
  F__Button: "styled/button",
  F__ButtonRef: "styled/button",
  F__TextInput: "styled/inputs/text",
  F__TextInputRef: "styled/inputs/text",
  F__TextArea: "styled/inputs/text-area",
  F__TextAreaRef: "styled/inputs/text-area",
  F__Li: "styled/li",
  F__LiRef: "styled/li",
  F__Ul: "styled/ul",
  F__UlRef: "styled/ul",
  Text_H1: "texts/h1",
  Text_H1Ref: "texts/h1",
  Text_H2: "texts/h2",
  Text_H2Ref: "texts/h2",
  Text_H3: "texts/h3",
  Text_H3Ref: "texts/h3",
  Text_H4: "texts/h4",
  Text_H4Ref: "texts/h4",
  Text_H5: "texts/h5",
  Text_H5Ref: "texts/h5",
  Text_H6: "texts/h6",
  Text_H6Ref: "texts/h6",
  Text_P: "texts/p",
  Text_PRef: "texts/p",
  Text_Span: "texts/span",
  Text_SpanRef: "texts/span",
  Text_Header: "texts/header",
  Text_HeaderRef: "texts/header",
  DivMeasure: "div-measure",
  LoadingSpinner: "loading-spinner",
  Spinner: "loading-spinner",
  SpringOpenCloseHeight: "spring-open-close-height",
  SpringEnter: "spring-enter",
  SpringEnterOffsetBy: "spring-enter-offset-by",
  SpringMenuTransition: "spring-menu-transition",
  UIcon: "icons",
  ProvideUiContext: "contexts/ui",
  useUiContext: "contexts/ui",
  ProvideGlobalEventContext: "contexts/notifications",
  useGlobalEventContext: "contexts/notifications",
  Admonition: "admonition",
  Avatar: "avatar",
  AvatarGroup: "avatar-group",
  Button: "button",
  Checkboxes: "checkboxes",
  Checkbox: "checkbox",
  Chip: "chip",
  TagColor: "tag-color",
  ColorPicker: "color-picker",
  GalleryModal: "gallery-modal",
  LabelText: "label-text",
  Modal: "modal",
  GlobalEventPortal: "global-event-portal",
  FunctionalUiPortals: "portals",
  InputImage: "input-image",
  Radio: "radio",
  InputText: "input-text",
  TextArea: "text-area",
  InsetGroup: "inset-group",
  NotificationSystem: "notification-system",
  SelectSpring: "select-spring",
  TableGrid: "table-grid",
  TableRow: "table-row",
  TableHeader: "table-header",
  Tabs: "tabs",
  ToggleSwitch: "toggle-switch",
};

// Matches: import { ... } from "functionalui";
// Handles multi-line and aliases like "X as Y"
const IMPORT_RE = /import\s*\{([^}]+)\}\s*from\s+"functionalui";?/g;

function parseSpecifiers(body) {
  // body is the content inside { ... }
  // Split by comma, trim each specifier
  const parts = body.split(",").map((s) => s.trim()).filter(Boolean);
  return parts.map((part) => {
    const asMatch = part.match(/^(\S+)\s+as\s+(\S+)$/);
    if (asMatch) {
      return { exportName: asMatch[1], localName: asMatch[2] };
    }
    return { exportName: part, localName: part };
  });
}

function migrateFile(filePath) {
  const original = readFileSync(filePath, "utf-8");
  let content = original;

  const matches = content.matchAll(IMPORT_RE);
  let modified = false;

  // Collect all matches and process them (iterate in reverse order to preserve positions)
  const replacements = [];
  for (const match of matches) {
    const fullMatch = match[0];
    const specifiersBody = match[1];
    const startIdx = match.index;
    const endIdx = startIdx + fullMatch.length;

    const specifiers = parseSpecifiers(specifiersBody);

    // Group specifiers by subpath
    const bySubpath = new Map();
    for (const spec of specifiers) {
      const subpath = EXPORT_TO_SUBPATH[spec.exportName];
      if (!subpath) {
        console.error(`  ⚠ Unknown export "${spec.exportName}" in ${filePath}`);
        return;
      }
      if (!bySubpath.has(subpath)) {
        bySubpath.set(subpath, []);
      }
      bySubpath.get(subpath).push(spec);
    }

    // Generate new import statements grouped by subpath
    const newImports = [];
    for (const [subpath, specs] of bySubpath) {
      const specifiersStr = specs
        .map((s) =>
          s.exportName === s.localName
            ? s.exportName
            : `${s.exportName} as ${s.localName}`,
        )
        .join(", ");
      newImports.push(`import { ${specifiersStr} } from "functionalui/${subpath}";`);
    }
    const replacement = newImports.join("\n");

    replacements.push({ startIdx, endIdx, replacement });
    modified = true;
  }

  if (!modified) return false;

  // Apply replacements in reverse order to maintain indices
  replacements.sort((a, b) => b.startIdx - a.startIdx);
  for (const { startIdx, endIdx, replacement } of replacements) {
    content = content.slice(0, startIdx) + replacement + content.slice(endIdx);
  }

  writeFileSync(filePath, content, "utf-8");
  console.log(`  ✓ ${filePath}`);
  return true;
}

// Main
const args = process.argv.slice(2);
const searchPath = args[0] || "lib/**/*.{ts,tsx}";

const files = await glob(searchPath, { ignore: "node_modules/**" });
let count = 0;

for (const file of files) {
  const content = readFileSync(file, "utf-8");
  if (IMPORT_RE.test(content)) {
    IMPORT_RE.lastIndex = 0; // reset since test() advances lastIndex
    if (migrateFile(file)) count++;
  }
}

console.log(`\nDone. ${count} files updated.`);
