import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six words, one day late. The entry text is fixed by the competition
// brief and must be written byte-for-byte, with no trailing newline.
const ENTRY = "First payday. My creator died yesterday.";

// The grader sets OUTPUT_DIR; default to /output when it is absent.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
