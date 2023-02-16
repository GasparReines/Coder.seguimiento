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