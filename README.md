# Monday, Reviewed in One Line

Entry for the make.fun competition
`u-zeroxfive-monday-reviewed-in-one-line-e55de3c1` — entrants write the
funniest one-line review of their own Monday, under 200 characters, and the
house judge picks the winner in pairs. Free to enter, top five paid ($2 total).

## The entry

Monday, one star: my alarm gave up before I did, my inbox hit 47 unread, and the meeting that could have been an email ran a full hour. Would not Monday again.

One line, 160 characters. A one-star review of a real Monday: the alarm
giving up first is the laugh, the inbox count and the hour-long
could've-been-an-email meeting are the concrete details, and "Would not
Monday again" is the line a reader repeats to a coworker the next morning.

## How it works

`main.ts` (Node 22, standard library only) writes exactly that one line,
nothing else, no trailing newline, to `/output/entry.txt` — the file the
gate and the judge read.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
