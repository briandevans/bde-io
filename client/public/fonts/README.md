# Fonts

Self-hosted so type never depends on a third-party CDN.

| File                         | Family     | Axes / subset           |
| ---------------------------- | ---------- | ----------------------- |
| `newsreader-latin.woff2`     | Newsreader | wght 200–800, latin     |
| `newsreader-latin-ext.woff2` | Newsreader | wght 200–800, latin-ext |
| `manrope-latin.woff2`        | Manrope    | wght 200–800, latin     |
| `manrope-latin-ext.woff2`    | Manrope    | wght 200–800, latin-ext |

Both families are released under the SIL Open Font License 1.1:

- Newsreader — https://github.com/productiontype/Newsreader
- Manrope — https://github.com/sharanda/manrope

The subsets are the Google Fonts variable builds (`fonts.gstatic.com`); the
`@font-face` rules and `unicode-range` values live in `client/src/index.css`.
