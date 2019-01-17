window.cipher = {
  //convertir el manseje en mayusculas 
  encode: (desplazamiento,cifrado)=>{
    let text=cifrado.toUpperCase();
    //guardar texto ya cifrado
    let codigo="";
    //recorrer la longitud del texto
    for (let i=0;i<text.length;i++){
      //primera instruccion, convertir texto a ascii
      const ascii=text.charCodeAt(i);//charcodeat esta convirtiendo la letra en el numero que corresponde al numero ascii
//formula
      const form=(ascii-65+parseInt(desplazamiento))%26+65;
      //convirtiendo el codigo ascii en letras
      const letras=String.fromCharCode(form);
      //concatena las letras cifradas,
      codigo+=letras;
    }
    return codigo
  },

      //desifrado
      decode: (desplazamiento,decifrado)=>{
        let text=decifrado.toUpperCase();
        let codigoDecifrado="";
        for (let i=0;i<text.length;i++){
        const ascii=text.charCodeAt(i);
          const form=(ascii+65-parseInt(desplazamiento))%26+65;
          const letras=String.fromCharCode(form);
          codigoDecifrado+=letras;
    }
  return codigoDecifrado;
  }

};
 