export default {
  id: 'forradalom-1956',
  grade: 8,
  subject: 'history',
  subjectLabel: 'Történelem',
  subjectIcon: '📜',
  title: 'Az 1956-os forradalom',
  description: 'Az 1956-os forradalom és szabadságharc előzményei, eseményei, szereplői és fogalmai',
  icon: '🇭🇺',
  categories: {
    person:  { label: 'Személy',   icon: '👤' },
    date:    { label: 'Dátum',     icon: '📅' },
    concept: { label: 'Fogalom',   icon: '📖' },
    org:     { label: 'Szervezet', icon: '🏛️' },
  },
  items: [
    // Személyek
    { id: 'p1', prompt: 'Nagy Imre',       answer: '1953 nyarán kormányfő lett, 1955-ben menesztették, majd 1956. október 24-től ismét miniszterelnök; november 1-jén jelentette be a Varsói Szerződésből való kilépést', category: 'person' },
    { id: 'p2', prompt: 'Rákosi Mátyás',    answer: 'Az MDP első titkára, akit 1956 júliusában Moszkva egyetértésével leváltottak',                        category: 'person' },
    { id: 'p3', prompt: 'Gerő Ernő',        answer: '1956 júliusában lett az MDP első titkára Rákosi helyén, majd október végén őt is leváltották',           category: 'person' },
    { id: 'p4', prompt: 'Hegedüs András',   answer: 'A mindössze 33 éves politikus, akit Rákosi ültetett a kormányfői székbe Nagy Imre menesztése után (1955)', category: 'person' },
    { id: 'p5', prompt: 'Kádár János',      answer: 'A Nagy Imre-kormány tagja, akit a szovjetek titokban Moszkvába vittek, majd az új, megszállók által felállított kormány vezetője (első titkára) lett',       category: 'person' },
    { id: 'p6', prompt: 'Hruscsov',         answer: 'Szovjet pártvezető, aki a kibontakozó magyar szabadságharc fegyveres leverését akarta',                 category: 'person' },
    { id: 'p7', prompt: 'Rajk László',      answer: 'Korábbi belügyminiszter, akinek és társainak újratemetésén több tízezer ember vett részt 1956-ban',      category: 'person' },

    // Szervezetek / pártok
    { id: 'o1', prompt: 'MDP',   answer: 'Magyar Dolgozók Pártja – az egyeduralkodó állampárt, amelyet 1956 októberének végén feloszlattak', category: 'org' },
    { id: 'o2', prompt: 'MSZMP', answer: 'Magyar Szocialista Munkáspárt – az MDP helyén 1956 októberében megalakult új kommunista párt, vezetője Kádár János lett', category: 'org' },
    { id: 'o3', prompt: 'MEFESZ', answer: 'Magyar Egyetemisták és Főiskolások Szövetsége – 1956 októberében a szegedi egyetemisták alapították',            category: 'org' },

    // Dátumok
    { id: 'd1', prompt: '1953',                answer: 'Sztálin halála; a Rákosi-diktatúra teljes csődbe jut; Nagy Imre kormányfő lesz',                     category: 'date' },
    { id: 'd2', prompt: '1955. március',       answer: 'Nagy Imrét menesztik kormányfői tisztségéből',                                                       category: 'date' },
    { id: 'd3', prompt: '1956. július',        answer: 'Az MDP vezetősége leváltja Rákosit, helyette Gerő Ernő lesz az első titkár',                        category: 'date' },
    { id: 'd4', prompt: '1956. október 22.',   answer: 'A budapesti Műszaki Egyetem MEFESZ-szervezete 16 pontban fogalmazza meg követeléseit',               category: 'date' },
    { id: 'd5', prompt: '1956. október 23.',   answer: 'A forradalom kirobbanása: békés tüntetés a Petőfi- és Bem-szobornál, este a párt behívja a szovjet csapatokat Budapestre', category: 'date' },
    { id: 'd6', prompt: '1956. október 24.',   answer: 'Hajnalban Nagy Imrét kinevezik a Minisztertanács elnökének; megjelennek a fegyveres felkelő csoportok ("pesti srácok")', category: 'date' },
    { id: 'd7', prompt: '1956. október 25.',   answer: 'Tüntetők vonulnak a Parlamenthez, a sortűz nyomán sok halott és sebesült',                            category: 'date' },
    { id: 'd8', prompt: '1956. október 28.',   answer: 'Nagy Imre azonnali tűzszünetet rendel el, és bejelenti a szovjet csapatok kivonását Budapestről',      category: 'date' },
    { id: 'd9', prompt: '1956. október 30.',   answer: 'Nagy Imre kormánya engedélyezi a többpártrendszer visszaállítását',                                   category: 'date' },
    { id: 'd10', prompt: '1956. november 1.',  answer: 'Nagy Imre bejelenti, hogy Magyarország kilép a Varsói Szerződésből, és semleges ország lesz',          category: 'date' },
    { id: 'd11', prompt: '1956. november 2.',  answer: 'Kádár Jánost titokban Moszkvába viszik a szovjetek',                                                  category: 'date' },
    { id: 'd12', prompt: '1956. november 4.',  answer: 'A szovjet hadsereg újra támadásba lendül; Nagy Imre a jugoszláv követségen keres menedéket',           category: 'date' },

    // Fogalmak
    { id: 'c1',  prompt: '„Hullám" terv',           answer: 'A Magyarországon állomásozó szovjet csapatok terve, hogy tüntetés esetén órákon belül bevonulnak Budapestre', category: 'concept' },
    { id: 'c2',  prompt: '16 pont',                 answer: 'A MEFESZ követelései: a szovjet csapatok távozása, Nagy Imre kormányfői kinevezése, szabad, többpártrendszerű választások', category: 'concept' },
    { id: 'c3',  prompt: 'Lyukas nemzeti zászló',    answer: 'A zászló közepéből kivágott Rákosi-címer nyomán keletkezett jelkép, 1956 jelképévé vált',        category: 'concept' },
    { id: 'c4',  prompt: 'Pesti srácok',             answer: 'A forradalom fiatal, fegyveres harcosai, akik Molotov-koktélokkal is felvették a harcot a szovjet harckocsikkal', category: 'concept' },
    { id: 'c5',  prompt: 'Molotov-koktél',           answer: 'A pesti srácok egyik legfontosabb fegyvere a szovjet páncélosok ellen',                          category: 'concept' },
    { id: 'c6',  prompt: 'Sortűz',                   answer: 'Október 25-én a Parlamentnél a karhatalom tüzet nyitott a tüntetőkre, sok halottal és sebesülttel', category: 'concept' },
    { id: 'c7',  prompt: 'Bábkormány',               answer: 'A megszálló hatalom által kívülről felállított, az ő akaratát végrehajtó kormány (a Kádár-kormány)', category: 'concept' },
  ],
}
