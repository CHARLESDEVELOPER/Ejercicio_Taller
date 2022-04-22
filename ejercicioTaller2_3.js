
    let carnes = ["pollo","cerdo","res","pescado"]

    let insectos = ["lombris","grillos","gusanos"]

    let vegetales = ["pepino","zanahoria","brocoli"]

    let ComidaTotal=[]
    
    let TotalVegetales = []

    for(let i=0; i<=50; i++){
       
        
        let Vegetal ={}
        let Insectos={}
        let Carne={}

        Vegetal.nombre =vegetales [Math.floor(Math.random() * vegetales.length)]
        Vegetal.calorias = Math.floor(Math.random() * (500 - 100) + 100 )
        Insectos.nombre =insectos [Math.floor(Math.random() * insectos.length)]
        Insectos.calorias = Math.floor(Math.random() * (500 - 100) + 100 )
        Carne.nombre =carnes [Math.floor(Math.random() * carnes.length)]
        Carne.calorias = Math.floor(Math.random() * (500 - 100) + 100 )

        ComidaTotal.push(Vegetal,Insectos,Carne)
         TotalVegetales.push(Vegetal)
        
    }
    // console.log(ComidaTotal)
    

function Dieta (TotalVegetales, callback){

    setTimeout(()=>{
       let totalvegetales = TotalVegetales.filter((vegetal)=>{
            return(vegetal.nombre == "pepino","zanahoria","brocoli" && vegetal.calorias >= 200)

        })
        callback(totalvegetales)
    },5000)
    
}

    Dieta(TotalVegetales,function (totalvegetales){
    let sumaCalorias = 0
    totalvegetales.forEach(function(finalvegetal){
        sumaCalorias = sumaCalorias + finalvegetal.calorias
    })
    console.log(TotalVegetales)
    console.log("La suma de energia que debe de consumir Grogu es de: "+sumaCalorias)
})




