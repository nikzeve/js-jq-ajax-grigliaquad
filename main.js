// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars

$(document).ready(function() {

    var template_html = $('#entry-template').html();
    var template_function = Handlebars.compile(template_html);
    var html_finale = template_function();
    for (var i = 0; i < 36; i++) {
        $('#griglia').append(html_finale);
    }



    $('.quadrato').click(function(){

        // qui dovrei fare un controllo per vedere se il quadrato è già stato cliccato

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

});
