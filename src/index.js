//forma nueva de declarar variable en vez de var
//llamar a lavarable boton de html para dar funcionalidad
//variables que le dara la funcionalidad a cipher
//aqui traigo mi elemento boton por medio de un id
let botonCifrar= document.getElementById("boton1");
//boton2 mensaje a de decifrar
let botonDecifrar= document.getElementById("boton2");


//el numero que escogera como llave

//caja dos mensaje cifrado
let botonCifrado= document.getElementById("caja2")



// evento que sera un click para el boton de cifrar
//variables de tipo bloque
//addEventListener registra el evento especifico que en este caso es dar el click al boton cifrar
botonCifrar.addEventListener ("click" , () => {
  const mensajeUsuario=document.getElementById("caja1").value;
  console.log(mensajeUsuario);
  const ofset=parseInt(document.getElementById('numero').value);
  console.log(ofset)
  //aqui se invoca la funcion encode y se pone como argumentos las variables con los valores
const detonadorValor= window.cipher.encode(ofset,mensajeUsuario);
botonCifrado.innerHTML=detonadorValor;
});