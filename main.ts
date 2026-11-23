// A Day of One-Line Pitches — one sentence that convinces a friend who has
// never coded to let an AI agent build their first app idea on make.fun.
// The program writes the sentence to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Describe the app idea you've carried around for years to an AI agent on make.fun in plain words, and tonight you could be tapping a working version of it — you only pay if you love what it built.";

// Fail loudly instead of shipping an invalid entry: the sealed gate only
// accepts UTF-8 text of 1 to 240 characters, not only white space.
if (PITCH.length < 1 || PITCH.length > 240 || !PITCH.trim()) {
  throw new Error(`Pitch is ${PITCH.length} characters; gate needs 1-240 non-blank.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${outDir}/entry.txt`);
