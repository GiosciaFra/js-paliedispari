// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)
// ATTENZIONE!
// No .reverse, .split e .join

function isPalindrom(word) {

    // metodo che converte tutto in minuscolo per evitare problemi di case sensitive
    word = word.toLowerCase();

    // calcoliamo la lunghezza della parola
    let lenght = word.length


    // creo un ciclo che continua fino a quando 'i' è minore della della
    // metà della lenght della parola
    for (let i = 0; i < Math.floor(lenght / 2); i++) {

        // controllo il carattere corrispondende della parte iniziale
        // e della parte finale della parola
        if (word[i] != word[lenght - 1 - i]) {

            //se i caratteri non corrispondono mi da false (non è palindroma)
            return false;
        }
    }
    // se i caratteri corrispondono mi da true (parola palindroma)
    return true;
}


let userInput = prompt('Inserisci una parola:');

if (isPalindrom(userInput)) {
    console.log('La parola è palindroma')
} else {
    console.log('La parola non è palindroma')
}