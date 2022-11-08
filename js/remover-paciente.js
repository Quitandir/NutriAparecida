var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    
    event.target.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();

    }, 500)
    //O alvo do evento é apenas o TD. Para remover todo TR, usamos a propriedade "parentNode" para ampliar o escopo da função para o seu parent.
    
})


//Não consegue remover pacientes adicionados 
//pacientes.forEach(function(paciente) {
//    paciente.addEventListener("dblclick", function() {
//        this.remove();
//    };)
//});