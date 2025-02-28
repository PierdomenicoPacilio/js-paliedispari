# Esercizio: Pali e Dispari
### Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
### passaggi:
#### dichiarazione delle variabili e input:
- chiedere all'utente di inserire una parola in un prompt e salvarla in una variabile;
#### funzione:
- creare una funzione che data una parola restituisce un valore booleano (true o false) se la parola è palindroma o meno;
    - creare una variabile della parola reverse = '';
    - FOR (i = parolainseritadall'utente.lenght - 1; i >= 0 ; i--)
        - parola reverse += parolainseritadall'utente[i]; inserire ogni volta una lettera alla parola reverse formando la parola al contrario
    - return parolainseritadall'utente.lenght === parola reverse; 
#### output:
- SE (inserire la funzione(parolainseritadall'utente.lenght))
    - console.log('la parola è palindroma');
- ALTRIMENTI 
    - console.log('la parola non è palindroma');
---
### Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
### passaggi:
#### dichiarazione delle variabili e input:
- far inserire all'user pari o dispari e verificare massimo 5 volte che sia giusto;
- far inserire all'utente un numero da 1 a 5 e verificare massimo 5 volte che sia giusto;
- generare un numero da 1 a 5 del computer e inserirlo in una variabile;
#### funzione:
- sommare il numero scelto dall'user e quello uscito al computer;
- creare una funzione che dica se sono pari o dispari;
#### output:
- in base alla scelta dell'user all'inizio decretiamo il vincitore;
---