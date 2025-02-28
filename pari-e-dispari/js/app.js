// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione) Dichiariamo chi ha vinto.


// dichiarazione delle variabili:
let userChoice = '';
let userNum = 0;

// funzione per capire se l'input della scelta "pari" o "dispari" è giusta:
function isEvenOrOdd(word){
    word = word.toLowerCase();
    return word === 'pari' || word === 'dispari';
};

// input della scelta "pari" o "dispari":
while (!(isEvenOrOdd(userChoice))){
    userChoice = prompt(`Scegli una tra le seguenti opzioni:
- pari
- dispari`);
        if (!(isEvenOrOdd(userChoice))) alert('Riprova, inserisci "pari" oppure "dispari".');
};

// input del numero da 1 a 5:
while (!(1 <= userNum && userNum <= 5)){
    userNum = parseInt(prompt(`Ora inserisci un numero da 1 a 5:`));
    if (!(1 <= userNum && userNum <= 5)) alert('Riprova, inserisci un numero intero da 1 a 5.');
};

// calcolo numero del computer e somma di numero user + numero computer:
const computerNum = Math.floor(Math.random() * 5 + 1);
const sumNum = userNum + computerNum;

// dichiarazione nuove variabili:
userChoice = userChoice.toLowerCase();
let sumNumResult = '';
let result = '';

// calcolo del vincitore:
if (sumNum % 2 === 0){
    sumNumResult = 'pari';
} else{
    sumNumResult = 'dispari';
};
if (userChoice === sumNumResult){
    result = 'hai vinto';
} else{
    result = 'hai perso';
};

// output:
console.log(`Hai scelto ${userChoice} e il numero ${userNum}.
Il computer ha scelto il numero ${computerNum}.
La somma dei due numeri è ${sumNum}, ${sumNumResult}: ${result}.`);