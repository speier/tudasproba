import { shuffle } from '../../questions.js'

// [Einzahl, Artikel, Mehrzahl, magyar]
const ANIMALS = [
  ['Hund', 'der', 'Hunde', 'kutya'],
  ['Katze', 'die', 'Katzen', 'macska'],
  ['Fisch', 'der', 'Fische', 'hal'],
  ['Maus', 'die', 'Mäuse', 'egér'],
  ['Vogel', 'der', 'Vögel', 'madár'],
  ['Hamster', 'der', 'Hamster', 'hörcsög'],
  ['Kaninchen', 'das', 'Kaninchen', 'házinyúl'],
  ['Meerschweinchen', 'das', 'Meerschweinchen', 'tengerimalac'],
  ['Pferd', 'das', 'Pferde', 'ló'],
  ['Hase', 'der', 'Hasen', 'nyúl'],
  ['Schildkröte', 'die', 'Schildkröten', 'teknős'],
  ['Frosch', 'der', 'Frösche', 'béka'],
  ['Schlange', 'die', 'Schlangen', 'kígyó'],
  ['Wellensittich', 'der', 'Wellensittiche', 'hullámos papagáj'],
  ['Papagei', 'der', 'Papageien', 'papagáj'],
  ['Pony', 'das', 'Ponys', 'póni'],
  ['Ratte', 'die', 'Ratten', 'patkány'],
  ['Goldfisch', 'der', 'Goldfische', 'aranyhal'],
  ['Kätzchen', 'das', 'Kätzchen', 'kiscica'],
  ['Huhn', 'das', 'Hühner', 'tyúk'],
  ['Ente', 'die', 'Enten', 'kacsa'],
  ['Kuh', 'die', 'Kühe', 'tehén'],
  ['Schaf', 'das', 'Schafe', 'birka'],
  ['Ziege', 'die', 'Ziegen', 'kecske'],
].map(([sg, art, pl, hu]) => ({ sg, art, pl, hu }))

// Animals that fit the pet story in the reading text.
const PETS = ['Hund', 'Katze', 'Hamster', 'Kaninchen', 'Meerschweinchen', 'Hase', 'Schildkröte', 'Wellensittich', 'Papagei', 'Ratte', 'Kätzchen']
  .map((sg) => ANIMALS.find((a) => a.sg === sg))

export const MOEGEN = [['ich', 'mag'], ['du', 'magst'], ['er/sie/es', 'mag'], ['wir', 'mögen'], ['ihr', 'mögt'], ['sie/Sie', 'mögen']]
const SUBJECTS = [
  ['Ich', 'mag'], ['Du', 'magst'], ['Er', 'mag'], ['Sie', 'mag', 'ő, lány'], ['Wir', 'mögen'], ['Ihr', 'mögt'],
  ['Anna', 'mag'], ['Ben', 'mag'], ['Meine Oma', 'mag'], ['Tom und Max', 'mögen'], ['Lisa und ich', 'mögen'], ['Du und Paul', 'mögt'],
]
// The worksheet avoids bare "Sie", which could be she, they or formal you.
const SHEET_SUBJECTS = SUBJECTS.filter(([s]) => s !== 'Sie')

const OWNERS = [['Lisa', 'f'], ['Anna', 'f'], ['Emma', 'f'], ['Mia', 'f'], ['Ben', 'm'], ['Tom', 'm'], ['Paul', 'm'], ['Max', 'm']]
const PET_NAMES = ['Mimi', 'Hoppel', 'Bello', 'Lucky', 'Coco', 'Flocke', 'Rio', 'Susi', 'Tiger', 'Krümel']
const AGES = ['zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben']
const COLORS = ['braun', 'weiß', 'schwarz', 'grau']
const FOODS = ['Karotten', 'Salat', 'Äpfel', 'Gurken']
const PLAY_PLACES = ['im Garten', 'im Park', 'im Zimmer']
const SLEEP_PLACES = ['auf dem Sofa', 'im Körbchen', 'im Käfig', 'unter dem Bett']
const WORD_HELP = ['klein / groß', 'alt / jung', 'dick / dünn', 'lieb', 'süß', 'lustig', 'frech', 'ruhig', 'schnell', 'braun', 'schwarz', 'weiß', 'grau', 'bunt', 'spielen', 'schlafen', 'fressen', 'laufen', 'schwimmen', 'mögen', 'haben', 'heißen']

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]
const pickOther = (arr, not) => pick(arr.filter((x) => x !== not))
const cap = (s) => s[0].toUpperCase() + s.slice(1)

const indefAcc = (art) => ({ der: 'einen', die: 'eine', das: 'ein' })[art]
const dein = (art) => (art === 'die' ? 'deine' : 'dein')
const petPronoun = (art) => ({ der: 'Er', die: 'Sie', das: 'Es' })[art]

