import { useState } from 'react'

const PROBLEM_COUNT = 12
const PLACE_VALUES = [128, 64, 32, 16, 8, 4, 2, 1]
const DIVISION_ROWS = 9
const LETTERS = 'abcdefghijklmnop'
const UNITS = ['B', 'KB', 'MB', 'GB', 'TB']
const UNIT_PROBLEM_COUNT = 6

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

// Alternates big → small (multiply by 1024) and small → big (divide by 1024).
function unitProblems() {
  return Array.from({ length: UNIT_PROBLEM_COUNT }, (_, i) => {
    const u = randomInt(1, UNITS.length - 1)
    const k = randomInt(2, 8)
    const big = `${k} ${UNITS[u]}`
    const small = `${k * 1024} ${UNITS[u - 1]}`
    return i % 2 === 0
      ? { id: i, from: big, toUnit: UNITS[u - 1], solution: `${big} = ${k} · 1024 = ${small}` }
      : { id: i, from: small, toUnit: UNITS[u], solution: `${small} = ${k * 1024} : 1024 = ${big}` }
  })
}

function newSheet(deck) {
  return { questions: deck.generate(PROBLEM_COUNT), units: unitProblems() }
}

function divisionRows(n) {
  const rows = []
  for (let x = n; x > 0; x = Math.floor(x / 2)) rows.push([x, x % 2])
  rows.push([0, ''])
  return rows
}

