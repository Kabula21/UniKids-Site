
/* Carrousel*/
$(document).ready(function(){
    $('.carousel').carousel();
    setInterval(function(){
        $('.carousel').carousel('next');
    }, 6000);

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
    });
});

  /*Formulario*/

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor.
        // Você pode usar JavaScript ou uma biblioteca como jQuery para fazer a requisição AJAX.
    });
});


/*Search*/
$(document).ready(function(){
    M.updateTextFields();
  });


