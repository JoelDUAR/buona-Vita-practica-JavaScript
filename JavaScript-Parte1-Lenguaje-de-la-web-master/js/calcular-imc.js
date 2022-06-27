function calcularIMC(peso,altura){
    let imc = peso/(altura*altura);
    return imc.toFixed(2);
}

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i<pacientes.length; i++) {

    let paciente = pacientes[i];
    let tdPeso= paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;
    let peso = tdPeso.textContent;
    let tdIMC = paciente.querySelector(".info-imc");
    
    let pesoValido = validarPeso(peso);
    let alturaValida= validarAltura(altura);

    if(!pesoValido) {
        console.log("Peso Incorrecto");
        tdIMC.textContent = "peso incorrecto"
        pesoValido = false
        paciente.classList.add("paciente-incorrecto");
    }
        
    if(!validarAltura) {
        console.log("Altura Incorrecta");
        tdIMC.textContent = "altura incorrecta"
        alturaValida = false;
        paciente.classList.add("paciente-incorrecto");
    }
        
    if (pesoValido && alturaValida) {
        tdIMC.textContent = calcularIMC(peso,altura);
    }
}

function validarPeso(peso){
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}


function validarAltura(altura){
    if(altura >= 0 &&  altura < 3.00) {
        return true;
    } else {
        return false;
    }
}
