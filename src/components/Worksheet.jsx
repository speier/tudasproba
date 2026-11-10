import { useRef, useState } from 'react'
import SzamrendszerekSheet from './worksheets/SzamrendszerekSheet'
import HaustiereSheet from './worksheets/HaustiereSheet'

// Printable sheet per deck; each sheet draws new problems when it mounts.
const SHEETS = {
  'szamrendszerek-atvaltas': SzamrendszerekSheet,
  'nemet-haustiere': HaustiereSheet,
}

export default function Worksheet({ deck, onBack }) {
  const [version, setVersion] = useState(0)
  const [saving, setSaving] = useState(false)
  const sheetRef = useRef(null)
  const Sheet = SHEETS[deck.id]

  // Real A4 PDF file (the print dialog's "Save as PDF" is hard to find on phones).
  async function downloadPdf() {
    setSaving(true)
    try {
      const { default: html2pdf } = await import('html2pdf.js')
      await html2pdf()
        .set({
          margin: 15,
          filename: `${deck.id}.pdf`,
          image: { type: 'jpeg', quality: 0.95 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['css'], avoid: '.break-inside-avoid' },
        })
        .from(sheetRef.current)
        .save()
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 whitespace-nowrap print:hidden">
        <button
          onClick={onBack}
          className="rounded-xl border-2 border-slate-200 bg-white px-4 py-2 font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          ←
        </button>
        <button
          onClick={() => setVersion((v) => v + 1)}
          className="flex-1 rounded-xl border-2 border-slate-200 bg-white px-4 py-2 font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          🔄 Új feladatok
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-emerald-700"
        >
          🖨️ Nyomtatás
        </button>
        <button
          onClick={downloadPdf}
          disabled={saving}
          className="flex-1 rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-emerald-700 disabled:opacity-60"
        >
          {saving ? '⏳ Készül…' : '📄 PDF letöltés'}
        </button>
      </div>

      {/* Paper: fixed light colors so it prints correctly in dark mode too */}
      <div className="select-text rounded-xl bg-white p-6 [print-color-adjust:exact] text-slate-900 shadow-md print:rounded-none print:p-0 print:shadow-none">
        <div ref={sheetRef}>
          <Sheet key={version} deck={deck} />
        </div>
      </div>
    </div>
  )
}
