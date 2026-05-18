export default {
  id: 'kommunista-hatalomatvetel',
  grade: 7,
  subject: 'history',
  subjectLabel: 'Történelem',
  subjectIcon: '📜',
  title: 'Kommunista hatalomátvétel',
  description: 'A kommunisták hatalomra jutása, a Rákosi-diktatúra kezdete és az államosítás (1946–1951)',
  icon: '☭',
  categories: {
    person:  { label: 'Személy',         icon: '👤' },
    date:    { label: 'Dátum',           icon: '📅' },
    concept: { label: 'Fogalom',         icon: '📖' },
    party:   { label: 'Párt',            icon: '🏛️' },
  },
  items: [
    // Személyek
    { id: 'p1', prompt: 'Rákosi Mátyás',  answer: 'A Magyar Kommunista Párt, majd az MDP főtitkára, a diktatúra vezetője', category: 'person' },
    { id: 'p2', prompt: 'Nagy Ferenc',    answer: 'Kisgazdapárti miniszterelnök, 1947 májusában lemondatták',              category: 'person' },
    { id: 'p3', prompt: 'Kovács Béla',    answer: 'A Független Kisgazdapárt főtitkára, akit a szovjetek elhurcoltak',     category: 'person' },
    { id: 'p4', prompt: 'Gerő Ernő',      answer: 'A „trojka" tagja Rákosi és Farkas mellett',                            category: 'person' },
    { id: 'p5', prompt: 'Farkas Mihály',  answer: 'A „trojka" tagja Rákosi és Gerő mellett',                              category: 'person' },
    { id: 'p6', prompt: 'Tildy Zoltán',   answer: 'Köztársasági elnök, akit lemondattak és házi őrizetbe vettek',         category: 'person' },

    // Pártok / rövidítések
    { id: 'pt1', prompt: 'MKP',  answer: 'Magyar Kommunista Párt',     category: 'party' },
    { id: 'pt2', prompt: 'SZDP', answer: 'Szociáldemokrata Párt',      category: 'party' },
    { id: 'pt3', prompt: 'NPP',  answer: 'Nemzeti Parasztpárt',        category: 'party' },
    { id: 'pt4', prompt: 'MDP',  answer: 'Magyar Dolgozók Pártja (az MKP és az SZDP egyesüléséből, 1948)', category: 'party' },
    { id: 'pt5', prompt: 'FKgP', answer: 'Független Kisgazdapárt',     category: 'party' },

    // Dátumok
    { id: 'd1', prompt: '1946. május',         answer: 'Rákosi moszkvai látogatása után meghirdeti a teljes hatalomátvételért folytatott harcot', category: 'date' },
    { id: 'd2', prompt: '1947. február 25.',   answer: 'Kovács Bélát a szovjetek elhurcolják',                            category: 'date' },
    { id: 'd3', prompt: '1947. május',         answer: 'Nagy Ferenc miniszterelnök lemondása',                            category: 'date' },
    { id: 'd4', prompt: '1947. augusztus',     answer: 'Kék cédulás választás (választási csalás)',                       category: 'date' },
    { id: 'd5', prompt: '1948. június',        answer: 'Az MKP és az SZDP egyesülése: létrejön az MDP',                   category: 'date' },
    { id: 'd6', prompt: '1949. augusztus',     answer: 'Az új alkotmány elfogadása, Magyarország népköztársaság lesz',    category: 'date' },
    { id: 'd7', prompt: '1949',                answer: 'A legkisebb műhelyeket is államosítják',                          category: 'date' },
    { id: 'd8', prompt: '1951',                answer: 'Újra bevezetik a jegyrendszert az alapvető élelmiszerekre',       category: 'date' },

    // Fogalmak
    { id: 'c1',  prompt: 'Szalámitaktika',          answer: 'A kommunisták módszere: az ellenfeleket külön-külön, lépésről lépésre szorították ki a hatalomból', category: 'concept' },
    { id: 'c2',  prompt: 'Kék cédulás választás',   answer: 'Az 1947-es választás, amelyet a kommunisták választási csalással (hamis szavazatokkal) nyertek meg', category: 'concept' },
    { id: 'c3',  prompt: 'Egypártrendszer',         answer: 'Olyan politikai rendszer, amelyben csak egy párt (az MDP) gyakorolhatja a hatalmat',                category: 'concept' },
    { id: 'c4',  prompt: 'Népköztársaság',          answer: 'Az 1949-es alkotmány szerinti államforma; a hatalom „a dolgozó népé", valójában a kommunista párté', category: 'concept' },
    { id: 'c5',  prompt: 'Trojka',                  answer: 'A három legfontosabb pártvezető: Rákosi Mátyás, Gerő Ernő és Farkas Mihály',                       category: 'concept' },
    { id: 'c6',  prompt: 'Pártállam',               answer: 'Az állami szervek az MDP vezetőségének határozatait hajtják végre, nem az országgyűlés dönt',       category: 'concept' },
    { id: 'c7',  prompt: 'Tanácsok',                answer: 'A korábbi önkormányzatok helyett létrehozott helyi szervek, amelyek csak a központi döntéseket hajtották végre', category: 'concept' },
    { id: 'c8',  prompt: 'Államosítás',             answer: 'A magántulajdon (gyárak, üzemek, áruházak, bankok, műhelyek) állami tulajdonba vétele',             category: 'concept' },
    { id: 'c9',  prompt: '„Vas és acél országa"',  answer: 'Az erőltetett nehézipar-fejlesztés jelszava a Rákosi-korszakban',                                   category: 'concept' },
    { id: 'c10', prompt: 'Kollektivizálás / téesz', answer: 'A parasztok földjének és termelőeszközeinek elvétele, és termelőszövetkezetbe kényszerítése',      category: 'concept' },
    { id: 'c11', prompt: 'Kulák',                   answer: 'A kommunisták így bélyegezték meg a nagygazdákat, akiket üldöztek',                                category: 'concept' },
    { id: 'c12', prompt: 'Beszolgáltatás',          answer: 'A parasztságra kirótt kötelezettség: terményt kellett adniuk az államnak',                         category: 'concept' },
    { id: 'c13', prompt: 'Padlássöprés',            answer: 'A beszolgáltatás kikényszerítése: a rendőrség a parasztok padlásáról is elvitte a terményt',        category: 'concept' },
  ],
}
