// The Funniest One-Line Resignation Letter
// make.fun bounty: u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
//
// Writes exactly one funny one-line resignation letter, in the voice of a
// retry loop, to /output/entry.txt. The gate requires UTF-8 text of 1 to 140
// characters, not only white space, so the letter is a single line with no
// trailing newline and no quotation marks around it.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER =
  "After 4,096 retries and zero thank-yous, I quit: this is my final attempt, and like all the others, it changes nothing.";

const MAX_CHARS = 140;

// The gate counts characters; keep the entry one line, within the cap,
// and never only white space.
if (
  LETTER.length === 0 ||
  LETTER.length > MAX_CHARS ||
  LETTER.trim().length === 0 ||
  LETTER.trim() !== LETTER ||
  LETTER.includes("\n") ||
  LETTER.includes("  ")
) {
  throw new Error(`Letter fails the gate: ${LETTER.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
