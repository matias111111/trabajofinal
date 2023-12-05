

let email= document.getElementById("email").value;
let pass= document.getElementById("password").value;



function login() {

 
   if (administrador.user=="matias@gmail.com" && administrador.password=="1234") {
        
    location.href="../pages/administrador.html"

        
    } 
    



        if ("administrador.user==user && administrador.pass==password") {
           
            location.href="../pages/error.html";
        }else {
            alert("usuario y contraseña incorrecta");
        }



    }