// Plausible wrong plurals: no ending, -e, -(e)n, umlaut + e, -s.
function umlaut(word) {
  const m = word.match(/^(.*)(au|a|o|u)([^aouäöü]*)$/)
  return m ? m[1] + { au: 'äu', a: 'ä', o: 'ö', u: 'ü' }[m[2]] + m[3] : word
}
function wrongPlurals(a) {
  const n = a.sg.endsWith('e') ? 'n' : 'en'
  const forms = new Set([a.sg, a.sg + 'e', a.sg + n, umlaut(a.sg) + 'e', umlaut(a.sg), a.sg + 's'])
  forms.delete(a.pl)
  return shuffle([...forms]).slice(0, 3)
}

// "Bilde Fragen": the words as given, the right question and typical wrong ones.
const POSSESSIVE_SWAP = { dein: 'deine', deine: 'dein' }
function questionTemplates(a) {
  const d = dein(a.art)
  const [subj, Verb] = pick([['du', 'Magst'], ['ihr', 'Mögt'], ['er', 'Mag']])
  return [
    () => ({ words: [subj, 'mögen', a.pl], answer: `${Verb} ${subj} ${a.pl}?`,
      wrong: [`${cap(subj)} ${Verb.toLowerCase()} ${a.pl}?`, `Mögen ${subj} ${a.pl}?`, `${pickOther(['Mag', 'Magst', 'Mögt'], Verb)} ${subj} ${a.pl}?`] }),
    () => ({ words: ['wie viele', a.pl, 'du', 'haben'], answer: `Wie viele ${a.pl} hast du?`,
      wrong: [`Wie viele ${a.pl} du hast?`, `Wie viele ${a.pl} hat du?`, `Wie viele ${a.pl} du haben?`] }),
    () => ({ words: ['wie alt', `${d} ${a.sg}`, 'sein'], answer: `Wie alt ist ${d} ${a.sg}?`,
      wrong: [`Wie alt ${d} ${a.sg} ist?`, `Wie alt sind ${d} ${a.sg}?`, `Wie alt ${d} ${a.sg} sein?`] }),
    () => ({ words: [`${d} ${a.sg}`, 'wie', 'heißen'], answer: `Wie heißt ${d} ${a.sg}?`,
      wrong: [`Wie ${d} ${a.sg} heißt?`, `Wie heißen ${d} ${a.sg}?`, `Wie heißt ${POSSESSIVE_SWAP[d]} ${a.sg}?`] }),
    () => ({ words: ['welche Farbe', `${d} ${a.sg}`, 'haben'], answer: `Welche Farbe hat ${d} ${a.sg}?`,
      wrong: [`Welche Farbe ${d} ${a.sg} hat?`, `Welche Farbe hast ${d} ${a.sg}?`, `Welche Farbe haben ${d} ${a.sg}?`] }),
    () => ({ words: ['was', 'du', 'mögen'], answer: 'Was magst du?',
      wrong: ['Was du magst?', 'Was mögen du?', 'Was mag du?'] }),
  ]
}
// Each item uses a different template and its own animal.
function questionTasks(count) {
  return shuffle([0, 1, 2, 3, 4, 5]).slice(0, count).map((i) => questionTemplates(pick(ANIMALS))[i]())
}

// Short pet story plus 8 true/false statements (3–5 of them true).
function readingTask() {
  const [owner, gender] = pick(OWNERS)
  const animal = pick(PETS)
  const name = pick(PET_NAMES)
  const age = pick(AGES)
  const size = pick(['klein', 'groß'])
  const [c1, c2] = shuffle(COLORS)
  const food = pick(FOODS)
  const play = pick(PLAY_PLACES)
  const sleep = pick(SLEEP_PLACES)
  const P = petPronoun(animal.art)
  const text = [
    `Das ist ${owner}.`, `${gender === 'f' ? 'Sie' : 'Er'} hat ${indefAcc(animal.art)} ${animal.sg}.`,
    `${cap(animal.art)} ${animal.sg} heißt ${name}.`, `${name} ist ${age} Jahre alt.`,
    `${P} ist ${size}, ${c1} und ${c2}.`, `${name} mag ${food} sehr.`,
    `${owner} spielt jeden Tag mit ${name} ${play}.`, `Am Abend schläft ${name} ${sleep}.`,
  ].join(' ')

  const other = pickOther(PETS, animal)
  const statements = [
    [`${owner} hat ${indefAcc(animal.art)} ${animal.sg}.`, `${owner} hat ${indefAcc(other.art)} ${other.sg}.`],
    [`${cap(animal.art)} ${animal.sg} heißt ${name}.`, `${cap(animal.art)} ${animal.sg} heißt ${pickOther(PET_NAMES, name)}.`],
    [`${name} ist ${age} Jahre alt.`, `${name} ist ${pickOther(AGES, age)} Jahre alt.`],
    [`${name} ist ${size}.`, `${name} ist ${size === 'klein' ? 'groß' : 'klein'}.`],
    [`${name} ist ${c1} und ${c2}.`, `${name} ist ${c1} und ${pickOther(COLORS.filter((c) => c !== c1), c2)}.`],
    [`${name} mag ${food}.`, `${name} mag ${pickOther(FOODS, food)}.`],
    [`${owner} spielt ${play} mit ${name}.`, `${owner} spielt ${pickOther(PLAY_PLACES, play)} mit ${name}.`],
    [`${name} schläft ${sleep}.`, `${name} schläft ${pickOther(SLEEP_PLACES, sleep)}.`],
  ]
  const trueCount = 3 + Math.floor(Math.random() * 3)
  const truths = shuffle(statements.map((_, i) => i < trueCount))
  return { text, items: statements.map(([t, f], i) => ({ text: truths[i] ? t : f, correct: truths[i] })) }
}