function DivisionTable({ n }) {
  const rows = n == null ? Array(DIVISION_ROWS).fill(['', '']) : divisionRows(n)
  return (
    <table className="border-collapse font-mono text-base">
      <tbody>
        {rows.map(([q, r], i) => (
          <tr key={i}>
            <td className="h-6 w-16 border-r-2 border-b border-slate-800 border-b-slate-300 pr-2 text-right">{q}</td>
            <td className="h-6 w-10 border-b border-slate-300 pl-3">{r}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function PlaceValueTable({ bits }) {
  const digits = bits ? bits.padStart(PLACE_VALUES.length, ' ').split('') : Array(PLACE_VALUES.length).fill('')
  return (
    <table className="border-collapse text-center font-mono">
      <thead>
        <tr>
          {PLACE_VALUES.map((v) => (
            <th key={v} className="w-8 border border-slate-500 px-0.5 text-xs font-semibold">{v}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {digits.map((d, i) => (
            <td key={i} className="h-8 border border-slate-500 text-base">{d.trim()}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default function Worksheet({ deck, onBack }) {
  const [{ questions, units }, setSheet] = useState(() => newSheet(deck))
  const dec2bin = questions.filter((q) => q.category === 'dec2bin')
  const bin2dec = questions.filter((q) => q.category === 'bin2dec')

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 print:hidden">
        <button
          onClick={onBack}
          className="rounded-xl border-2 border-slate-200 bg-white px-4 py-2 font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          ←
        </button>
        <button
          onClick={() => setSheet(newSheet(deck))}
          className="flex-1 rounded-xl border-2 border-slate-200 bg-white px-4 py-2 font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          🔄 Új számok
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-emerald-700"
        >
          🖨️ Nyomtatás
        </button>
      </div>

      {/* Paper: fixed light colors so it prints correctly in dark mode too */}
      <div className="select-text rounded-xl bg-white p-6 text-slate-900 shadow-md print:rounded-none print:p-0 print:shadow-none">
        <h1 className="text-center text-2xl font-bold">{deck.icon} {deck.title}</h1>
        <p className="text-center text-sm text-slate-500">Gyakorlólap – számrendszerek és mértékegységek</p>
        <div className="mt-4 flex gap-6 text-sm">
          <p className="flex-1">Név: ______________________________</p>
          <p>Dátum: ______________</p>
        </div>

        {/* Section 1 */}
        <h2 className="mt-6 border-b-2 border-emerald-500 pb-1 text-lg font-bold">1. Írd át kettes számrendszerbe!</h2>
        <p className="mt-1 text-sm text-slate-600">
          Oszd el a számot 2-vel, a maradékot írd a vonal jobb oldalára, a hányadost alá. Addig folytasd, amíg 0 nem lesz.
          A maradékokat <b>alulról felfelé</b> olvasd össze.
        </p>
        <div className="mt-3 flex items-start gap-4 rounded-lg border border-dashed border-slate-400 p-3 break-inside-avoid">
          <div>
            <p className="mb-1 text-sm font-semibold">Példa: 13</p>
            <DivisionTable n={13} />
          </div>
          <p className="self-center text-sm">↑ alulról felfelé olvasva:<br /><b className="font-mono text-base">13 = 1101₂</b></p>
        </div>
        <div className="mt-4 grid gap-x-4 gap-y-5 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]">
          {dec2bin.map((q, i) => (
            <div key={q.id} className="break-inside-avoid">
              <p className="mb-1 font-mono text-lg font-bold">{LETTERS[i]}) {q.value}</p>
              <DivisionTable />
              <p className="mt-2 whitespace-nowrap font-mono">{q.value} = __________₂</p>
            </div>
          ))}
        </div>

        {/* Section 2 */}
        <div className="break-inside-avoid">
          <h2 className="mt-8 border-b-2 border-emerald-500 pb-1 text-lg font-bold">2. Írd át tízes számrendszerbe!</h2>
          <p className="mt-1 text-sm text-slate-600">
            Írd a számjegyeket jobbról kezdve a helyiértékek alá, majd add össze azokat a helyiértékeket, ahol 1-es áll.
          </p>
          <div className="mt-3 rounded-lg border border-dashed border-slate-400 p-3">
            <p className="mb-1 text-sm font-semibold">Példa: 1101₂</p>
            <PlaceValueTable bits="1101" />
            <p className="mt-1 font-mono text-sm"><b>1101₂ = 8 + 4 + 1 = 13</b></p>
          </div>
        </div>
        <div className="mt-4 grid gap-x-6 gap-y-5 [grid-template-columns:repeat(auto-fill,minmax(270px,1fr))]">
          {bin2dec.map((q, i) => (
            <div key={q.id} className="break-inside-avoid">
              <p className="mb-1 font-mono text-lg font-bold">{LETTERS[i]}) {q.value}₂</p>
              <PlaceValueTable />
              <p className="mt-2 font-mono">= ____________________</p>
            </div>
          ))}
        </div>

        {/* Section 3 */}
        <div className="break-inside-avoid">
          <h2 className="mt-8 border-b-2 border-emerald-500 pb-1 text-lg font-bold">3. Mértékegységek</h2>
          <p className="mt-2 font-semibold">Töltsd ki!</p>
          <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-2 font-mono">
            <p>1 B = ________ bit</p>
            <p>1 KB = ________ B</p>
            <p>1 MB = ________ KB</p>
            <p>1 GB = ________ MB</p>
          </div>
          <p className="mt-3 font-mono">B &lt; _____ &lt; _____ &lt; _____ &lt; _____ &lt; _____ &lt; EB</p>
          <p className="mt-4 font-semibold">Váltsd át! <span className="font-normal text-sm text-slate-600">(nagyobbról kisebbre szorzunk 1024-gyel, kisebbről nagyobbra osztunk 1024-gyel)</span></p>
          <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-3 font-mono">
            {units.map((u, i) => (
              <p key={u.id}>{LETTERS[i]}) {u.from} = __________ {u.toUnit}</p>
            ))}
          </div>
        </div>

        {/* Answer key */}
        <div className="mt-10 break-before-page border-t-2 border-dashed border-slate-300 pt-6 print:mt-0 print:border-0 print:pt-0">
          <h2 className="border-b-2 border-emerald-500 pb-1 text-lg font-bold">Megoldások</h2>
          <div className="mt-3 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="mb-2 font-bold">1. Tízes → kettes</p>
              {dec2bin.map((q, i) => (
                <div key={q.id} className="mb-3 break-inside-avoid">
                  <p className="font-mono font-bold">{LETTERS[i]}) {q.explanation}</p>
                  <p className="font-mono text-xs text-slate-600">
                    {divisionRows(Number(q.value)).slice(0, -1).map(([x, r]) => `${x}|${r}`).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-2 font-bold">2. Kettes → tízes</p>
              {bin2dec.map((q, i) => (
                <div key={q.id} className="mb-3 break-inside-avoid">
                  <p className="font-mono font-bold">{LETTERS[i]}) {q.explanation}</p>
                  <p className="font-mono text-xs text-slate-600">{q.steps[q.steps.length - 1]}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 mb-2 text-sm font-bold">3. Mértékegységek</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-sm">
            <p>1 B = 8 bit</p>
            <p>1 KB = 1024 B</p>
            <p>1 MB = 1024 KB</p>
            <p>1 GB = 1024 MB</p>
            <p className="col-span-2">B &lt; KB &lt; MB &lt; GB &lt; TB &lt; PB &lt; EB</p>
            {units.map((u, i) => (
              <p key={u.id}>{LETTERS[i]}) {u.solution}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
