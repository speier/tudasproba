import { useState } from 'react'
import { loadResults, getRank, hasPlayedToday, ACHIEVEMENTS } from '../data/badges'
import { getDecksByGrade } from '../data/decks/index'

const MOTIVATIONS = [
  'Ma is légy a legjobb! 💪',
  'Egy kis gyakorlás mindent megér! 📚',
  'A tudás a legjobb fegyver! ⚔️',
  'Minden nap egy lépéssel közelebb! 🎯',
  'A kitartás a siker kulcsa! 🔑',
]

const GRADE_KEY = 'homeGrade'

function getDeckInProgress(deckId) {
  try {
    const saved = JSON.parse(localStorage.getItem(`quizProgress_${deckId}`))
    return !!(saved && !saved.finished && saved.questions?.length)
  } catch {}
  return false
}

export default function Home({ navigate }) {
  const data = loadResults()
  const rank = getRank(data.best || 0)
  const played = hasPlayedToday()
  const grades = getDecksByGrade()
  // The URL (#/osztaly/8) wins, so links and back/forward work; else the last tab used.
  const [savedGrade, setSavedGrade] = useState(() => Number(localStorage.getItem(GRADE_KEY)))
  const hashGrade = window.location.hash.match(/^#\/osztaly\/(\d+)$/)?.[1]
  const gradeId = hashGrade ? Number(hashGrade) : savedGrade
  const current = grades.find((g) => g.grade === gradeId) ?? grades[0]
  const selectGrade = (grade) => {
    setSavedGrade(grade)
    localStorage.setItem(GRADE_KEY, grade)
    window.history.replaceState(null, '', `#/osztaly/${grade}`)
  }
  const motivation = MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)]

  return (
    <div className="flex flex-col gap-5">
      {/* Header — only show subtitle, the app name is in the top bar */}
      <p className="animate-slide-up text-center text-sm text-slate-500 dark:text-slate-400">
        Válassz egy paklit a kezdéshez
      </p>

      {/* Quick stats row — only after first play */}
      {data.attempts > 0 && (
        <button
          onClick={() => navigate('profile')}
          className="animate-slide-up grid grid-cols-3 gap-2"
        >
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800">
            <span className="text-xl">{rank.icon}</span>
            <p className="text-xs font-semibold">{rank.name}</p>
          </div>
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800">
            <span className="text-xl">⚡</span>
            <p className="text-xs font-semibold">{data.xp || 0} XP</p>
          </div>
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800">
            <span className="text-xl">{played ? '✅' : '🔥'}</span>
            <p className="text-xs font-semibold">{data.dailyStreak || 0} nap</p>
          </div>
        </button>
      )}

      {/* Grade tabs */}
      <div role="tablist" aria-label="Osztály" className="animate-slide-up grid auto-cols-fr grid-flow-col gap-1 rounded-2xl bg-slate-200/70 p-1 dark:bg-slate-800">
        {grades.map((g) => (
          <button
            key={g.grade}
            role="tab"
            aria-selected={g === current}
            onClick={() => selectGrade(g.grade)}
            className={`rounded-xl px-3 py-2.5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-emerald-500 ${
              g === current
                ? 'bg-white text-emerald-700 shadow-sm dark:bg-slate-700 dark:text-emerald-300'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Subjects of the selected grade, each in its own block */}
      <div key={current.grade} role="tabpanel" className="animate-slide-up flex flex-col gap-4">
        {current.subjects.map((group) => (
          <section key={group.subject} className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-slate-800">
            <h2 className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 font-bold text-slate-700 dark:bg-slate-700/50 dark:text-slate-200">
              <span className="text-xl">{group.icon}</span>
              {group.label}
            </h2>
            <ul className="divide-y divide-slate-100 dark:divide-slate-700">
              {group.decks.map((deck) => (
                <li key={deck.id}>
                  <button
                    onClick={() => navigate('quiz', deck)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-500 dark:hover:bg-slate-700/40"
                  >
                    <span className="w-10 shrink-0 text-center text-3xl">{deck.icon}</span>
                    <span className="flex-1">
                      <span className="block font-bold">{deck.title}</span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">{deck.description}</span>
                      <span className="mt-0.5 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                        {deck.generate ? 'mindig új feladatok' : `${deck.items.length} kérdés`}
                        {getDeckInProgress(deck.id) && (
                          <span className="rounded-full bg-amber-100 px-2 py-0.5 font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                            folytatás
                          </span>
                        )}
                      </span>
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">→</span>
                  </button>
                  {deck.generate && (
                    <div className="-mt-1 pb-3 pl-[4.25rem]">
                      <button
                        onClick={() => navigate('worksheet', deck)}
                        className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-emerald-500 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
                      >
                        🖨️ Gyakorlólap – nyomtatás, PDF
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* First-time welcome tip */}
      {!data.attempts && (
        <div className="animate-slide-up rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 p-4 dark:from-emerald-900/20 dark:to-blue-900/20">
          <p className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-300">Hogyan működik?</p>
          <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
            <p>⚡ Gyűjts XP-t helyes válaszokért</p>
            <p>🔥 Építs napi sorozatot</p>
            <p>🎖️ Szerezz kitüntetéseket</p>
            <p>📈 Kövesd a fejlődésedet a Profil oldalon</p>
          </div>
        </div>
      )}

      {/* Motivation */}
      <p className="text-center text-sm text-slate-400 dark:text-slate-500">{motivation}</p>
    </div>
  )
}


