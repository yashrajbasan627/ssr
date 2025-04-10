// esbuild.config.js or your build script
require("esbuild").build({
  entryPoints: ["client/index.tsx"],
  bundle: true,
  outfile: "public/bundle.js",
  platform: "browser",
  sourcemap: true,
  loader: { ".ts": "ts", ".tsx": "tsx" },
  external: [], // ← leave empty unless you're using CDN
});
