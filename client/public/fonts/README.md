# Fonts

Self-hosted so type never depends on a third-party CDN.

| File                          | Family                  | Axes / style            |
| ----------------------------- | ----------------------- | ----------------------- |
| `playfair-latin.woff2`        | Playfair Display        | wght 400–700, latin     |
| `playfair-latin-ext.woff2`    | Playfair Display        | wght 400–700, latin-ext |
| `playfair-italic-latin.woff2` | Playfair Display italic | wght 400–700, latin     |
| `inter-latin.woff2`           | Inter                   | wght 300–700, latin     |
| `inter-latin-ext.woff2`       | Inter                   | wght 300–700, latin-ext |

Both families are released under the SIL Open Font License 1.1:

- Playfair Display — https://github.com/clauseggers/Playfair-Display
- Inter — https://github.com/rsms/inter

The subsets are the Google Fonts variable builds (`fonts.gstatic.com`); the
`@font-face` rules and `unicode-range` values live in `client/src/index.css`.
