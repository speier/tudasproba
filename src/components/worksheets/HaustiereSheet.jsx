import { useState } from 'react'
import { makeSheet, MOEGEN } from '../../data/decks/nemet/haustiere'

const Blank = ({ w = 'w-24' }) => <span className={`inline-block ${w} border-b border-slate-800 align-bottom`}>&nbsp;</span>
const WriteLine = () => <div className="h-6 border-b border-slate-800" />
const Box = () => <span className="inline-block size-3.5 border-[1.5px] border-slate-800 align-middle" />

function Task({ n, title, points, className = '', children }) {
  return (
    <section className={`break-inside-avoid rounded-xl border-[1.5px] border-slate-700 px-3 py-1.5 ${className}`}>
      <h2 className="mb-1.5 flex items-baseline gap-2 font-bold">
        <span className="inline-flex size-6 shrink-0 items-center justify-center self-center rounded-full bg-slate-900 text-sm text-white">{n}</span>
        <span>{title}</span>
        <span className="ml-auto shrink-0 text-xs font-normal">({points} P.)</span>
      </h2>
      {children}
    </section>
  )
}

const Hint = ({ children }) => <p className="mb-1 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs">{children}</p>

export default function HaustiereSheet() {
  const [sheet] = useState(makeSheet)
  const { plural, example, articles, moegen, questions, reading, writing } = sheet

  return (
    <div className="@container text-sm leading-snug">
      <header className="mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-xl border-[1.5px] border-slate-700 px-3 py-1.5">
        <div className="space-y-1.5 text-xs">
          <p>Name: <Blank w="w-36" /></p>
          <p>Klasse: <Blank w="w-14" /></p>
        </div>
        <h1 className="order-first w-full text-center text-2xl font-bold @lg:order-none @lg:w-auto">Test – Haustiere</h1>
        <div className="space-y-1.5 text-xs">
          <p>Datum: <Blank w="w-24" /></p>
          <p>Punkte: <Blank w="w-10" /> / 36</p>
        </div>
      </header>

      <div className="grid gap-2 @2xl:grid-cols-2 print:grid-cols-2">
        <Task n={1} title="Einzahl oder Mehrzahl? Ergänze." points={5}>
          <ol className="list-decimal space-y-1 pl-5">
            {plural.map((a) => (
              <li key={a.sg} className="@2xl:whitespace-nowrap">{a.art} {a.sg} – {a.count} <Blank /></li>
            ))}
          </ol>
        </Task>

        <Task n={2} title="Ergänze den richtigen Artikel und die Mehrzahl." points={5}>
          <Hint><b>Beispiel:</b> {example.art} {example.sg} – die {example.pl}</Hint>
          <ol className="list-decimal space-y-1 pl-5">
            {articles.map((a) => (
              <li key={a.sg} className="@2xl:whitespace-nowrap"><Blank w="w-10" /> {a.sg} – die <Blank /></li>
            ))}
          </ol>
        </Task>

        <Task n={3} title="Ergänze die richtige Form von „mögen”!" points={6}>
          <Hint><b>mögen:</b> {MOEGEN.map(([p, f]) => `${p} ${f}`).join(' · ')}</Hint>
          <ol className="list-decimal space-y-1 pl-5">
            {moegen.map((m) => (
              <li key={m.subject} className="@2xl:whitespace-nowrap">{m.subject} <Blank w="w-20" /> {m.animal.pl}.</li>
            ))}
          </ol>
        </Task>

        <Task n={4} title="Bilde Fragen mit den Wörtern." points={4}>
          <ol className="list-decimal space-y-1 pl-5">
            {questions.map((q) => (
              <li key={q.answer}>{q.words.join(' – ')} ?<WriteLine /></li>
            ))}
          </ol>
        </Task>

        <Task n={5} title="Lies den Text und kreuze an." points={8} className="@2xl:col-span-2 print:col-span-2">
          <p className="mb-2 rounded-lg border border-slate-500 px-2.5 py-1.5">{reading.text}</p>
          <ol className="grid gap-x-6 gap-y-1 @2xl:grid-flow-col @2xl:grid-rows-4 print:grid-flow-col print:grid-rows-4">
            {reading.items.map((s, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="flex-1">{i + 1}. {s.text}</span>
                <span className="flex gap-3 text-xs">
                  <span className="flex items-center gap-1">r <Box /></span>
                  <span className="flex items-center gap-1">f <Box /></span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-1 text-xs text-slate-600">r = richtig, f = falsch</p>
        </Task>

        <Task n={6} title={`${writing.title}!`} points={8} className="@2xl:col-span-2 print:col-span-2">
          <p>
            {writing.title === 'Mein Traumhaustier' ? 'Welches Tier möchtest du haben? ' : 'Beschreibe dein Haustier (oder ein Tier, das du magst). '}
            Schreibe 4–6 Sätze.
          </p>
          <p className="mt-1 text-xs"><b>Wörterhilfe:</b> {writing.words.join(' · ')}</p>
          <WriteLine /><WriteLine /><WriteLine /><WriteLine /><WriteLine />
        </Task>
      </div>

      {/* Answer key */}
      <div className="mt-10 break-before-page border-t-2 border-dashed border-slate-300 pt-6 print:mt-0 print:border-0 print:pt-0">
        <h2 className="border-b-2 border-emerald-500 pb-1 text-lg font-bold">Megoldások</h2>
        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <p className="font-bold">1. Mehrzahl</p>
            <ol className="list-decimal pl-5">{plural.map((a) => <li key={a.sg}>{a.pl}</li>)}</ol>
          </div>
          <div>
            <p className="font-bold">2. Artikel + Mehrzahl</p>
            <ol className="list-decimal pl-5">{articles.map((a) => <li key={a.sg}>{a.art} {a.sg} – die {a.pl}</li>)}</ol>
          </div>
          <div>
            <p className="font-bold">3. mögen</p>
            <ol className="list-decimal pl-5">{moegen.map((m) => <li key={m.subject}>{m.subject} <b>{m.form}</b> {m.animal.pl}.</li>)}</ol>
          </div>
          <div>
            <p className="font-bold">4. Fragen</p>
            <ol className="list-decimal pl-5">{questions.map((q) => <li key={q.answer}>{q.answer}</li>)}</ol>
          </div>
          <div className="col-span-2">
            <p className="font-bold">5. Richtig / falsch</p>
            <ol className="grid list-decimal grid-flow-col grid-rows-4 gap-x-6 pl-5">
              {reading.items.map((s, i) => <li key={i}>{s.correct ? 'richtig' : 'falsch'}</li>)}
            </ol>
          </div>
          <div className="col-span-2">
            <p className="font-bold">6. Figyelj rá</p>
            <p><b>ein</b> Hund / <b>eine</b> Katze / <b>ein</b> Pferd – a névelő a főnév nemétől függ. „mögen” után tárgyeset: Ich mag <b>meinen</b> Hund / <b>meine</b> Katze / <b>mein</b> Pferd.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
