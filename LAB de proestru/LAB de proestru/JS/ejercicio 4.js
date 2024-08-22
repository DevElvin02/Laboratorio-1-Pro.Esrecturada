const reemplazarA = (frase) => {
    const caracteres = frase.split('');

    const resultado = caracteres.map(letra => letra === 'a' ? 'f' : letra);
    
    return resultado.join('');
  };
  
  const fraseOriginal = "Magdalena canta y salta alegre al amanecer.";
  const fraseModificada = reemplazarA(fraseOriginal);
  
  console.log(fraseModificada); 