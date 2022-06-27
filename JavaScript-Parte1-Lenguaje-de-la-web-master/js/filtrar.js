let campoFiltrar = document.querySelector("#filtrar-tabla");

campoFiltrar.addEventListener("input",function(){
    let pacienteBuscado = document.querySelectorAll(".paciente");

    if(this.value.length > 0 ){
        for(let i = 0; i < pacienteBuscado.length; i++){
            let paciente = pacienteBuscado[i];
            let tdNombre= paciente.querySelector(".info-nombre");
            let nombre = tdNombre.textContent;
            //Reemplazo del uso de expresiones regulares
            /*var comparar = nombre.substring(0, this.value.length);
            var compararMinuscula = comparar.toLowerCase();
            var valorDigitadoMinuscula = this.value.toLowerCase();
            if(!(valorDigitadoMinuscula  == compararMinuscula )){
            paciente.classList.add("invisible");
            } else {
            paciente.classList.remove("invisible");
            } */


            let expresion = new RegExp(this.value,"i");



            if(!expresion.test(nombre)){
                paciente.classList.add("invisible");
            }else {
                paciente.classList.remove("invisible");
            };
    
        };

    } else {
        for(let i = 0; i < pacienteBuscado.length; i++){
            let paciente = pacienteBuscado[i];
            paciente.classList.remove("invisible");
        }
    }

    

});