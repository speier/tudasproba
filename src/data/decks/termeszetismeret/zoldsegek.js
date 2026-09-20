export default {
  id: 'zoldsegek',
  grade: 5,
  subject: 'termeszetismeret',
  subjectLabel: 'Természetismeret',
  subjectIcon: '🌱',
  title: 'Zöldségféléink',
  description: 'Melyik szervét fogyasztjuk a zöldségeknek? Paradicsom, burgonya, paprika, káposzta, hagyma, sárgarépa',
  icon: '🥕',
  categories: {
    termes:  { label: 'Termés',  icon: '🍅' },
    gumo:    { label: 'Gumó',    icon: '🥔' },
    hagyma:  { label: 'Hagyma',  icon: '🧅' },
    gyoker:  { label: 'Gyökér',  icon: '🥕' },
    level:   { label: 'Levél',   icon: '🥬' },
    vegyes:  { label: 'Vegyes',  icon: '❓' },
  },
  items: [
    // ── Paradicsom (termés) ──────────────────────────────────────────
    { id: 't1', prompt: 'Honnan származik a paradicsom?',                                    answer: 'Dél-Amerikából',                                    category: 'termes' },
    { id: 't2', prompt: 'Melyik szervét esszük a paradicsomnak?',                             answer: 'A termését (bogyótermés)',                          category: 'termes' },
    { id: 't3', prompt: 'Milyen vitaminban gazdag a paradicsom?',                             answer: 'C-vitaminban',                                      category: 'termes' },
    { id: 't4', prompt: 'Milyen lehet a paradicsom termésének mérete és színe?',              answer: 'Sokféle: nagy vagy kicsi, piros vagy sárga',        category: 'termes' },

    // ── Paprika (termés) ──────────────────────────────────────────────
    { id: 't5', prompt: 'Honnan származik a paprika?',                                       answer: 'Dél-Amerikából',                                    category: 'termes' },
    { id: 't6', prompt: 'Melyik szervét esszük a paprikának?',                                answer: 'A termését (bogyótermés)',                          category: 'termes' },
    { id: 't7', prompt: 'Milyen vitaminban nagyon gazdag a paprika?',                          answer: 'C-vitaminban',                                      category: 'termes' },
    { id: 't8', prompt: 'Ki fedezte fel a paprikában a C-vitamint?',                          answer: 'Szent-Györgyi Albert',                              category: 'termes' },

    // ── Burgonya (gumó) ────────────────────────────────────────────────
    { id: 'g1', prompt: 'Honnan származik a burgonya?',                                       answer: 'Dél-Amerikából',                                    category: 'gumo' },
    { id: 'g2', prompt: 'Melyik szervét esszük a burgonyának?',                                answer: 'A gumóját (módosult szár)',                         category: 'gumo' },
    { id: 'g3', prompt: 'Milyen tápanyagot tartalmaz sok a burgonya gumója?',                  answer: 'Keményítőt',                                        category: 'gumo' },
    { id: 'g4', prompt: 'Ehető-e a burgonya bogyótermése?',                                    answer: 'Nem, mérgező',                                      category: 'gumo' },

    // ── Vöröshagyma és fokhagyma (hagyma) ───────────────────────────────
    { id: 'h1', prompt: 'Melyik szervét esszük a vöröshagymának?',                             answer: 'A hagymagumóját (módosult, rövidült szárú hajtás)', category: 'hagyma' },
    { id: 'h2', prompt: 'Mi található a vöröshagyma burokleveleken belül?',                    answer: 'A hagymalevelek',                                   category: 'hagyma' },
    { id: 'h3', prompt: 'Hogyan szaporítják a vöröshagymát?',                                  answer: 'Dughagymával, vegetatív úton',                      category: 'hagyma' },
    { id: 'h4', prompt: 'Miből áll a fokhagyma hagymagumója?',                                 answer: 'Gerezdekből',                                       category: 'hagyma' },
    { id: 'h5', prompt: 'Melyik szervét esszük a fokhagymának?',                                answer: 'A hagymagumóját (gerezdjeit)',                      category: 'hagyma' },

    // ── Sárgarépa (gyökér) ───────────────────────────────────────────────
    { id: 'gy1', prompt: 'Melyik szervét esszük a sárgarépának?',                              answer: 'A gyökerét (módosult gyökér, répatest)',            category: 'gyoker' },
    { id: 'gy2', prompt: 'Milyen vitamin (előanyagát) tartalmazza a sárgarépa?',               answer: 'A-vitamin (karotin)',                               category: 'gyoker' },
    { id: 'gy3', prompt: 'Milyenek a sárgarépa levelei?',                                      answer: 'Finoman szeldelt, illatos levelek',                 category: 'gyoker' },

    // ── Fejes káposzta (levél) ────────────────────────────────────────
    { id: 'l1', prompt: 'Melyik szervét esszük a fejes káposztának?',                          answer: 'A levelét',                                         category: 'level' },
    { id: 'l2', prompt: 'Hogyan rendeződnek a fejes káposzta levelei?',                        answer: 'Rózsába, fejet alkotva',                            category: 'level' },
    { id: 'l3', prompt: 'Milyen a fejes káposzta szára?',                                      answer: 'Rövid, vaskos szár',                                category: 'level' },

    // ── Vegyes felismerés ──────────────────────────────────────────────
    { id: 'v1', prompt: 'Melyik zöldségnek esszük a gyökerét?',                                answer: 'A sárgarépának',                                    category: 'vegyes' },
    { id: 'v2', prompt: 'Melyik zöldségnek esszük a gumóját (szárgumó)?',                      answer: 'A burgonyának',                                     category: 'vegyes' },
    { id: 'v3', prompt: 'Melyik zöldségnek esszük a levelét?',                                  answer: 'A fejes káposztának',                               category: 'vegyes' },
    { id: 'v4', prompt: 'Melyik két zöldségnek esszük a hagymagumóját?',                       answer: 'A vöröshagymának és a fokhagymának',                category: 'vegyes' },
    { id: 'v5', prompt: 'Melyik két zöldségnek esszük a termését ezek közül: paradicsom, burgonya, paprika?', answer: 'A paradicsomnak és a paprikának',   category: 'vegyes' },
    { id: 'v6', prompt: 'Melyik földrészről származik a paradicsom, a paprika és a burgonya is?', answer: 'Dél-Amerikából',                                  category: 'vegyes' },
  ],
}
