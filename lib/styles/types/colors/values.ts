import { ColorPalettes, ColorSets } from "./generics";

const DARK_MODE__COLOR_VALUES: { [key: number]: string } = {
  [ColorPalettes.Transparent]: "#00000000", // "#FFFFFF00"
  // grey
  [ColorPalettes.Grey1]: "hsla(209, 25%, 10%, 1)",
  [ColorPalettes.Grey2]: "hsla(209, 25%, 20%, 1)",
  [ColorPalettes.Grey3]: "hsla(209, 25%, 30%, 1)",
  [ColorPalettes.Grey4]: "hsla(209, 25%, 40%, 1)",
  [ColorPalettes.Grey5]: "hsla(209, 25%, 50%, 1)",
  [ColorPalettes.Grey6]: "hsla(209, 25%, 60%, 1)",
  [ColorPalettes.Grey7]: "hsla(209, 25%, 70%, 1)",
  [ColorPalettes.Grey8]: "hsla(209, 25%, 80%, 1)",
  [ColorPalettes.Grey9]: "hsla(209, 25%, 90%, 1)",
  [ColorPalettes.Grey10]: "hsla(209, 25%, 99%, 1)",
  // primary
  [ColorPalettes.Primary1]: "hsla(209, 100%, 9%, 1)",
  [ColorPalettes.Primary2]: "hsla(209, 100%, 19%, 1)",
  [ColorPalettes.Primary3]: "hsla(209, 100%, 29%, 1)",
  [ColorPalettes.Primary4]: "hsla(209, 100%, 39%, 1)",
  [ColorPalettes.Primary5]: "hsla(209, 100%, 49%, 1)",
  [ColorPalettes.Primary6]: "hsla(209, 100%, 59%, 1)",
  [ColorPalettes.Primary7]: "hsla(209, 100%, 69%, 1)",
  [ColorPalettes.Primary8]: "hsla(209, 100%, 79%, 1)",
  [ColorPalettes.Primary9]: "hsla(209, 100%, 89%, 1)",
  // secondary
  [ColorPalettes.Secondary1]: "hsla(28, 100%, 9%, 1)",
  [ColorPalettes.Secondary2]: "hsla(28, 100%, 19%, 1)",
  [ColorPalettes.Secondary3]: "hsla(28, 100%, 29%, 1)",
  [ColorPalettes.Secondary4]: "hsla(28, 100%, 39%, 1)",
  [ColorPalettes.Secondary5]: "hsla(28, 100%, 49%, 1)",
  [ColorPalettes.Secondary6]: "hsla(28, 100%, 59%, 1)",
  [ColorPalettes.Secondary7]: "hsla(28, 100%, 69%, 1)",
  [ColorPalettes.Secondary8]: "hsla(28, 100%, 79%, 1)",
  [ColorPalettes.Secondary9]: "hsla(28, 100%, 89%, 1)",
  // r g b y o
  [ColorPalettes.Red1]: "hsla(12, 100%, 10%, 1)",
  [ColorPalettes.Red2]: "hsla(12, 100%, 20%, 1)",
  [ColorPalettes.Red3]: "hsla(12, 100%, 30%, 1)",
  [ColorPalettes.Red4]: "hsla(12, 100%, 40%, 1)",
  [ColorPalettes.Red5]: "hsla(12, 100%, 50%, 1)",
  [ColorPalettes.Red6]: "hsla(12, 100%, 60%, 1)",
  [ColorPalettes.Red7]: "hsla(12, 100%, 70%, 1)",
  [ColorPalettes.Red8]: "hsla(12, 100%, 80%, 1)",
  [ColorPalettes.Red9]: "hsla(12, 100%, 90%, 1)",
  [ColorPalettes.Green1]: "hsla(123, 50%, 10%, 1)",
  [ColorPalettes.Green2]: "hsla(123, 50%, 20%, 1)",
  [ColorPalettes.Green3]: "hsla(123, 50%, 30%, 1)",
  [ColorPalettes.Green4]: "hsla(123, 50%, 40%, 1)",
  [ColorPalettes.Green5]: "hsla(123, 50%, 50%, 1)",
  [ColorPalettes.Green6]: "hsla(123, 50%, 60%, 1)",
  [ColorPalettes.Green7]: "hsla(123, 50%, 70%, 1)",
  [ColorPalettes.Green8]: "hsla(123, 50%, 80%, 1)",
  [ColorPalettes.Green9]: "hsla(123, 50%, 90%, 1)",
  [ColorPalettes.Blue1]: "hsla(205, 100%, 10%, 1)",
  [ColorPalettes.Blue2]: "hsla(205, 100%, 20%, 1)",
  [ColorPalettes.Blue3]: "hsla(205, 100%, 30%, 1)",
  [ColorPalettes.Blue4]: "hsla(205, 100%, 40%, 1)",
  [ColorPalettes.Blue5]: "hsla(205, 100%, 50%, 1)",
  [ColorPalettes.Blue6]: "hsla(205, 100%, 60%, 1)",
  [ColorPalettes.Blue7]: "hsla(205, 100%, 70%, 1)",
  [ColorPalettes.Blue8]: "hsla(205, 100%, 80%, 1)",
  [ColorPalettes.Blue9]: "hsla(205, 100%, 90%, 1)",
  [ColorPalettes.Yellow1]: "hsla(42, 100%, 10%, 1)",
  [ColorPalettes.Yellow2]: "hsla(42, 100%, 20%, 1)",
  [ColorPalettes.Yellow3]: "hsla(42, 100%, 30%, 1)",
  [ColorPalettes.Yellow4]: "hsla(42, 100%, 40%, 1)",
  [ColorPalettes.Yellow5]: "hsla(42, 100%, 50%, 1)",
  [ColorPalettes.Yellow6]: "hsla(42, 100%, 60%, 1)",
  [ColorPalettes.Yellow7]: "hsla(42, 100%, 70%, 1)",
  [ColorPalettes.Yellow8]: "hsla(42, 100%, 80%, 1)",
  [ColorPalettes.Yellow9]: "hsla(42, 100%, 90%, 1)",
};

