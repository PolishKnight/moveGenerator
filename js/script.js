const texts = [
    'Szukanie odpowiedzi na TikToku...',
    'Poszukiwanie kostki do losowania...', 
    'Sprawdzanie partii topowych zawodników...',
    'Przeglądanie Twitcha...',
    'Rozważanie opcji Stockfisha...',
    'Podziwianie gwiazd...',
    'Szukanie wariantów Atomic...',
    'Sprawdzanie książek debiutowych...',
    'Przeglądanie "Agresywnych szachów"',
    'Telefon do znajomych szachistów...',
    'Analiza wszystkich gambitów...'
];

const moves = ['a3', 'a4', 'Sa3', 'b3', 'b4', 'c3', 'c4', 'Sc3', 'd3', 'd4', 'e3', 'e4', 'f3', 'f4', 'Sf3', 'g3', 'g4', 'h3', 'h4', 'Sh3'];

let repeat = []
  
  
score.innerHTML = 'Sprawdzanie: <b>Jaki ruch będzie najlepszy?</b>';

let interval = setInterval(() => {
    let i;
    do {
        i = Math.floor(Math.random() * 10);
    } while (repeat.includes(i));

    info.innerHTML = texts[i];
    repeat.push(i);
}, 2000);

setTimeout(() => {
    clearInterval(interval);
    let i = Math.floor(Math.random() * 20);
    score.innerHTML = 'Wynik: ' + moves[i];
    info.innerHTML = '';
}, 10000);
