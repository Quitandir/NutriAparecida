var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function (){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //verifica se está tudo ok com a page  a ser requisitada.

    xhr.addEventListener("load", function(){

        if(xhr.status == 200) {
            var respostas = xhr.responseText;
            var pacientes = JSON.parse(respostas); //JSON.parse transforma o JSON(texto da api) em um objeto de JS.
    
            for(var i = 0; i<pacientes.length; i++) {
                var paciente = pacientes[i];
                adicionaPacienteNaTabela(paciente);
            }
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var falhaAoBuscar = document.querySelector("#erro-ajax");
            falhaAoBuscar.classList.remove(".invisivel");
        }
       

    });

    xhr.send(); //Para fazer a requisição.
});

//AJAX: requisição com JS de modo assíncrono, sem precisar usar o navegador e sem parar a execução dos códigos.