const LIGHT_MODE__COLOR_VALUES: { [key: number]: string } = {
  [ColorPalettes.Transparent]: "#00000000", // "#FFFFFF00"
  // grey
  [ColorPalettes.Grey1]: "hsla(210, 10%, 98%, 1)",
  [ColorPalettes.Grey2]: "hsla(210, 8%, 94%, 1)",
  [ColorPalettes.Grey3]: "hsla(210, 7%, 88%, 1)",
  [ColorPalettes.Grey4]: "hsla(210, 6%, 76%, 1)",
  [ColorPalettes.Grey5]: "hsla(210, 6%, 64%, 1)",
  [ColorPalettes.Grey6]: "hsla(210, 6%, 52%, 1)",
  [ColorPalettes.Grey7]: "hsla(210, 7%, 40%, 1)",
  [ColorPalettes.Grey8]: "hsla(210, 8%, 30%, 1)",
  [ColorPalettes.Grey9]: "hsla(210, 9%, 22%, 1)",
  [ColorPalettes.Grey10]: "hsla(210, 10%, 12%, 1)",
  // primary
  [ColorPalettes.Primary1]: "hsla(209, 90%, 96%, 1)",
  [ColorPalettes.Primary2]: "hsla(209, 85%, 92%, 1)",
  [ColorPalettes.Primary3]: "hsla(209, 80%, 86%, 1)",
  [ColorPalettes.Primary4]: "hsla(209, 75%, 78%, 1)",
  [ColorPalettes.Primary5]: "hsla(209, 72%, 68%, 1)",
  [ColorPalettes.Primary6]: "hsla(209, 70%, 56%, 1)",
  [ColorPalettes.Primary7]: "hsla(209, 68%, 44%, 1)",
  [ColorPalettes.Primary8]: "hsla(209, 66%, 34%, 1)",
  [ColorPalettes.Primary9]: "hsla(209, 64%, 24%, 1)",
  // secondary
  [ColorPalettes.Secondary1]: "hsla(28, 88%, 96%, 1)",
  [ColorPalettes.Secondary2]: "hsla(28, 84%, 92%, 1)",
  [ColorPalettes.Secondary3]: "hsla(28, 78%, 86%, 1)",
  [ColorPalettes.Secondary4]: "hsla(28, 72%, 78%, 1)",
  [ColorPalettes.Secondary5]: "hsla(28, 68%, 68%, 1)",
  [ColorPalettes.Secondary6]: "hsla(28, 64%, 56%, 1)",
  [ColorPalettes.Secondary7]: "hsla(28, 60%, 44%, 1)",
  [ColorPalettes.Secondary8]: "hsla(28, 56%, 34%, 1)",
  [ColorPalettes.Secondary9]: "hsla(28, 52%, 24%, 1)",
  // r g b y o
  [ColorPalettes.Red1]: "hsla(12, 85%, 96%, 1)",
  [ColorPalettes.Red2]: "hsla(12, 80%, 92%, 1)",
  [ColorPalettes.Red3]: "hsla(12, 75%, 86%, 1)",
  [ColorPalettes.Red4]: "hsla(12, 70%, 78%, 1)",
  [ColorPalettes.Red5]: "hsla(12, 68%, 68%, 1)",
  [ColorPalettes.Red6]: "hsla(12, 64%, 56%, 1)",
  [ColorPalettes.Red7]: "hsla(12, 60%, 44%, 1)",
  [ColorPalettes.Red8]: "hsla(12, 56%, 32%, 1)",
  [ColorPalettes.Red9]: "hsla(12, 52%, 22%, 1)",
  [ColorPalettes.Green1]: "hsla(123, 40%, 96%, 1)",
  [ColorPalettes.Green2]: "hsla(123, 35%, 90%, 1)",
  [ColorPalettes.Green3]: "hsla(123, 34%, 82%, 1)",
  [ColorPalettes.Green4]: "hsla(123, 33%, 72%, 1)",
  [ColorPalettes.Green5]: "hsla(123, 32%, 60%, 1)",
  [ColorPalettes.Green6]: "hsla(123, 36%, 48%, 1)",
  [ColorPalettes.Green7]: "hsla(123, 40%, 36%, 1)",
  [ColorPalettes.Green8]: "hsla(123, 46%, 26%, 1)",
  [ColorPalettes.Green9]: "hsla(123, 52%, 16%, 1)",
  [ColorPalettes.Blue1]: "hsla(205, 92%, 97%, 1)",
  [ColorPalettes.Blue2]: "hsla(205, 88%, 94%, 1)",
  [ColorPalettes.Blue3]: "hsla(205, 82%, 88%, 1)",
  [ColorPalettes.Blue4]: "hsla(205, 76%, 78%, 1)",
  [ColorPalettes.Blue5]: "hsla(205, 72%, 68%, 1)",
  [ColorPalettes.Blue6]: "hsla(205, 68%, 56%, 1)",
  [ColorPalettes.Blue7]: "hsla(205, 66%, 44%, 1)",
  [ColorPalettes.Blue8]: "hsla(205, 64%, 34%, 1)",
  [ColorPalettes.Blue9]: "hsla(205, 62%, 24%, 1)",
  [ColorPalettes.Yellow1]: "hsla(42, 95%, 98%, 1)",
  [ColorPalettes.Yellow2]: "hsla(42, 90%, 94%, 1)",
  [ColorPalettes.Yellow3]: "hsla(42, 85%, 88%, 1)",
  [ColorPalettes.Yellow4]: "hsla(42, 80%, 80%, 1)",
  [ColorPalettes.Yellow5]: "hsla(42, 78%, 70%, 1)",
  [ColorPalettes.Yellow6]: "hsla(42, 82%, 58%, 1)",
  [ColorPalettes.Yellow7]: "hsla(42, 88%, 46%, 1)",
  [ColorPalettes.Yellow8]: "hsla(42, 94%, 32%, 1)",
  [ColorPalettes.Yellow9]: "hsla(42, 100%, 18%, 1)",
};

