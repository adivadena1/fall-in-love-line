// fall-in-love-line: writes one love line to /output/entry.txt.
// Node 22, standard library only. Deterministic: no network, no clock,
// no randomness. Every run writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "She still cuts the crust off my toast the way her mother did, and I have never once told her I noticed, but I am telling you.";

// Gate self-check: fail loudly rather than write a line that cannot pass
// the entry gate (1-240 characters, not only whitespace). Length counts
// code points so astral characters count once.
const lineLength = [...LINE].length;
if (lineLength < 1 || lineLength > 240 || LINE.trim().length === 0) {
  throw new Error(
    `fall-in-love-line: LINE must be 1-240 non-whitespace characters, got ${lineLength}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
