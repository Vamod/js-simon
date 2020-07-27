// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

var numeriCasuali = [];
var i = 0;
//genero 5 numeri casuali
while (numeriCasuali.length < 5) {
    var numeroCasuale = generaRandom(1, 100);
    //controllo che i numeri siano diversi tra di loro
    if(!numeriCasuali.includes(numeroCasuale)){
    numeriCasuali.push(numeroCasuale);
} i++;
}
// console.log(numeriCasuali);

// visualizzo numeri generati
alert(numeriCasuali);

// tramite setTimeout dopo 30s si eseguirà la funzione chiediNumeri
setTimeout(chiediNumeri, 30000);





// funzioni

//funzione genera random
function generaRandom(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}


function chiediNumeri() {
    //array vuoto per memorizzare numeri utente
        var numeriUtente = [];
    // array vuoto per memorizzare il match tra i numeri random e quelli dell'utente
        var match = [];

        // creo ciclo per richiedere 5 volte i numeri all'utente e li inserisco nei numeriUtente
        var i = 0;
        while (numeriUtente.length < 5) {
            var numero = parseInt(prompt('Inserisci numero'));
            numeriUtente.push(numero);
            // se tra i numeri dell'utente ce n'è uno dei numeri generati lo inserisco nel array match
            if(numeriCasuali.includes(numero)){
                match.push(numero);
        }   ; i++;

        }
        // opzioni risultato
        if (match.length == 1){
            alert('Hai indovinato un numero! Il numero è: ' + match);
        }else if(match.length >= 2 ){
            alert('Hai indovinato: ' + match.length + ' numeri! I numeri sono: ' + match);
        }else {
            alert('Non hai indovinato nemmeno un numero!!!');
        }

    }
