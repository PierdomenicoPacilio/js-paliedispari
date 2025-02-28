// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


// dichiarazione delle variabili e input:
const userWord = prompt('inserire la parola per verificare che sia palindroma');
let wordReverse;

// funzione:
function isWordPal (word){
    wordReverse = '';
    for (i = userWord.length - 1; i >= 0; i--){
        wordReverse += word[i];
    };
    return word === wordReverse;
};

// output:
if (isWordPal(userWord)){
    console.log(`la parola ${userWord} è palindroma!`);
} else{
    console.log(`la parola ${userWord} non è palindroma, al contrario si legge ${wordReverse}.`);
};