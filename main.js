// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars

// attivo il click su ciascun quadrato
$('.quadrato').click(function(){


    var quadrato_corrente = $(this);

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(data){

            var numero_random = data.response;

            console.log(numero_random);

            if (numero_random <= 5) {
                quadrato_corrente.addClass('giallo');
            } else {
                quadrato_corrente.addClass('verde');
            }

            quadrato_corrente.append(numero_random);
        }

    });

});
