import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Your yogurt expired Tuesday. I kept the light on for it anyway. Door left open 47 seconds — I counted, since apparently nobody else in this house does.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry length ${entry.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`wrote entry (${entry.length} chars) to /output/entry.txt`);
