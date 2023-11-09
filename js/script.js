
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



  /*BOTAO GRUPO*/

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

  
/*POP UP*/

  $(document).ready(function() {
    $("#abrirPopup").click(function() {
        var popup = window.open("", "Popup", "width=300, height=200");
        $(popup.document.body).html(`
            <ul class="collection">
                <li class="collection-item">
                    <h2><i class="large material-icons"></i> Grupo:</h2>
                </li>
                <li class="collection-item">
                    <i class="large material-icons"></i>
                    <span>Anderson Fernandes</span>
                </li>
                <li class="collection-item">
                    <i class="large material-icons"></i>
                    <span>Gabriel Lima</span>
                </li>
            </ul>
        `);
    });
});


