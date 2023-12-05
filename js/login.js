var user = document.getElementById("user").value
var pass = document.getElementById("pass").value


function ingreso() {
    
    
    if (user == "" || password == ""){
      
        location.href = '/pages/error.html'
        
    }

    if ( user === "matias" && pass === 1234){

        Window.Location.href = '/pages/administrador.html'
        
        
        

    }else{
        
        Window.Location.href = '/pages/error.html'
        console.log(location.pathname)
    }

    

    
}