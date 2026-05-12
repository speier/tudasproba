export default {
  id: 'viz-vizpart',
  subject: 'kornyezet',
  subjectLabel: 'Környezetismeret',
  subjectIcon: '🌿',
  title: 'Élet a vízben, vízparton',
  description: 'A vizek és vízpartok élővilága – növények, állatok, fogalmak (4. osztály)',
  icon: '🦆',
  categories: {
    fak:       { label: 'Fák a vízparton',         icon: '🌳' },
    novenyek:  { label: 'Vízi és vízparti növények', icon: '🌱' },
    emlosok:   { label: 'Emlősök',                  icon: '🦫' },
    madarak:   { label: 'Madarak',                  icon: '🦆' },
    halak:     { label: 'Halak',                    icon: '🐟' },
    ketelt:    { label: 'Kétéltűek és hüllők',      icon: '🐸' },
    rovarok:   { label: 'Rovarok és egyéb állatok', icon: '🦟' },
    fogalmak:  { label: 'Fogalmak',                 icon: '💡' },
    taplalek:  { label: 'Tápláléklánc',             icon: '🔗' },
  },
  items: [
    // ── Fák a vízparton ─────────────────────────────────────────────
    { id: 'fa1', prompt: 'Melyik fa szegélyezi leggyakrabban a vízpartokat?',                         answer: 'Fűzfa',            category: 'fak' },
    { id: 'fa2', prompt: 'A fűzfa mellett melyik másik fa jellemző a vízpartokra?',                   answer: 'Nyárfa',           category: 'fak' },
    { id: 'fa3', prompt: 'Melyik vízparti fa lombja hajlik a víz fölé, árnyékot adva?',               answer: 'Fehér fűz',        category: 'fak' },

    // ── Vízi és vízparti növények ──────────────────────────────────
    { id: 'n1', prompt: 'Melyik lágy szárú, évelő növény nyílik sárgán a vízparton?',                 answer: 'Mocsári gólyahír', category: 'novenyek' },
    { id: 'n2', prompt: 'Melyik magas növény alkot sűrű, zárt foltokat a vízben?',                    answer: 'Nád',              category: 'novenyek' },
    { id: 'n3', prompt: 'Melyik növény hosszú, kard alakú leveleivel nő a vízparton?',                answer: 'Sás',              category: 'novenyek' },
    { id: 'n4', prompt: 'Melyik nádra hasonlító növényt használnak fonáshoz, szövéshez?',             answer: 'Gyékény',          category: 'novenyek' },
    { id: 'n5', prompt: 'Melyik növény hasonlít a nádra, szára háromszög keresztmetszetű?',           answer: 'Káka',             category: 'novenyek' },
    { id: 'n6', prompt: 'Melyik apró levelű növény lebeg a víz tükrén?',                              answer: 'Békalencse',       category: 'novenyek' },
    { id: 'n7', prompt: 'Melyik növény nagy, fehér virággal nyílik a tó felszínén?',                  answer: 'Tündérrózsa',      category: 'novenyek' },
    { id: 'n8', prompt: 'Melyik növény sárga virággal úszik a víz tükrén?',                           answer: 'Vízitök',          category: 'novenyek' },

    // ── Emlősök ─────────────────────────────────────────────────────
    { id: 'em1', prompt: 'Melyik vízparti emlős épít gátat fadarabokból?',                            answer: 'Hód',              category: 'emlosok' },
    { id: 'em2', prompt: 'Melyik vízparti emlős kiváló úszó és halakkal táplálkozik?',                answer: 'Vidra',            category: 'emlosok' },
    { id: 'em3', prompt: 'Melyik apró emlős él a vízparton, és rovarokkal táplálkozik?',              answer: 'Vízi cickány',     category: 'emlosok' },

    // ── Madarak ─────────────────────────────────────────────────────
    { id: 'm1', prompt: 'Melyik a leggyakoribb vadréce hazánkban?',                                   answer: 'Tőkés réce',       category: 'madarak' },
    { id: 'm2', prompt: 'Melyik hosszú lábú, hosszú csőrű madár fészkel a kéményekre is?',            answer: 'Gólya',            category: 'madarak' },
    { id: 'm3', prompt: 'Melyik szürke tollú gázlómadár halászik a sekély vízben?',                   answer: 'Szürke gém',       category: 'madarak' },
    { id: 'm4', prompt: 'Melyik ragadozó madár szerepel a vízparti táplálékláncban?',                 answer: 'Barna rétihéja',   category: 'madarak' },
    { id: 'm5', prompt: 'Melyik kis búvármadár kiválóan úszik és bukik a víz alá?',                   answer: 'Kis vöcsök',       category: 'madarak' },
    { id: 'm6', prompt: 'Melyik fehér tollú gázlómadár fészkel a nádasokban?',                        answer: 'Nagy kócsag',      category: 'madarak' },

    // ── Halak ───────────────────────────────────────────────────────
    { id: 'h1', prompt: 'Melyik a leggyakoribb hazai édesvízi hal, gyakran horgásszák?',              answer: 'Ponty',            category: 'halak' },
    { id: 'h2', prompt: 'Melyik ezüstös pikkelyű, lapos hal él a vizek mélyén?',                      answer: 'Keszeg',           category: 'halak' },
    { id: 'h3', prompt: 'Melyik nyíl alakú ragadozó hal a hazai vizek réme?',                         answer: 'Csuka',            category: 'halak' },
    { id: 'h4', prompt: 'Melyik nagy testű, bajuszos ragadozó hal él a vizek mélyén?',                answer: 'Harcsa',           category: 'halak' },

    // ── Kétéltűek és hüllők ─────────────────────────────────────────
    { id: 'k1', prompt: 'Melyik kis zöld kétéltű mászik fel a növények leveleire?',                   answer: 'Zöld levelibéka',  category: 'ketelt' },
    { id: 'k2', prompt: 'Melyik mocsarakban élő kétéltű hangos kuruttyolásáról ismert?',              answer: 'Mocsári béka',     category: 'ketelt' },
    { id: 'k3', prompt: 'Melyik vizes élőhelyen élő hüllő kiválóan úszik?',                           answer: 'Vízisikló',        category: 'ketelt' },
    { id: 'k4', prompt: 'Melyik páncélos hüllő él a mocsarakban, tavakban?',                          answer: 'Mocsári teknős',   category: 'ketelt' },

    // ── Rovarok és egyéb vízi állatok ───────────────────────────────
    { id: 'r1', prompt: 'Melyik vérszívó rovar lárvája él a vízben?',                                 answer: 'Szúnyog',          category: 'rovarok' },
    { id: 'r2', prompt: 'Melyik nagy szárnyú, gyors röptű rovar vadászik a víz felett?',              answer: 'Szitakötő',        category: 'rovarok' },
    { id: 'r3', prompt: 'Melyik vízi állatnak van ollója és kemény páncélja?',                        answer: 'Folyami rák',      category: 'rovarok' },
    { id: 'r4', prompt: 'Melyik puhatestű él a vízben, és kettős meszes héja van?',                   answer: 'Kagyló',           category: 'rovarok' },
    { id: 'r5', prompt: 'Melyik puhatestű csigafaj él az édesvizekben?',                              answer: 'Vízicsiga',        category: 'rovarok' },

    // ── Fogalmak, alkalmazkodás ─────────────────────────────────────
    { id: 'fo1', prompt: 'Hogyan nevezzük a hosszú lábú, hosszú nyakú vízparti madarakat?',           answer: 'Gázlómadarak',     category: 'fogalmak' },
    { id: 'fo2', prompt: 'Hogyan nevezzük a vízben kiválóan úszó, úszóhártyás madarakat?',            answer: 'Úszómadarak',      category: 'fogalmak' },
    { id: 'fo3', prompt: 'Mi feszül az úszómadarak ujjai között?',                                    answer: 'Úszóhártya',       category: 'fogalmak' },
    { id: 'fo4', prompt: 'Mivel borított a halak teste?',                                             answer: 'Pikkellyel',       category: 'fogalmak' },
    { id: 'fo5', prompt: 'Mivel mozognak a halak a vízben?',                                          answer: 'Úszóval',          category: 'fogalmak' },
    { id: 'fo6', prompt: 'Milyen testfelépítésű a halak teste, hogy jól ússzanak?',                   answer: 'Áramvonalas',      category: 'fogalmak' },
    { id: 'fo7', prompt: 'Mit jelent, hogy a békák kétéltűek?',                                       answer: 'Vízben és szárazon is élnek', category: 'fogalmak' },

    // ── Tápláléklánc ────────────────────────────────────────────────
    { id: 't1', prompt: 'Ki a kezdő tag a "békalencse → tőkés réce → barna rétihéja" láncban?',      answer: 'Békalencse',       category: 'taplalek' },
    { id: 't2', prompt: 'Ki a növényevő a "békalencse → tőkés réce → barna rétihéja" láncban?',      answer: 'Tőkés réce',       category: 'taplalek' },
    { id: 't3', prompt: 'Ki a csúcsragadozó a "békalencse → tőkés réce → barna rétihéja" láncban?',  answer: 'Barna rétihéja',   category: 'taplalek' },
  ],
}
