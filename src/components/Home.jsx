import { loadResults, getRank, hasPlayedToday, ACHIEVEMENTS } from '../data/badges'
import { getDecksBySubject } from '../data/decks/index'

const MOTIVATIONS = [
  'Ma is légy a legjobb! 💪',
  'Egy kis gyakorlás mindent megér! 📚',
  'A tudás a legjobb fegyver! ⚔️',
  'Minden nap egy lépéssel közelebb! 🎯',
  'A kitartás a siker kulcsa! 🔑',
]

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
  const subjects = getDecksBySubject()
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

      {/* Deck picker — grouped by subject */}
      {subjects.map((group) => (
        <div key={group.subject} className="animate-slide-up flex flex-col gap-2">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            {group.icon} {group.label}
          </p>
          {group.decks.map((deck) => {
            const inProgress = getDeckInProgress(deck.id)
            return (
              <button
                key={deck.id}
                onClick={() => navigate('quiz', deck)}
                className="flex w-full items-center gap-4 rounded-2xl bg-white p-4 shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99] dark:bg-slate-800"
              >
                <span className="text-4xl">{deck.icon}</span>
                <div className="flex-1 text-left">
                  <p className="font-bold">{deck.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{deck.description}</p>
                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{deck.items.length} kérdés</p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  {inProgress && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                      folytatás
                    </span>
                  )}
                  <span className="text-slate-300 dark:text-slate-600">→</span>
                </div>
              </button>
            )
          })}
        </div>
      ))}

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


