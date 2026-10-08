import { shuffle } from '../../questions.js'

// Difficulty steps: start small, end at a full byte.
const MAX_VALUES = [15, 31, 63, 127, 255]

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function dec2binSteps(n) {
  const steps = []
  for (let x = n; x > 0; x = Math.floor(x / 2)) {
    steps.push(`${x} : 2 = ${Math.floor(x / 2)}, maradék ${x % 2}`)
  }
  steps.push(`Maradékok alulról felfelé: ${n.toString(2)}`)
  return steps
}

function bin2decSteps(n) {
  const bits = n.toString(2).split('')
  const values = bits.map((_, i) => 2 ** (bits.length - 1 - i))
  const terms = bits.map((b, i) => `${b}·${values[i]}`)
  const nonZero = values.filter((_, i) => bits[i] === '1')
  return [
    `Helyiértékek: ${values.join(', ')}`,
    terms.join(' + '),
    nonZero.length > 1 ? `= ${nonZero.join(' + ')} = ${n}` : `= ${n}`,
  ]
}

function makeQuestion(type, n, index) {
  const bin = n.toString(2)
  if (type === 'dec2bin') {
    return {
      id: `g-${index}`, itemId: 'dec2bin', category: 'dec2bin', input: true,
      value: String(n),
      label: `Írd át kettes számrendszerbe: ${n}`,
      correctAnswer: bin,
      explanation: `${n} = ${bin}₂`,
      steps: dec2binSteps(n),
    }
  }
  return {
    id: `g-${index}`, itemId: 'bin2dec', category: 'bin2dec', input: true,
    value: bin,
    label: `Írd át tízes számrendszerbe: ${bin}₂`,
    correctAnswer: String(n),
    explanation: `${bin}₂ = ${n}`,
    steps: bin2decSteps(n),
  }
}

export default {
  id: 'szamrendszerek-atvaltas',
  grade: 8,
  subject: 'informatika',
  subjectLabel: 'Informatika',
  subjectIcon: '💻',
  title: 'Átváltás: tízes ↔ kettes',
  description: 'Gyakorló feladatok mindig új számokkal, hibánál lépésről lépésre megoldással',
  icon: '🔁',
  categories: {
    dec2bin: { label: 'Tízes → kettes', icon: '➗' },
    bin2dec: { label: 'Kettes → tízes', icon: '➕' },
  },
  generate(count = 10) {
    // Shuffle within pairs so both types span every difficulty level.
    const types = Array.from({ length: Math.ceil(count / 2) }, () => shuffle(['dec2bin', 'bin2dec']))
      .flat()
      .slice(0, count)
    const used = { dec2bin: new Set(), bin2dec: new Set() }
    return types.map((type, i) => {
      const max = MAX_VALUES[Math.floor((i * MAX_VALUES.length) / count)]
      let n
      do n = randomInt(2, max)
      while (used[type].has(n) && used[type].size < max - 1)
      used[type].add(n)
      return makeQuestion(type, n, i)
    })
  },
}
