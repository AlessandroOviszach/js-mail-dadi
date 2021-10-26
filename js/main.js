/**
Esercizio di oggi: JS Mail e Dadi
nome repo: js-mail-dadi

Mail
    - crea una lista contenente almeno 3 indirizzi email
    - chiedi all’utente la sua email,
    - controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
    - stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Ricordate che la documentazione è li per aiutarci: https://www.w3schools.com/js/js_random.asp

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
Consigli del giorno:
    1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
    2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
    3. si ma noi cosa vogliamo fare?
    4. torniamo a scrivere in italiano
    5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
Buon lavoro e a domani :faccia_leggermente_sorridente:
 */



const mail_list = [
    'prova-mail-1@gmail.com',
    'prova-mail-2@gmail.com', 
    'prova-mail-3@gmail.com'
                ];
const access_btn = document.querySelector('.btn-access');

let corrispondance = false;
let email = document.querySelector('.email_input');

access_btn.addEventListener('click', function() {
    for (let i = 0; i < mail_list.length; i++) {
        if (email.value == mail_list[i]) {
            corrispondance = true;
            console.log(`corrispondenza con ${email.value}`);
            break;
        } else {
            console.log('corrispondenza non trovata');
        }
    }
});

