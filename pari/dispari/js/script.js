//1 - definire funzione che genererà un numero random compreso tra 1 e 5
function random_num(){
    return Math.floor(Math.random() * 5 + 1);
}

//2 - definire funzione che stabilisca se un numero sia pari o dispari
function pariDispari(even){
    if(even/2 == 0){
        return 'pari';
    }
    else{
        return 'dispari';
    }
}

//3 - permettere all'utente di scegliere tra pari e dispari tramite prompt
let choice1 = prompt('scegli tra pari e dispari');


//4 - permettere all'utente di scegliere un numero compreso tra 1 e 5 tramite prompt
let choice2 = prompt('scegli un numero tra 1 e 5');

//5 - sommare numero inserito dall'utente e numero generato casualmente chiamando la funzione definita al punto 1
let somma = choice2 + random_num();

//6 - stabilire se il numero ottenuto è pari o dispari chiamando la funzione definita al punto 2
let result = pariDispari(somma);

//7 - confrontare il risultato ottenuto dalla funzione con la scelta 'pari/dispari' dell'utente
if(choice1 = result){
    console.log('hai vinto');
}
else{
    console.log('hai perso');
}