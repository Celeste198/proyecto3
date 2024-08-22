function encriptar(){
  var hola = document.getElementById("xd").value;
  var mango = document.getElementById("mango");

  var encriptado = btoa(hola);
  mango.innerHTML = encriptado;
}
function pera(){
  var adios = document.getElementById("uva").value;
  var mango = document.getElementById("mango");

  var desencriptar = atob (adios);
  mango.innerHTML = desencriptar;
}