//const formulario = document.getElementById("formulario");
document.addEventListener("DOMContentLoaded",()=>
{
    

    document.getElementById("btnEnviar").addEventListener("click",(e)=>
    {
        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const fechNacimiento = document.getElementById("fechaNacimiento");
        const formulario = 
        {
            nombre: nombre.value,
            apellido: apellido.value,
            fechaNacimiento: fechNacimiento.value,

        };
        e.preventDefault();
        //const datosFormulario = new FormData(formulario);
        fetch("https://jsonplaceholder.typicode.com/users",
            {
                method:"POST",
                body: JSON.stringify({formulario,}),
                headers:{"Content-type": "application/json; charset=UTF-8",},
            })
       .then(respuesta => respuesta.json())
        .then(datos=>{console.log(datos)});
    });
});