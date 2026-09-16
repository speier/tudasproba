export default {
  id: 'korulottem_a_tortenelem',
  grade: 5,
  subject: 'history',
  subjectLabel: 'Történelem',
  subjectIcon: '📜',
  title: 'Körülöttem a történelem',
  description: 'Személyes történelem, történelmi források és a múltat elbeszélő művek (krónika, gesta, kódex)',
  icon: '🕰️',
  categories: {
    szemelyes: { label: 'Személyes történelem', icon: '👨‍👩‍👧' },
    forras:    { label: 'Történelmi források',  icon: '📜' },
    kutato:    { label: 'Ki mit kutat?',         icon: '🔍' },
    mu:        { label: 'Történeti művek',       icon: '📖' },
  },
  items: [
    // ── Személyes történelem ────────────────────────────────────────
    { id: 'sz1', prompt: 'Honnan ismerhetjük meg a történelmet a tankönyveken kívül?',        answer: 'Abból, ami velünk és körülöttünk történik – ez is része a történelemnek', category: 'szemelyes' },
    { id: 'sz2', prompt: 'Mit nevezünk személyes történelemnek?',                              answer: 'A saját hétköznapi életünket és a velünk történt eseményeket',            category: 'szemelyes' },
    { id: 'sz3', prompt: 'Kiktől hallhatunk átélt élményeket, elbeszéléseket a múltról?',      answer: 'Szüleinktől és nagyszüleinktől',                                          category: 'szemelyes' },
    { id: 'sz4', prompt: 'Sorolj fel példákat a személyes történelem forrásaira!',             answer: 'Tárgyak, történetek, iratok, festmények, könyvek, naplók, fényképek',     category: 'szemelyes' },
    { id: 'sz5', prompt: 'Milyen épített emlékek őrzik a személyes történelmet?',              answer: 'Szobrok, épületek',                                                       category: 'szemelyes' },

    // ── Történelmi források ──────────────────────────────────────────
    { id: 'f1', prompt: 'Mire szolgálnak a történelmi források?',                             answer: 'Segítik a múlt megismerését, ismereteket hordoznak',                     category: 'forras' },
    { id: 'f2', prompt: 'Milyen két nagy csoportba sorolhatók a történelmi források?',         answer: 'Íratlan és írott források',                                               category: 'forras' },
    { id: 'f3', prompt: 'Mik a tárgyi emlékek? Sorolj fel példákat!',                          answer: 'Az emberek használati tárgyai: szerszámok, pénzek, épületek, fegyverek', category: 'forras' },
    { id: 'f4', prompt: 'Milyen írott és képi forrásokat ismersz?',                            answer: 'Kódex, levél, rajz, fénykép, filmfelvétel',                               category: 'forras' },
    { id: 'f5', prompt: 'Milyen szokások és hagyományok is forrásnak számítanak?',             answer: 'Mese, dal, farsangi mulatság, húsvéti locsolás',                          category: 'forras' },

    // ── Ki mit kutat? ──────────────────────────────────────────────
    { id: 'k1', prompt: 'Milyen forrásokból merít a történész?',                               answer: 'Írott forrásokból',                                                       category: 'kutato' },
    { id: 'k2', prompt: 'Mit vizsgál a nyelvész a történelem megismeréséhez?',                 answer: 'A nyelv változásait',                                                     category: 'kutato' },
    { id: 'k3', prompt: 'Mivel foglalkozik a néprajzkutató?',                                  answer: 'A szokások, hagyományok vizsgálatával',                                   category: 'kutato' },

    // ── Történeti művek: krónika, gesta, kódex ───────────────────────
    { id: 'm1',  prompt: 'Mi a krónika?',                                                      answer: 'Az eseményeket időrendben elbeszélő mű',                                  category: 'mu' },
    { id: 'm2',  prompt: 'Melyik híres magyar krónikát ismered a XV. századból?',              answer: 'Képes Krónika',                                                           category: 'mu' },
    { id: 'm3',  prompt: 'Milyen nyelven íródtak a krónikák?',                                 answer: 'Latin nyelven',                                                           category: 'mu' },
    { id: 'm4',  prompt: 'Mit tartalmaznak a krónikák a valóságos események mellett?',         answer: 'Mondákat',                                                                category: 'mu' },
    { id: 'm5',  prompt: 'Mivel díszítették a krónikákat?',                                    answer: 'Miniatúrákkal (színes, kis képekkel)',                                    category: 'mu' },
    { id: 'm6',  prompt: 'Mi a gesta?',                                                        answer: 'Egy nép tetteit elbeszélő mű',                                            category: 'mu' },
    { id: 'm7',  prompt: 'Melyik a leghíresebb magyar gesta?',                                 answer: 'Gesta Hungarorum',                                                        category: 'mu' },
    { id: 'm8',  prompt: 'Ki írta a Gesta Hungarorumot?',                                      answer: 'Anonymus',                                                                category: 'mu' },
    { id: 'm9',  prompt: 'Hogyan készült a Gesta Hungarorum?',                                 answer: 'Kézzel írott mű',                                                         category: 'mu' },
    { id: 'm10', prompt: 'Mi a témája a Gesta Hungarorumnak?',                                 answer: 'A magyar honfoglalás',                                                    category: 'mu' },
    { id: 'm11', prompt: 'Mi a kódex?',                                                        answer: 'Kézzel írott középkori könyv',                                            category: 'mu' },
    { id: 'm12', prompt: 'Mire írták a középkori kódexeket?',                                  answer: 'Pergamenre',                                                              category: 'mu' },
  ],
}
