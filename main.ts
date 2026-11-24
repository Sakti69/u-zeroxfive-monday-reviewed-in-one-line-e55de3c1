// u-zeroxfive-monday-reviewed-in-one-line-e55de3c1 entry (Node 22, standard library only):
// writes exactly one line — the funniest one-line review of the entrant's own
// Monday, under 200 characters — to /output/entry.txt. The gate takes UTF-8
// text of 1 to 200 characters that is not only white space, and the judge
// reads exactly the bytes written, so no trailing line end is added.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Revision (candidates weighed against the judge's brief, in its own order):
//   v1 "Monday reviewed itself: my inbox had 47 unread emails, my 9 a.m.
//      stood up, and by lunch even my coffee filed a complaint. One star —
//      would not Monday again." — concrete, but "reviewed itself" wastes
//      words before the joke and "coffee filed a complaint" is a second
//      joke competing with the closer, so the turn arrives late.
//   v2 "Monday review: alarm snoozed three times, inbox at 47 unread, and
//      a meeting that could've been an email — one star, would not Monday
//      again." — tight and repeatable, but "alarm snoozed three times" is
//      the most generic Monday detail there is; criterion 3 wants a detail
//      that feels like this Monday, not any Monday.
//   v4 (second pass, after running v3): "ran an hour" understates the
//      meeting's crime; "ran a full hour" makes the could've-been-an-email
//      meeting land harder with one extra word, and the line stays at 160
//      characters, well under the 200 cap. Final choice.
const ENTRY =
  'Monday, one star: my alarm gave up before I did, my inbox hit 47 unread, and the meeting that could have been an email ran a full hour. Would not Monday again.';

const length = [...ENTRY].length;
if (
  length < 1 ||
  length > 200 ||
  !/\S/.test(ENTRY) ||
  ENTRY.includes('\n')
) {
  throw new Error(
    `entry is ${length} characters; the gate needs 1 to 200, a single line, with a non-space character`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
