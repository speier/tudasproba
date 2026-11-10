import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'

const gitRev = process.env.CF_PAGES_COMMIT_SHA?.slice(0, 7) ?? execSync('git rev-parse --short HEAD').toString().trim()

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // html2pdf.js uses html2canvas, which can't parse Tailwind 4's oklch colors; the -pro fork can.
  resolve: {
    alias: { html2canvas: 'html2canvas-pro' },
  },
  define: {
    __GIT_REV__: JSON.stringify(gitRev),
  },
})
