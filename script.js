function funcionclick() {
   // alert("presionas el boton de click")
   Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
}

function funcionerror() {
    //alert("mensaje de error")
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "no se encontro la respuesta a tu pregunta",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}
function funcionpregunta() {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
}
