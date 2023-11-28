Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


PROBLEMA 1
1 - definire una funzione che scomporrà, invertirà e riunirà la parola
    1.1 - definire funzione con un parametro in input
    1.2 - far eseguire funzione di scomposizione della parola in singole lettere tramite '.split'
    1.3 - invertire ordine delle lettere tramite '.reverse'
    1.4 - ricomporre parola tramite '.join'
    1.5 - ritornare risultato con la nuova parola
2 - permettere all'utente di inserire una parola tramite prompt
3 - definire variabile nella quale chiamare funzione definita nel punto 1 e impostare parametro con parola inserita dall'utente
4 - mettere a confronto la parola inserita dall'utente con quella crerata tramite la funzione
    4.1 - SE sono uguali allora stampare 'la parola è palindroma'
    4.2 - ALTRIMENTI stampare 'la perola non è palindroma'


PROBLEMA 2
1 - definire funzione che genererà un numero random compreso tra 1 e 5
    1.1 - dichiarare funzione con un parametro in input
    1.2 - far eseguire funzione che generi e ritorni numero random compreso tra 1 e 5
2 - definire funzione che stabilisca se un numero sia pari o dispari
    2.1 - dichiarare funzione con un parametro in input
    2.2 - far eseguire funzione che stabilisca se il numero in input diviso 2 sia uguale 0
    2.3 - se uguale a zero ritorna valore pari. altrimenti dispari
3 - permettere all'utente di scegliere tra pari e dispari tramite prompt
4 - permettere all'utente di scegliere un numero compreso tra 1 e 5 tramite prompt
5 - sommare numero inserito dall'utente e numero generato casualmente chiamando la funzione definita al punto 1
6 - stabilire se il numero ottenuto è pari o dispari chiamando la funzione definita al punto 2
7 - confrontare il risultato ottenuto dalla funzione con la scelta 'pari/dispari' dell'utente
    7.1 - se i valori sono uguali stampare 'hai vinto'
    7.2 - altrimenti stampare hai perso