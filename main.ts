import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const WORD = "unavailable";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const text = WORD.trim();
if (text.length < 1 || text.length > 24) {
  throw new Error("entry must be 1 to 24 characters");
}
if (/\s/.test(text)) {
  throw new Error("entry must be exactly one word");
}
if (!text) {
  throw new Error("entry must not be blank");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} characters to entry.txt`);
// The word is the whole entry: no explanation, no punctuation, no extra line.
// One word, exactly as an ex would say it — short, final, and hard to argue with.
