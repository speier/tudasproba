import ww2 from './history/ww2.js'
import kommunistaHatalomatvetel from './history/kommunista_hatalomatvetel.js'
import hideghaboru from './history/hideghaboru.js'
import allatrendszertan from './biology/allatrendszertan.js'
import vizVizpart from './kornyezet/viz_vizpart.js'

// All available decks. To add a new deck:
//   1. Create src/data/decks/<subject>/<id>.js following the same shape
//   2. Import it here and add it to this array
export const decks = [
  ww2,
  kommunistaHatalomatvetel,
  hideghaboru,
  allatrendszertan,
  vizVizpart,
]

export function getDeckById(id) {
  return decks.find((d) => d.id === id) || null
}

// Returns decks grouped by subject, preserving insertion order
export function getDecksBySubject() {
  const map = {}
  for (const deck of decks) {
    if (!map[deck.subject]) {
      map[deck.subject] = {
        subject: deck.subject,
        label: deck.subjectLabel,
        icon: deck.subjectIcon,
        decks: [],
      }
    }
    map[deck.subject].decks.push(deck)
  }
  return Object.values(map)
}

// Returns decks grouped first by grade (ascending), then by subject within each grade.
// Shape: [{ grade, label, subjects: [{ subject, label, icon, decks: [] }] }]
export function getDecksByGrade() {
  const gradeMap = {}
  for (const deck of decks) {
    const grade = deck.grade ?? 0
    if (!gradeMap[grade]) {
      gradeMap[grade] = { grade, label: grade ? `${grade}. osztály` : 'Egyéb', subjectMap: {} }
    }
    const subjects = gradeMap[grade].subjectMap
    if (!subjects[deck.subject]) {
      subjects[deck.subject] = {
        subject: deck.subject,
        label: deck.subjectLabel,
        icon: deck.subjectIcon,
        decks: [],
      }
    }
    subjects[deck.subject].decks.push(deck)
  }
  return Object.values(gradeMap)
    .sort((a, b) => a.grade - b.grade)
    .map(({ grade, label, subjectMap }) => ({
      grade,
      label,
      subjects: Object.values(subjectMap),
    }))
}
