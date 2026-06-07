import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distCssDir = join(__dirname, "..", "dist", "css");

const esmPath = join(distCssDir, "index.mjs");
const cjsPath = join(distCssDir, "index.cjs");

writeFileSync(esmPath, 'import "./index.css";\n');
writeFileSync(cjsPath, '"use strict";\nrequire("./index.css");\n');
