export default {
  id: 'oszovetseg',
  grade: 5,
  subject: 'hittan',
  subjectLabel: 'Hittan',
  subjectIcon: '✝️',
  title: 'Az Ószövetség',
  description: 'A Biblia nyelve, a héber írás és az ószövetségi könyvek csoportjai',
  icon: '📖',
  categories: {
    nyelv:   { label: 'A Biblia nyelve', icon: '🗣️' },
    konyvek: { label: 'Könyvek csoportjai', icon: '📚' },
    profeta: { label: 'Próféták', icon: '⭐' },
  },
  items: [
    // The language of the Bible
    { id: 'n1', prompt: 'Mi a Biblia másik neve?',                                answer: 'Szentírás',                                                    category: 'nyelv' },
    { id: 'n2', prompt: 'Milyen nyelven íródott a Biblia?',                       answer: 'Héber nyelven',                                                category: 'nyelv' },
    { id: 'n3', prompt: 'Hány különlegessége van a héber írásnak?',                answer: 'Három',                                                        category: 'nyelv' },
    { id: 'n4', prompt: 'Milyen irányba halad a héber szöveg?',                    answer: 'Jobbról balra',                                                category: 'nyelv' },
    { id: 'n5', prompt: 'Hány hangot jelölhet 1 héber betű?',                      answer: '1-et vagy 1/2-et',                                             category: 'nyelv' },
    { id: 'n6', prompt: 'Mit jelöltek először a héber írásban?',                   answer: 'A mássalhangzókat',                                            category: 'nyelv' },
    { id: 'n7', prompt: 'Hogyan jelölték később a magánhangzókat?',                answer: 'Pontokkal és vonalakkal',                                      category: 'nyelv' },
    { id: 'n8', prompt: 'Milyen más nyelvű részek kerültek még a Bibliába?',       answer: 'Arámi és görög nyelvű részek',                                 category: 'nyelv' },

    // Groups of the Old Testament books
    { id: 'k1', prompt: 'Hány nagy csoportra osztjuk az ószövetségi könyveket?',   answer: 'Háromra',                                                      category: 'konyvek' },
    { id: 'k2', prompt: 'Sorold fel az ószövetségi könyvek 3 csoportját!',         answer: 'Történeti, tanítói és prófétai könyvek',                       category: 'konyvek' },
    { id: 'k3', prompt: 'Melyik csoportba tartozik Mózes 5 könyve?',               answer: 'A történeti könyvek közé',                                     category: 'konyvek' },
    { id: 'k4', prompt: 'Mi Mózes 5 könyvének másik neve?',                        answer: 'Tóra',                                                         category: 'konyvek' },
    { id: 'k5', prompt: 'Melyik könyv tartozik még a történeti könyvek közé Mózes 5 könyvén kívül?', answer: 'A Királyok könyve',                        category: 'konyvek' },
    { id: 'k6', prompt: 'Sorolj fel tanítói könyveket!',                           answer: 'Zsoltárok, Példabeszédek, Énekek éneke',                       category: 'konyvek' },
    { id: 'k7', prompt: 'Mely könyvek tartoznak a prófétai könyvek közé?',         answer: 'A nagy- és kispróféták, valamint Dániel könyve',               category: 'konyvek' },

    // Major prophets
    { id: 'p1', prompt: 'Sorold fel a három nagypróféta nevét!',                  answer: 'Izajás, Jeremiás, Ezekiel',                                    category: 'profeta' },
    { id: 'p2', prompt: 'Izajás',                                                 answer: 'Az egyik nagypróféta',                                         category: 'profeta' },
    { id: 'p3', prompt: 'Jeremiás',                                               answer: 'Az egyik nagypróféta',                                         category: 'profeta' },
    { id: 'p4', prompt: 'Ezekiel',                                                answer: 'Az egyik nagypróféta',                                         category: 'profeta' },
    { id: 'p5', prompt: 'Dániel könyve melyik csoportba tartozik?',                answer: 'A prófétai könyvek közé',                                      category: 'profeta' },
  ],
}
