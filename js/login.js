

let user = document.getElementById("email").value;
let pass= document.getElementById("pass").value;


console.log("email");
console.log("pass");

let administrador= {

user:"matias@gmail.com",
password: 1234,
}

console.log("el usuario es {administrador.email} y el pass es {administrador.pass}")

function saluda() {
  console.log { "hola soy una funcion" }
 alert("hola soy una funcion")
}


function login()  {
var user,pass;

     user = document.getElementById("email").Value;
     pass = document.getElementById("pass").Value;

    console.log("el user es {administrador.email} y la pass es {administrador.pass}")


   if (user=="matias@gmail.com" && pass=="1234") {
         alert("por favor ingrese un  usuario y una contrasena")
        
        windows.location= "../pages/contactosceo.html"   
    } 
    



        if ("administrador.user=user && administrador.pass=password") {
           
            wndows.location.href="//pages/administrador.html";
        }else {
            alert("usuario y contraseña incorrecta");
        }



        let imputUser = document.getElementById("email");
        imputUser.value = "";

        imputPass.document.getElementById("password");
        imputPass.value = "";

    }