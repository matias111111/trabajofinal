

let user = document.getElementById("email").value
let password = document.getElementById("password").value;


console.log("email");
console.log("password");

let administrador = {

    user:"matias@gmail.com",
    password:"1234",
}

console.log("el usuario es ${administrador.email} y la contraseña es ${administrador.password}")

function saluda() {
    console.log { "hola soy una funcion" }
    //alert("hola soy una funcion")
}


function login() {


    let user = document.getElementById("email").Value;
    let password = document.getElementById("password").Value;

    console.log("el usuario es ${administrador.email} y la contraseña es ${administrador.password}")


    if (user = "" && password = "") {
        // alert("por favor ingrese un  usuario y una contrasena")
        location..href = "/pages/error.html    
    }

        if (administrador.user = user && administrador.password = password) {
            alert("Bienvenido al administrador");
            location.href = "../pages/administrador.html"
        }else {
            alert("ususario y contraseña incorrecta ");
        }



        let imputUser = document.getElementById("email");
        imputUser.value = "";

        imputPass.document.getElementById("password");
        imputPass.value = "";

    }