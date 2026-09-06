# Retained font files

The current native-minimalist BDE.io interface uses a browser system sans font
stack from `client/src/index.css`. It has no `@font-face` rules, so these WOFF2
files are retained historical assets and are not used by the current UI.

| File                         | Family     | Axes / subset           |
| ---------------------------- | ---------- | ----------------------- |
| `newsreader-latin.woff2`     | Newsreader | wght 200–800, latin     |
| `newsreader-latin-ext.woff2` | Newsreader | wght 200–800, latin-ext |
| `manrope-latin.woff2`        | Manrope    | wght 200–800, latin     |
| `manrope-latin-ext.woff2`    | Manrope    | wght 200–800, latin-ext |

Both families are released under the SIL Open Font License 1.1:

- Newsreader — https://github.com/productiontype/Newsreader
- Manrope — https://github.com/sharanda/manrope

The subsets are Google Fonts variable builds (`fonts.gstatic.com`). If either
family is brought back, add intentional `@font-face` rules, `unicode-range`
values, and only the needed preload hints.
