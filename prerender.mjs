import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import React from "react"
import { renderToString } from "react-dom/server"
import { createServer as createViteServer } from "vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = __dirname
const outDir = path.join(root, "dist")

const vite = await createViteServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
})

try {
  const distTemplate = await fs.promises.readFile(path.join(outDir, "index.html"), "utf-8")
  const { default: App } = await vite.ssrLoadModule("/src/App.jsx")
  const appHtml = renderToString(React.createElement(App))
  const html = distTemplate.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )
  await fs.promises.writeFile(path.join(outDir, "index.html"), html)
  console.log("✅ Prerendered full content into dist/index.html")
} finally {
  await vite.close()
}