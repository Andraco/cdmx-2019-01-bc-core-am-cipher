window.cipher = {
  //convertir el manseje en mayusculas 
  encode: (desplazamiento,cifrado)=>{
    let text=cifrado.toUpperCase();
    //guardar texto ya cifrado
    let normal="";
    //recorrer la longitud del texto
    for (let i=0;i<text.length;i++){
      //primera instruccion, convertir texto a ascii
      const ascii=text.charCodeAt(i);//charcodeat esta convirtiendo la letra en el numero que corresponde al numero ascii
      
      
      //formulas con condicionales el primer if de apertura es respentando
      //los es pacios en codigo ascii
  let lugares;
  let offset= desplazamiento;
   if (ascii === 32) {
    normal += text[i];
    
  //ubicar caracteres especiales en ascii donde el rango va del 33 al 64 y se sustituye en la formula
  } else if (ascii>= 33 && ascii<= 64) {
    let formula = (lugares - 33 + parseInt(offset)) % 26 +33;
    lugares = text.String.fromCharCode(formula);
    normal += lugares;
    
  //ubicar mayusculas en ascci
  } else if (ascii>= 65 && ascii<=90) {
    let formula = (ascii - 65 +  parseInt(offset)) % 26 +65;
    

    lugares = String.fromCharCode(formula);
    normal += lugares;
    
    //obtener minusculas en ascci
  } else if (ascii>= 97 && ascii<= 122) {
    const formula = (lugares - 97 + parseInt(offset)) % 26 +97;
    lugares = text.fromCharCode(formula);
    normal += lugares;
  }
  
  
//}
//formula
     // const form=(ascii-65+parseInt(desplazamiento))%26+65;
      //convirtiendo el codigo ascii en letras
     //const letras=String.fromCharCode(form);
      //concatena las letras cifradas,
      //codigo+=letras;
    }

    return normal;
    
  },

      //desifrado
      decode: (desplazamiento,decifrado)=>{
        let text=decifrado;
        let codigoDecifrado="";
        for (let i=0;i<text.length;i++){
        const ascii=text.charCodeAt(i);
          
     
//ubicar mayusculas en ascii
if (ascii>= 65 && ascii<=90) {
  let formula = (ascii + 65 - parseInt(desplazamiento)) % 26 +65;
  let resultadoMayus = String.fromCharCode(formula);
  codigoDecifrado +=resultadoMayus;
// ubicar minusculas
} else if (ascii>= 97 && ascii<= 122) {
  let formula = (ascii - 122 - parseInt(desplazamiento)) % 26 +122;
  let resultadoMinus= String.fromCharCode(formula);
  codigoDecifrado += resultadoMinus;
}else{
  let resultado=String.fromCharCode(ascii);
  codigoDecifrado += resultado;
}

}
return codigoDecifrado

      }  
     
      };