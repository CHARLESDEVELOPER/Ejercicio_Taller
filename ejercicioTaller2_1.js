

function seleccionarActividad (callback){

    let nombres = ["Han","dobi","Goku","Jen"]
    let planetas = ["Tierra","Marte","saturno","venus"]

    setTimeout(()=>{
        Datos = {
            nombre:nombres[Math.floor(Math.random()*nombres.length)],
            Planeta:planetas[Math.floor(Math.random()*planetas.length)],
            Edad:Math.floor(Math.random() * (27 - 10) +10),
            Estatura: Math.random() * (2.0- 1.0)+1.0 
        }
        callback(Datos)
     },10000)
}

seleccionarActividad(function(Datos){
    if (Datos.Edad < 15){
        console.log(Datos)
        console.log("Debe realizar Actividad de Fuerza")
                    
    }else{
       console.log(Datos)
        console.log("Debe realizar Actividad de Sable")
    }
})


