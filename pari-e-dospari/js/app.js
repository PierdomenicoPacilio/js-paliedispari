// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione) Dichiariamo chi ha vinto.


// dichiarazione delle variabili e input:
let userChoice = '';
let userNum = 0;
function isEvenOrOdd(word){
    if(word.toLowerCase() === 'pari'){
        return true;
    } else if(word.toLowerCase() === 'dispari'){
        return true;
    } else{
        return false;
    };
};
while (!(isEvenOrOdd(userChoice))){
    userChoice = prompt(`Scegli una tra le seguenti opzioni:
- pari
- dispari`);
        if (!(isEvenOrOdd(userChoice))) alert('Riprova, inserisci "pari" oppure "dispari".');
};
while (!(1 <= userNum && userNum <= 5)){
    userNum = Math.round(prompt(`Ora inserisci un numero da 1 a 5:`));
    if (!(1 <= userNum && userNum <= 5)) alert('Riprova, inserisci un numero intero da 1 a 5.');
};
const computerNum = Math.floor(Math.random() * 5 + 1);
const sumNum = userNum + computerNum;
let sumNumResult = '';
let result = '';
if (sumNum % 2 === 0){
    sumNumResult = 'pari';
} else{
    sumNumResult = 'dispari';
};
if (userChoice.toLocaleLowerCase() === sumNumResult){
    result = 'hai vinto';
} else{
    result = 'hai perso';
};
console.log(`Hai scelto ${userChoice.toLocaleLowerCase()} e il numero ${userNum}.
Il computer ha scelto il numero ${computerNum}.
La somma dei due numeri è ${sumNum}, ${sumNumResult}: ${result}.`);