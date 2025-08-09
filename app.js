// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Selecciona el campo de texto que permite agregar los nombres por su id "amigo"
const validarNombre = document.getElementById("amigo");

/*VALIDACIÓN MIENTRAS EL USUARIO ESTÁ ESCRIBIENDO
Evitar caracteres no permitidos (Números, caracteres especiales)*/
validarNombre.addEventListener("keypress", (e) =>{

    //Se obtiene el carácter que digita el usuario para validarlo
    const char = String.fromCharCode(e.which);

    /*Se crea variable que contiene los caracteres permitidos en el nombre de los amidos secretos
    dado que los nombres son en español se tienen en cuenta las tildes y la ñ - Ñ*/
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]$/;

    //Si el carácter digitado NO coincide con la regex, bloquea su escritura
    if(!regex.test(char)){
        //Se cancela el ingreso del carácter del usuario, previniendo el error
        e.preventDefault();
    }
});

/*CAPITALIZACIÓN DE LOS NOMBRES Y ELIMINACIÓN DE CARACTERES NO PERMITIDOS EN CASO QUE EL USUARIO 
COPIE Y PEGUE TEXTO*/
validarNombre.addEventListener("input", () =>{
    //Eliminar cualquier caracter no permitido en caso que se haya copiado texto
    let limpio = validarNombre.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]/g, "");

    //Convertir todo el texto ingresao a minúsculas primero para poder capitalizar
    limpio = limpio.toLowerCase();
    limpio = limpio.replace(/\b\w/g, (letra) => letra.toUpperCase());

    //Se reemplaza el valo del cuadro de texto por el texto sin caracteres prohibidos y capitalizado
    validarNombre.value = limpio;

})

function agregarAmigo(){

    
}