
function BuscarPlanos (callback){

    let plano = Math.floor(Math.random() * 20 )
    callback(plano)
        
}

BuscarPlanos(function(plano){
    if(plano <= 10){
        console.log("La nave ha despegado con exito, plano: " + plano + ", puede despegar ")
    }else{
        console.log("NO te puedes despegar, el plano es el: " + plano + " devuelvete")
    }
})



