// controllo delle mail
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


// gioco dei dadi
const generation_btn = document.querySelector('.btn-generation');
let num_utente
let num_computer
let vincitore

generation_btn.addEventListener('click', function() {
    num_utente = document.getElementById('num_utente').innerHTML = Math.floor(Math.random() * 6);

    num_computer = document.getElementById('num_computer').innerHTML = Math.floor(Math.random() * 6);

    // condizione utenza vincirice
    if (num_utente > num_computer) {
        vincitore = document.getElementById('vincitore').innerHTML = 'utente'

      // condizione computer vincirice
    } else if (num_utente < num_computer) {
        vincitore = document.getElementById('vincitore').innerHTML = 'computer'
    }
});




