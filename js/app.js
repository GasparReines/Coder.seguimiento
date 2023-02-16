let desaparecer = document.getElementById("noExiste")
desaparecer.remove()

let opciones = document.getElementById("depofav")

opciones.addEventListener("change", elegirDeporte)

function elegirDeporte(){
    let respuesta = document.getElementById("depofav").value;
    document.getElementById("respuesta").innerHTML = " El deporte seleccionado fue " + respuesta 
}


let form = document.getElementById("form")
console.log(form)

form.addEventListener("submit", envidarDatos)

function envidarDatos(e){
    e.preventDefault()

    let datos = e.target

    console.log(datos.children[0].value)
    console.log(datos.children[1].value)
}


localStorage.setItem("key", true)

const user = localStorage.getItem("key")

console.log( user )
console.log( typeof user)



const usuarios = [
    {
        id:1,
        nombre: "Gaspar Reines",
        curso: "javascript"
    },
    {
        id:2,
        nombre: "Mateo Paterno",
        curso: "desarrollo web"
    },
    {
        id:3,
        nombre: "Tomas Morelli",
        curso: "angular"
    }
]
 
localStorage.setItem("usuarios", JSON.stringify(usuarios))

//console.log(usuarios)
//console.log(JSON.stringify(usuarios))



