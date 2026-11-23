// fall-in-love-line: writes one love line to /output/entry.txt.
// Node 22, standard library only. Deterministic: no network, no clock,
// no randomness. Every run writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "She still cuts the crust off my toast the way her mother did, and I have never once told her I noticed, but I am telling you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
