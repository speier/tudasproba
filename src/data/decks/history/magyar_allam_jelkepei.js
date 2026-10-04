export default {
  id: 'magyar_allam_jelkepei',
  grade: 5,
  subject: 'history',
  subjectLabel: 'Történelem',
  subjectIcon: '📜',
  title: 'A magyar állam jelképei',
  description: 'A címer, a zászló és a pecsét',
  icon: '🇭🇺',
  categories: {
    cimer:   { label: 'Címer',   icon: '🛡️' },
    zaszlo:  { label: 'Zászló',  icon: '🏳️' },
    pecset:  { label: 'Pecsét',  icon: '🔏' },
  },
  items: [
    // ── Címer ──────────────────────────────────────────────────────
    { id: 'c1', prompt: 'Sorold fel a magyar állam jelképeit!',                     answer: 'Címer, zászló, pecsét',                                   category: 'cimer' },
    { id: 'c2', prompt: 'Mi a címer?',                                              answer: 'Egyedi megkülönböztető jelvény',                          category: 'cimer' },
    { id: 'c3', prompt: 'Kinek lehet címere?',                                      answer: 'Személynek, családnak, városnak, országnak',              category: 'cimer' },
    { id: 'c4', prompt: 'Mi látható Magyarország címerének tetején?',               answer: 'A Szent Korona',                                          category: 'cimer' },
    { id: 'c5', prompt: 'Minek a jelképe a Szent Korona?',                          answer: 'A függetlenség jelképe',                                  category: 'cimer' },
    { id: 'c6', prompt: 'Mi látható a magyar címer bal oldalán?',                   answer: 'Piros-fehér sávozás',                                     category: 'cimer' },
    { id: 'c7', prompt: 'Mit jelképez a címer piros-fehér sávozása?',               answer: 'A 7 törzs egyesülését',                                   category: 'cimer' },
    { id: 'c8', prompt: 'Mi látható a magyar címer jobb oldalán?',                  answer: 'Kettős kereszt a Szent Koronán, alatta zöld hármas halom', category: 'cimer' },
    { id: 'c9', prompt: 'Milyen kereszt van a magyar címerben?',                    answer: 'Kettős kereszt',                                          category: 'cimer' },
    { id: 'c10', prompt: 'Milyen színű a hármas halom a címerben?',                 answer: 'Zöld',                                                    category: 'cimer' },

    // ── Zászló ─────────────────────────────────────────────────────
    { id: 'z1', prompt: 'Melyek a magyar nemzeti színek?',                          answer: 'Piros, fehér, zöld',                                      category: 'zaszlo' },
    { id: 'z2', prompt: 'Mit jelképez a piros szín a zászlón?',                     answer: 'Az erőt',                                                 category: 'zaszlo' },
    { id: 'z3', prompt: 'Mit jelképez a fehér szín a zászlón?',                     answer: 'A hűséget',                                               category: 'zaszlo' },
    { id: 'z4', prompt: 'Mit jelképez a zöld szín a zászlón?',                      answer: 'A reményt',                                               category: 'zaszlo' },
    { id: 'z5', prompt: 'Melyik szín jelképezi a hűséget?',                         answer: 'A fehér',                                                 category: 'zaszlo' },
    { id: 'z6', prompt: 'Melyik szín jelképezi a reményt?',                         answer: 'A zöld',                                                  category: 'zaszlo' },
    { id: 'z7', prompt: 'Melyik szín jelképezi az erőt?',                           answer: 'A piros',                                                 category: 'zaszlo' },

    // ── Pecsét ─────────────────────────────────────────────────────
    { id: 'p1', prompt: 'Mi a pecsét?',                                             answer: 'Fémbe vésett ábrázolással ellátott nyomó, amelyet viaszba nyomtak', category: 'pecset' },
    { id: 'p2', prompt: 'Mibe nyomták a pecsétet?',                                 answer: 'Viaszba',                                                 category: 'pecset' },
    { id: 'p3', prompt: 'Mire szolgált a pecsét?',                                  answer: 'A hitelesítés eszköze volt',                              category: 'pecset' },
    { id: 'p4', prompt: 'Mit jelent a mondás: „Megpecsételte a sorsát”?',           answer: 'Döntés született',                                        category: 'pecset' },
  ],
}
