
const usuarios = JSON.parse( localStorage.getItem ( "usuarios" ) )
 
usuarios.forEach((user) => {
    console.log(user)
});

//console.log(usuariosJSON)
//console.log(usuarios)