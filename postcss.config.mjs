/** @type {import('postcss-load-config').Config} */
// #region agent log
import fs from "node:fs";
import path from "node:path";
function __agentLog(hypothesisId, message, data) {
  // Use globalThis.fetch to avoid ReferenceError on older Node.
  globalThis.fetch?.("http://127.0.0.1:7242/ingest/e9c271a7-0ae0-4742-a3cb-dd1ff40ebc50", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "debug-session",
      runId: "pre-fix",
      hypothesisId,
      location: "postcss.config.mjs",
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
}
try {
  const globalsPath = path.join(process.cwd(), "app", "globals.css");
  const globals = fs.existsSync(globalsPath) ? fs.readFileSync(globalsPath, "utf8") : "";
  const twTs = path.join(process.cwd(), "tailwind.config.ts");
  const twJs = path.join(process.cwd(), "tailwind.config.js");
  __agentLog("A", "PostCSS config loaded", {
    cwd: process.cwd(),
    node: process.versions?.node,
    globalsExists: fs.existsSync(globalsPath),
    hasAtTailwind: globals.includes("@tailwind"),
    hasImportTailwindcss: globals.includes('@import "tailwindcss"') || globals.includes("@import 'tailwindcss'"),
    hasAtApply: globals.includes("@apply"),
    tailwindConfigTsExists: fs.existsSync(twTs),
    tailwindConfigJsExists: fs.existsSync(twJs),
  });
} catch (e) {
  __agentLog("D", "PostCSS config load error", { error: String(e) });
}
// #endregion agent log

const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

// #region agent log
__agentLog("D", "PostCSS plugins configured", { pluginKeys: Object.keys(config.plugins || {}) });
// #endregion agent log

// #region agent log
__agentLog("C", "Tailwind plugin presence", {
  hasTailwindPostcss: Object.prototype.hasOwnProperty.call(config.plugins || {}, "@tailwindcss/postcss"),
});
// #endregion agent log

export default config;
