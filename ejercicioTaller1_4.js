
// Funcion Tradicional 

function seleccionarSables(){

    let colores =['Amarillo','Azul','Rojo']
    let portadores = ['totu','Yoda','oba']
    let contador =0
    for(let i=0; i<20; i++){
             let sable = {
            color: colores[Math.floor(Math.random() * colores.length)],
            energia: Math.round(Math.random() * 50 ),
            portador: portadores[Math.floor(Math.random() * portadores.length)]
        }
         if (sable.energia <20){
                contador ++
                 console.log(sable)
             }
    }
    console.log("Los sables con energia menor  a 20 es de: "+ contador)
}
seleccionarSables()




// Funcion Flecha

let seleccionarSables2 = () =>{

    let colores =['Amarillo','Azul','Rojo']
    let portadores = ['totu','Yoda','oba']
    let contador =0

    for(let i=0; i<20; i++){
        let sable = {
        color: colores[Math.floor(Math.random() * colores.length)],
        energia: Math.round(Math.random() * 50 ),
        portador: portadores[Math.floor(Math.random() * portadores.length)]
    }
             if (sable.energia <20){
                contador++
                console.log(sable )
             }
    }

    console.log("Los sables con energia menor  a 20 es de: "+ contador)
}

console.log(seleccionarSables2())

