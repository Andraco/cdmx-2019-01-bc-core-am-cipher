function encriptar (elemento) {
    //traera todos los elementos cuya etiqueta sea input, como solo es un valor entrecorchetes ponemso 0 
  //y para conseguir el valor de ese input se pone value
          var palabra = document.getElementsByTagName("input")[ 0 ].value;
    //con btoa estaremos codificando en base 64 y en el parentesis representa la palabra
      //a decodificar al realizarlo asi la plabra se encriptara y pasara a palabra codificada
          var palabra_codificada = btoa(palabra)
          //en el parrafo que pusimos queremos el resultado de esa palabra y lo aremos con el document
      //y con el id llamamos al id del parrafo que seria lo unico que se modificaria
      //con el iner mostraria el texto que tiene actualmente pero con palabra modidicada sustitura el texto
  //que tenga actualmente que es el que introrucira el usuario y esto pasa con palabra modificada
          document.getElementById("resultado").innerHTML = palabra_codificada;
  }
  function desencriptar (elemento) {
          var palabra = document.getElementsByTagName("input")[ 0 ].value;
          var palabra_descodificada = atob(palabra)
          document.getElementById("resultado").innerHTML = palabra_descodificada;
    //la propiedad atob descodifica
  }