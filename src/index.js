// variables que le dara la funcionalidad a cipher

let botonCifrar= document.getElementById("boton1");

let botonDescifrar= document.getElementById("boton2");

let mensaje1= document.getElementById("caja1");

let llave= document.getElementById("numero");

let mensaje2= document.getElementById("caja2");



// evento que sera un click para el boton de cifrar
botonCifrar.addEventListener ("click" , event => {

    //evnto de la llave secreta
  let detonadorValor= window.cipher.encode (

    llave.value, mensaje1.value

  );
//console para verefircar

  mensaje2.innerHTML = detonadorValor;

});

 

//bloque de funcion evento para el boton de descifrar

botonDescifrar.addEventListener("click" , event => {

  let detonadorValor= window.cipher.decode (

  llave.value, mensaje1.value

  );

  mensaje2.innerHTML= detonadorValor;

});