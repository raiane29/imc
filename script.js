
function calcular() {
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)

    if (altura <= 0 || peso <= 0) {
        alert("Preenchar todos os campos!")
        return;
    }

    const IMC = peso / (altura * altura)
    let imc =  IMC.toFixed(2)

    if(imc < 16){
        alert(`Muito a baixo do peso com ${imc}`)
    
    }else if(imc < 18.4 || imc < 17){
        alert(`Abaixo do peso com ${imc}`)
    
    }else if(imc < 18.5 || imc < 25){
        alert(`Peso normal com ${imc}`)

    }else if(imc < 18.5 || imc < 25){
        alert(`Acima do peso com ${imc}`)
    
    }else if(imc < 30 || imc < 34){
        alert(`Obesidade gra I com ${imc}`)
    
    }else if(imc < 35 || imc < 40){
        alert(`Obesidade gra II com${imc}`)

    }else if(imc < 4){
        alert(`Obesidade gra III com${imc}`)
    }

}