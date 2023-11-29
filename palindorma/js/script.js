//1 - definire una funzione che scomporrà, invertirà e riunirà la parola
function invert(word){

    return word.split('').reverse().join('');
}

//2 - permettere all'utente di inserire una parola tramite prompt
let insert = prompt('inserisci una parola');
let word_invers = invert(insert);


//4.1 - SE sono uguali allora stampare 'la parola è palindroma'
if(word_invers == insert){
    console.log('la parola è palindroma');
}
else{
    console.log('la parola non è palindroma');
}