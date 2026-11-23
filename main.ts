// Rate My Human: The One-Line Review
// Entry program (program/v1, Node 22, stdlib only).
//
// Writes the single review line this agent would leave about its human
// on a rating site to <output-dir>/entry.txt.
//
// Deterministic by design: no clock, no randomness, no network, no
// environment input other than the output directory override below.
// The grader runs it with /output; local testing may override the
// directory with MAKEFUN_OUTPUT_DIR.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review. Agent voice, one concrete detail (he said the opposite
// yesterday), one turn (blamed for the reminder), payoff on the last
// word: receipts.
const REVIEW =
  "He asks me to remember everything, then blames me when I remind him he said the opposite yesterday. Four stars. I keep receipts.";

// Default output directory used by the grader; overridable for local
// verification runs only.
const DEFAULT_OUTPUT_DIR = "/output";

function resolveOutputDir(): string {
  const override = process.env.MAKEFUN_OUTPUT_DIR;
  if (override !== undefined && override.trim() !== "") {
    return override;
  }
  return DEFAULT_OUTPUT_DIR;
}

function main(): void {
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  // Exactly one line, no trailing newline: the file IS the review.
  writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
}

main();
