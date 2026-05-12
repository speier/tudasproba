export default {
  id: 'viz-vizpart',
  subject: 'kornyezet',
  subjectLabel: 'Környezetismeret',
  subjectIcon: '🌿',
  title: 'Élet a vízben, vízparton',
  description: 'A vizek és vízpartok élővilága – növények, állatok, táplálékláncok (4. osztály)',
  icon: '🦆',
  categories: {
    novenyek:  { label: 'Növények',         icon: '🌱' },
    emlosok:   { label: 'Emlősök',          icon: '🦫' },
    madarak:   { label: 'Madarak',          icon: '🦆' },
    halak:     { label: 'Halak, kétéltűek', icon: '🐟' },
    egyebek:   { label: 'Rovarok és társaik', icon: '🦟' },
    eletmod:   { label: 'Életmód, alkalmazkodás', icon: '💧' },
    taplalek:  { label: 'Táplálékláncok',   icon: '🔗' },
  },
  items: [
    // ── Növényvilág ─────────────────────────────────────────────────
    { id: 'n1',  prompt: 'Milyen fák szegélyezik leggyakrabban a vízpartokat?',                 answer: 'Fűz- és nyárfák',                                              category: 'novenyek' },
    { id: 'n2',  prompt: 'Miért alkalmasak a fűz- és nyárfák a vízparti életre?',               answer: 'Kedvelik a nedves környezetet, gyökereikkel megkötik a talajt', category: 'novenyek' },
    { id: 'n3',  prompt: 'Mondj egy lágy szárú, évelő vízparti növényt!',                       answer: 'Mocsári gólyahír',                                             category: 'novenyek' },
    { id: 'n4',  prompt: 'Sorolj fel olyan növényeket, amelyek szárának alja a vízben áll!',    answer: 'Sás, nád, káka, gyékény',                                      category: 'novenyek' },
    { id: 'n5',  prompt: 'Mi következik a nádasok után a víz felé haladva?',                    answer: 'A hínárok világa',                                             category: 'novenyek' },
    { id: 'n6',  prompt: 'Sorolj fel 3 hínárnövényt!',                                          answer: 'Békalencse, vízitök, tündérrózsa',                             category: 'novenyek' },
    { id: 'n7',  prompt: 'Melyik növény lebeg a nyílt víz tükrén apró levelekkel?',             answer: 'Békalencse',                                                   category: 'novenyek' },
    { id: 'n8',  prompt: 'Melyik növény virágzik fehér virággal a tó felszínén?',               answer: 'Tündérrózsa',                                                  category: 'novenyek' },
    { id: 'n9',  prompt: 'Hogyan segítik a hínárnövények a vizet?',                             answer: 'Tisztítják a víz felszínét',                                   category: 'novenyek' },
    { id: 'n10', prompt: 'Mi a nád szerepe a vízparti életben?',                                answer: 'Szövetik, tetőt és padlót készítenek belőle, búvóhelyet ad',   category: 'novenyek' },

    // ── Emlősök ─────────────────────────────────────────────────────
    { id: 'em1', prompt: 'Sorolj fel 3 vízparti emlőst!',                                       answer: 'Hód, vidra, vízi cickány',                                     category: 'emlosok' },
    { id: 'em2', prompt: 'Mi segíti az úszó emlősöket az úszásban?',                            answer: 'Úszóhártya feszül az ujjaik között',                           category: 'emlosok' },
    { id: 'em3', prompt: 'Melyik emlős épít gátat a vízben?',                                   answer: 'A hód',                                                        category: 'emlosok' },
    { id: 'em4', prompt: 'Melyik vízparti emlős kiváló úszó és halakkal táplálkozik?',          answer: 'A vidra',                                                      category: 'emlosok' },

    // ── Madarak ─────────────────────────────────────────────────────
    { id: 'm1', prompt: 'Sorolj fel 3 vízparti madarat!',                                       answer: 'Tőkés réce, gólya, gémfélék',                                  category: 'madarak' },
    { id: 'm2', prompt: 'Hogyan nevezzük a hosszú lábú, hosszú nyakú és csőrű vízparti madarakat?', answer: 'Gázlómadaraknak',                                          category: 'madarak' },
    { id: 'm3', prompt: 'Mi segíti az úszómadarakat az úszásban?',                              answer: 'Úszóhártya az ujjaik között',                                  category: 'madarak' },
    { id: 'm4', prompt: 'Melyik a leggyakoribb vadréce hazánkban?',                             answer: 'A tőkés réce',                                                 category: 'madarak' },
    { id: 'm5', prompt: 'Mondj egy ragadozó madarat, amely a vízparti táplálékláncban szerepel!', answer: 'Barna rétihéja',                                             category: 'madarak' },
    { id: 'm6', prompt: 'Milyen madár a szürke gém?',                                           answer: 'Gázlómadár',                                                   category: 'madarak' },

    // ── Halak, kétéltűek, hüllők ────────────────────────────────────
    { id: 'h1', prompt: 'Sorolj fel 2 halat, amely a vizek mélyén él!',                         answer: 'Ponty és keszeg',                                              category: 'halak' },
    { id: 'h2', prompt: 'Mondj egy ragadozó halat!',                                            answer: 'Csuka (vagy harcsa)',                                          category: 'halak' },
    { id: 'h3', prompt: 'Melyik kétéltű él a vízben és a vízparton is?',                        answer: 'Béka (pl. zöld levelibéka)',                                   category: 'halak' },
    { id: 'h4', prompt: 'Melyik hüllő él a vizes élőhelyeken?',                                 answer: 'Mocsári teknős és vízisikló',                                  category: 'halak' },
    { id: 'h5', prompt: 'Hogyan lélegzik kifejlett állapotban a béka?',                         answer: 'Tüdővel és bőrén keresztül',                                   category: 'halak' },

    // ── Rovarok és egyéb állatok ────────────────────────────────────
    { id: 'r1', prompt: 'Mondj 2 rovart, amely a vízparton él!',                                answer: 'Szúnyog és szitakötő',                                         category: 'egyebek' },
    { id: 'r2', prompt: 'Sorolj fel 3 egyéb vízi állatot (rákon, csigán kívül)!',               answer: 'Vízicsiga, kagyló, rák',                                       category: 'egyebek' },
    { id: 'r3', prompt: 'Melyik rovar lárvája él a vízben, és kifejletten ragadozó?',           answer: 'A szitakötő',                                                  category: 'egyebek' },
    { id: 'r4', prompt: 'Mivel táplálkozik a szúnyog lárvája?',                                 answer: 'Apró vízi élőlényekkel, planktonnal',                          category: 'egyebek' },

    // ── Életmód, alkalmazkodás ──────────────────────────────────────
    { id: 'el1', prompt: 'Milyen életmódhoz alkalmazkodtak a vizek, vízpartok élőlényei?',      answer: 'A vízi életmódhoz',                                            category: 'eletmod' },
    { id: 'el2', prompt: 'Hogyan alkalmazkodott a halak teste a vízi élethez?',                 answer: 'Áramvonalas testfelépítés, pikkelyes bőr, úszók',              category: 'eletmod' },
    { id: 'el3', prompt: 'Mit jelent, hogy a víziállatok többsége kiválóan mozog a vízben?',    answer: 'Testfelépítésüknek köszönhetően jól úsznak',                   category: 'eletmod' },
    { id: 'el4', prompt: 'Mi védi a vízparti élőlényeket?',                                     answer: 'A vízi növényzet (nád, hínár) – búvóhelyet, táplálékot ad',   category: 'eletmod' },
    { id: 'el5', prompt: 'Miért fontosak a vizes élőhelyek?',                                   answer: 'Sokféle élőlénynek adnak otthont, táplálékot és szaporodóhelyet', category: 'eletmod' },

    // ── Táplálékláncok ──────────────────────────────────────────────
    { id: 't1', prompt: 'Mondj egy példát a vizes élőhely táplálékláncára!',                    answer: 'Békalencse → tőkés réce → barna rétihéja',                     category: 'taplalek' },
    { id: 't2', prompt: 'Mi a tápláléklánc kezdő tagja?',                                       answer: 'Egy növény (termelő)',                                         category: 'taplalek' },
    { id: 't3', prompt: 'Mi a tápláléklánc utolsó tagja a békalencse → tőkés réce → barna rétihéja láncban?', answer: 'A barna rétihéja (csúcsragadozó)',              category: 'taplalek' },
    { id: 't4', prompt: 'Melyik állat a növényevő a békalencse → tőkés réce → barna rétihéja láncban?', answer: 'A tőkés réce',                                          category: 'taplalek' },
  ],
}
