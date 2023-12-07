
let direccion = 'https://dolarapi.com/v1/dolares'


fetch(direccion) 
    .then(response => response.json())
    .then(data => console.log(data))

        
    fetch("./data.js")
    .then(response => response.json())
    .then(data => console.log(data));


         
    fetch("./data.js")
    .then(response => response.json())
    .then(data => console.log(data2));

    let contenedor = document.getElementById("contenedor-tarjetas")

    fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data));
   
    fetch("URL")
    .then(response => response.json())
    .then(data => console.log(data2));