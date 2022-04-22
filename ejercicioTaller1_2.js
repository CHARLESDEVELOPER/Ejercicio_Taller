
// Funcion Tradicional 

function separarCodigo(codigo){

    let texto = codigo.split(":")[1]
    return texto
}

let resultado = separarCodigo("kru936 : Antonio")
console.log(resultado)

// Funcion Flecha

let separarCodigo2 = codigo2=> codigo2.split(":")[1]
console.log(separarCodigo2("dkf498 : manuel"))




