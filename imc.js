function calculo(){
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var res = document.getElementById('res')
    var resultado = document.getElementById('resultado')
    var a = Number(altura.value)
    var p = Number(peso.value)
    var imc = p / (a * a)
    res.innerHTML = `Seu IMC é de <strong>${imc.toFixed(1)}</strong>`
    if (imc < 18.4){
        resultado.innerHTML = `Com IMC de ${imc.toFixed(1)}, você está <strong class="resultado">ABAIXO DO PESO</strong>!`
        }
        else if (imc > 18.4 && imc < 26){
            resultado.innerHTML = `Com IMC de ${imc.toFixed(1)}, você está no seu <strong class="resultado">PESO IDEAL</strong>!`
        }
        else if (imc > 26.1 && imc < 30){
            resultado.innerHTML = `Com IMC de ${imc.toFixed(1)}, você está com <strong class="resultado">SOBREPESO</strong>`
        }
        else if (imc > 30.1 && imc <= 40){
            resultado.innerHTML = `Com IMC de ${imc.toFixed(1)}, você está com <strong class="resultado">OBESIDADE</strong>`
        }
    else {
        resultado.innerHTML = `Com IMC de ${imc.toFixed(1)}, você está com <strong class="resultado">OBESIDADE MÓRBIDA</strong> `
    }
}




//ABAIXO DE 18.4: ABAIXO DO PESO
//ENTRE 18.5 E 25: PESO IDEAL
//ENTRE 26.1 E 30: SOBREPESO
//ENTRE 30.1 E 40: OBESIDADE
//ACIMA DE 40: OBESIDADE MÓRBIDA