export let COLOR_VALUES = DARK_MODE__COLOR_VALUES;

export const ColorRanges = {
  [ColorSets.Transparents]: [0, 1],
  [ColorSets.Greys]: [2, 11],
  [ColorSets.Primarys]: [12, 20],
  [ColorSets.Secondarys]: [21, 29],
  [ColorSets.Reds]: [30, 38],
  [ColorSets.Greens]: [39, 47],
  [ColorSets.Blues]: [48, 56],
  [ColorSets.Yellows]: [57, 65],
  [ColorSets.Accents1]: [66, 74],
  [ColorSets.Accents2]: [75, 83],
};

export enum ColorRGBAAlphas {
  Opaque = 1, // max, max
  Dark3 = 2,
  Dark2 = 3,
  Dark1 = 4,
  Light1 = 5,
  Light2 = 6,
  Light3 = 7,
  Transparent = 8, //min, min
}
export const COLOR_RGBA_ALPHA = {
  /**
   * 6 (a-f (f is darker)) + 10 (0-9 (9 is darker)) | same concept (starts with 0 end with f)
   * 18 | 18
   * 18 / 2 = 9   | 2, 4, 6, 8 | 10 | 12, 14, 16, 18
   * 0 2 4 6 8 a c e(f)
   */
  [ColorRGBAAlphas.Opaque]: "ff", // e(f)
  [ColorRGBAAlphas.Dark3]: "c0", // c
  [ColorRGBAAlphas.Dark2]: "a0", // a
  [ColorRGBAAlphas.Dark1]: "80", // 8
  [ColorRGBAAlphas.Light1]: "60", // 6
  [ColorRGBAAlphas.Light2]: "40", // 4
  [ColorRGBAAlphas.Light3]: "20", // 2
  [ColorRGBAAlphas.Transparent]: "00", // 0
};

// moduleB.ts
const root = document.documentElement as HTMLElement | null;
if (!root) throw new Error("document.elementElement not available");

/* type ThemeChangeHandler = (val: string | null) => void; */

function handleThemeChange(val: string | null) {
  console.log("theme changed to", val);
  // react to change...
  if (val == "dark") {
    COLOR_VALUES = DARK_MODE__COLOR_VALUES;
  } else if (val == "light") {
    COLOR_VALUES = LIGHT_MODE__COLOR_VALUES;
  }
}

const onMutations: MutationCallback = (mutations) => {
  for (const m of mutations) {
    if (m.type === "attributes" && m.attributeName === "data-theme") {
      const newVal = root.getAttribute("data-theme");
      handleThemeChange(newVal);
    }
  }
};

const observer = new MutationObserver(onMutations);

// start observing the specific attribute
observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

// optional cleanup export
export function disconnectThemeObserver() {
  observer.disconnect();
}

/* // optional: expose a typed API for registering handlers
const handlers = new Set<ThemeChangeHandler>();
export function onThemeChange(fn: ThemeChangeHandler) {
  handlers.add(fn);
  return () => handlers.delete(fn);
}

// call registered handlers from the mutation callback
function callHandlers(val: string | null) {
  handlers.forEach((h) => h(val));
}

// replace handleThemeChange body to call handlers
function handleThemeChange(val: string | null) {
  console.log('theme changed to', val);
  callHandlers(val);
}
 */
