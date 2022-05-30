$(document).ready(function(){

    //capturamos el evento click para ejecutar la funcion
    $("#btn_sub").click(()=>{
        fn_crear_saludo();
    })  

})

//funcion que se usara para contruir la segunbda vista 
function fn_crear_saludo(){
    //metodo jquery para obtener el valor de un radiobutton
    opc= $('input:radio[name=options]:checked').val()
    console.log(opc)
    //limpiamos el contenido de box para cargar nuevo contenido
    $("#card").empty();
    //agregamos imagen solicitada
    $("<img>").attr({
        "src":"images/illustration-thank-you.svg",
        "id":"img-thank"
    }).appendTo($("#card"));

    //lugar donde cargaremos el valor seleccionado en el front
    $("<div>").text("Usted a Seleccionado"+" "+ opc+" de 5").attr({
        "id":"txt-out"
    }).appendTo($("#card"))

    //Texto de agradecimiento para la segunda vista
    $("<h2>").text("Gracias!!").attr({
        "class":"title"
    }).appendTo($("#card"));

    $("<p>").text("Agradecemos que se tome el tiempo para calificar.Si alguna vez necesita más apoyo, ¡no dude en ponerse en contacto!")
    .attr({
        "class":"parr"
    }).appendTo($("#card"));

}
/* se podrian cargar los estilos directamente usando jquery pero por 
preferencias de orden, se opto por generar todos los estilos de forma independiente
asegurando un codigo mas legible*/