// Printable test in the shape of the school's "Test A – Haustiere".
export function makeSheet() {
  const plural = shuffle(ANIMALS).slice(0, 5)
  const rest = shuffle(ANIMALS.filter((a) => !plural.includes(a)))
  const [example, ...articleItems] = rest.slice(0, 6)
  const moegenAnimals = shuffle(rest.slice(6)).slice(0, 6)
  return {
    plural: plural.map((a, i) => ({ ...a, count: ['zwei', 'drei', 'vier'][i % 3] })),
    example,
    articles: articleItems,
    moegen: shuffle(SHEET_SUBJECTS).slice(0, 6).map(([subject, form], i) => ({ subject, form, animal: moegenAnimals[i] })),
    questions: questionTasks(4),
    reading: readingTask(),
    writing: {
      title: pick(['Mein Haustier', 'Mein Traumhaustier']),
      words: shuffle(WORD_HELP).slice(0, 12),
    },
  }
}

// Quiz: always new multiple choice questions from the word bank.
function quizQuestion(type, i) {
  const a = pick(ANIMALS)
  const base = { id: `g-${i}`, itemId: type, category: type }
  if (type === 'plural') {
    return { ...base, label: `Mi a többes száma? ${a.art} ${a.sg} – die …`, options: shuffle([a.pl, ...wrongPlurals(a)]), correctAnswer: a.pl, explanation: `${a.art} ${a.sg} – die ${a.pl}` }
  }
  if (type === 'article') {
    return { ...base, label: `Melyik névelő illik hozzá? … ${a.sg}`, options: ['der', 'die', 'das'], correctAnswer: a.art, explanation: `${a.art} ${a.sg} (${a.hu})` }
  }
  if (type === 'vocab') {
    const others = shuffle(ANIMALS.filter((o) => o !== a)).slice(0, 3)
    return { ...base, label: `Hogy mondjuk németül: ${a.hu}?`, options: shuffle([a, ...others].map((o) => `${o.art} ${o.sg}`)), correctAnswer: `${a.art} ${a.sg}`, explanation: `${a.hu} = ${a.art} ${a.sg}` }
  }
  if (type === 'moegen') {
    const [subject, form, hint] = pick(SUBJECTS)
    return { ...base, label: `${subject}${hint ? ` (${hint})` : ''} ___ ${a.pl}.`, options: shuffle(['mag', 'magst', 'mögen', 'mögt']), correctAnswer: form, explanation: `${subject} ${form} ${a.pl}.` }
  }
  const q = pick(questionTemplates(a))()
  return { ...base, label: `Melyik a helyes kérdés? (${q.words.join(' – ')})`, options: shuffle([q.answer, ...q.wrong]), correctAnswer: q.answer, explanation: q.answer }
}

export default {
  id: 'nemet-haustiere',
  grade: 5,
  subject: 'nemet',
  subjectLabel: 'Német',
  subjectIcon: '🇩🇪',
  title: 'Haustiere – háziállatok',
  description: 'Többes szám, névelő, a „mögen” ragozása, kérdések – mindig új szavakkal',
  icon: '🐶',
  categories: {
    vocab:    { label: 'Szavak',      icon: '🐾' },
    plural:   { label: 'Többes szám', icon: '👯' },
    article:  { label: 'Névelő',      icon: '🔤' },
    moegen:   { label: 'mögen',       icon: '❤️' },
    question: { label: 'Kérdések',    icon: '❓' },
  },
  generate(count = 10) {
    const types = Object.keys(this.categories)
    return shuffle(Array.from({ length: count }, (_, i) => types[i % types.length])).map(quizQuestion)
  },
}
