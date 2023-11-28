//1 - definire una funzione che scomporrà, invertirà e riunirà la parola
function invert(){
    let word_invers = [];

    return word_invers = word.split('').reverse().join('');
}

//2 - permettere all'utente di inserire una parola tramite prompt
let word = prompt('inserisci una parola');

//3 - definire variabile nella quale chiamare funzione definita nel punto 1 e impostare parametro con parola inserita dall'utente
let word_invers = invert();
console.log(word_invers);

//4 - mettere a confronto la parola inserita dall'utente con quella creata tramite la funzione

//4.1 - SE sono uguali allora stampare 'la parola è palindroma'
if(word_invers == word){
    console.log('la parola è palindroma');
}
else{
    console.log('la parola non è palindroma');
}