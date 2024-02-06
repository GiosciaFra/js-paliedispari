// Pari e Dispari
// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.


// funzione per generare un numero random che vada da 1 a 5

function randomNumber() {
    return Math.floor(Math.random() * 5 + 1);
}

// funzione per vedere se un numero è pari o dispari

function isEven(number) {
    return number % 2 == 0;
}


// funzione principale del gioco

function OddOrEven() {

    // scelta utente
    let userChoice = prompt("Scegli pari o dispari");

    // verifichiamo scelta utente

    //SE la scelta utente è DIVERSA da 'pari' E  è DIVERSA da 'dispari' allora stampa '...'
    if (userChoice != 'pari' && userChoice != 'dispari') {

        console.log("Scelta non valida, assicurati di aver scritto correttamente.");
        return;
    }

    // input numero scelta utente (la funzione parseInt converte una stringa e restituisce un numero intero)
    let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

    // SE il n.utente è O minore di 1 O maggiore di 5 allora stampa'....'
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        console.log("Scelta non valida. Assicurati di aver inserito un numero da 1 a 5");
        return;
    }


    // il computer genera numero casuale
    let cpuNumber = randomNumber();

    // variabile che somma la 'scelta utente ' e la 'scelta cpu'
    let sum = userNumber + cpuNumber;


    // determino se la somma è pari o dispari

    let result;

    if (isEven(sum)) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    console.log("il computer ha scelto il numero : " + cpuNumber);
    console.log("la somma dei due numeri è : " + sum);
    console.log("il risultato è : " + result);


    //verifica se l'utente ha vinto o perso
    // SE la scelta utente è UGUALE al result hai vinto, ALTRIMENTI hai perso
    if (userChoice === result) {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso");
    }

}


//richiamo funzione principale
OddOrEven();
