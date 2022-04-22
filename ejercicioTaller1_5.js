// funcion tradicional


function pagarPersonal(cantidad){
    
    let salario = 3500000
    let comision = 1500000 * cantidad
    let deduccion = 0.05

    let descuento = comision*deduccion
    let total_a_pagar = salario + comision - descuento
    return total_a_pagar
}
let netoPagar = pagarPersonal(6)
console.log(netoPagar)

// Funcion flecha

let pagarPersonal2 = cantidad => nomina = 3500000 + ((1500000*cantidad)  - (1500000*cantidad) * 0.05) 

console.log(pagarPersonal2(6))

