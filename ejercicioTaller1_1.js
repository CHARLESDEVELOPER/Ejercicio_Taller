
// Funcion Tradicional

function medirDistancia(x1,y1,x2,y2){
    
    let raizCuadrada =Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
    return raizCuadrada.toFixed(2)
}

let resultado = medirDistancia(0,0,30,30)
console.log(resultado)

// Funcion flecha

let medirDistancia2 = (x1,y1,x2,y2) => raizCuadrada =Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2)).toFixed(2)

let distancia = medirDistancia2(0,0,30,30)

console.log(distancia)




