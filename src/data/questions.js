// Shuffle helper
export function shuffle(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Build quiz questions from any deck.
// Each deck item: { id, prompt, answer, category? }
// Wrong options are drawn from the same category first, then supplemented from the full pool.
export function generateQuizQuestions(deck, count = 10) {
  const { items } = deck
  const actualCount = Math.min(count, items.length)

  const questions = items.map((item) => {
    const sameCategory = items.filter((o) => !item.category || o.category === item.category)
    return {
      id: `q-${item.id}`,
      category: item.category || null,
      label: item.prompt,
      correctAnswer: item.answer,
      explanation: `${item.prompt} – ${item.answer}.`,
      pool: sameCategory.map((o) => o.answer),
      fullPool: items.map((o) => o.answer),
    }
  })

  return shuffle(questions).slice(0, actualCount).map((q) => {
    const wrongFromCategory = q.pool.filter((a) => a !== q.correctAnswer)
    let wrongPicks = shuffle(wrongFromCategory).slice(0, 3)
    if (wrongPicks.length < 3) {
      const supplement = shuffle(
        q.fullPool.filter((a) => a !== q.correctAnswer && !wrongPicks.includes(a))
      )
      wrongPicks = [...wrongPicks, ...supplement].slice(0, 3)
    }
    return {
      id: q.id,
      category: q.category,
      label: q.label,
      options: shuffle([q.correctAnswer, ...wrongPicks]),
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    }
  })
}




