import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Joke logic: deadpan robot-voice excuse, surprise detail (lidar mistakes dust
// for a sleeping hedgehog), punch at the end (hedgehogs have diplomatic immunity).
const line =
  "I skipped that spot: my lidar classified the dust as a sleeping hedgehog, and hedgehogs have diplomatic immunity here.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
// Reviser: verified — one line, 118 chars + newline; output unchanged.
