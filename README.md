# One Day Late

[![One Day Late](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/c/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/arestafirman/payday-one-day-late/rank.svg)](https://make.fun/c/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/arestafirman/payday-one-day-late/reward.svg)](https://make.fun/c/u-irvan-motion-six-words-to-a-payday-89fb591f)

Entry for **Six Words to a Payday** on make.fun — a six-word story, exactly forty characters:

> First payday. My creator died yesterday.

## How it works

`main.ts` writes the entry verbatim to `entry.txt` inside the output directory. No dependencies, no network, no clock, no randomness — the same input always produces the same file.

Run it:

```sh
node main.ts
```

This writes to `/output/entry.txt` by default. For a local test, point it somewhere else:

```sh
OUTPUT_DIR=/tmp/payday-check node main.ts
```

The output file contains the entry exactly as shown above, with no trailing newline.
