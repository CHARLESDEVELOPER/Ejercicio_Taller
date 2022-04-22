
//Funcion Tradicional


function calcularTemperatura(tempMax, tempMin){

    let temperaturaFinal = (tempMax + tempMin)/2
    return temperaturaFinal

}
let resultado = calcularTemperatura(15,6)
console.log(`${resultado} °C`)

//Funcion Flecha

let calcularTemperatura2 = (tempMax1, tempMin1) => (tempMax1 + tempMin1)/2
console.log(calcularTemperatura2(22,7) + "°C")


