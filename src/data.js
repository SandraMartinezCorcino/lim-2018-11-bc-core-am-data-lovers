// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window et

const example = () => {
  return 'example';
};
window.example = example;

const countries = Object.keys(WORLDBANK);
const keyValue = Object.entries(WORLDBANK);
//console.log(keyValue);

//hacemos copia del array
const copedArray = (arr) => {
  let copedNewArray = [];
  for(var i = 0; i < arr.length; i++){
    copedNewArray.push(Object.assign({}, arr[i]))
  }
  return copedNewArray;
};
copedArray(keyValue);
let keys = keyValue.filter(keyValue => keyValue.length > 1)
//console.log(keys)

/*
//PERU
const myObjectPeru = keyValue[0][1].indicators;
//accedo a los objetos del array que son del tipo poblacion
newArrPeru = myObjectPeru.filter((element) => {
  return (element.indicatorCode.substring(0,6) === "SP.POP");
});
//accedo a los nombrs de los indicadores
const peruNames = newArrPeru.map((values) => {
  return values.indicatorName;
});
//accedo a los codigos de cada indicador
const peruCodes = newArrPeru.map((values) => {
  return values.indicatorCode;
});
//accedo a la data de cada indicador
const peruData = newArrPeru.map((values) => {
  return values.data;
});

//MEXICO
const myObjectMexico = keyValue[1][1].indicators;
//accedo a los objetos del array que son del tipo poblacion
newArrMexico = myObjectMexico.filter((element) => {
  return (element.indicatorCode.substring(0,6) === "SP.POP");
});
//accedo a los nombrs de los indicadores
const mexicoNames = newArrMexico.map((values) => {
  return values.indicatorName;
});
//accedo a los codigos de cada indicador
const mexicoCodes = newArrMexico.map((values) => {
  return values.indicatorCode;
});
//accedo a la data de cada indicador
const mexicoData = newArrMexico.map((values) => {
  return values.data;
});

//BRASIL
const myObjectBrasil = keyValue[2][1].indicators;
//accedo a los objetos del array que son del tipo poblacion
newArrBrasil = myObjectBrasil.filter((element) => {
  return (element.indicatorCode.substring(0,6) === "SP.POP");
});
//accedo a los nombrs de los indicadores
const brasilNames = newArrBrasil.map((values) => {
  return values.indicatorName;
});
//accedo a los codigos de cada indicador
const brasilCodes = newArrBrasil.map((values) => {
  return values.indicatorCode;
});
//accedo a la data de cada indicador
const brasilData = newArrBrasil.map((values) => {
  return values.data;
});

//CHILE
const myObjectChile = keyValue[3][1].indicators;
//accedo a los objetos del array que son del tipo poblacion
newArrChile = myObjectChile.filter((element) => {
  return (element.indicatorCode.substring(0,6) === "SP.POP");
});
//accedo a los nombrs de los indicadores
const chileNames = newArrChile.map((values) => {
  return values.indicatorName;
});
//accedo a los codigos de cada indicador
const chileCodes = newArrChile.map((values) => {
  return values.indicatorCode;
});
//accedo a la data de cada indicador
const chileData = newArrChile.map((values) => {
  return values.data;
});

//creo el objeto con la data que necesito
const dataArray = {
  paises : countries,

  indicadores : {
    Peru : [
      { name : peruNames,
        code : peruCodes
      }
    ],
    México : [
      { name : mexicoNames,
        code : mexicoCodes
      }
    ],
    Brasil : [
      { name : brasilNames,
        code : brasilCodes
      }
    ],
    Chile : [
      { name : chileNames,
        code : chileCodes
      }
    ]
  },

  data : {
    Peru : peruData,
    México : mexicoData,
    Brasil : brasilData,
    Chile : chileData
  }

}
*/

//console.log(dataArray);

//obtenemos lista de indicadores poblacion Peru
const indicadoresPeru = Object.values(WORLDBANK)[0].indicators;
//console.log(indicadoresPoblacionPeru);

const newArrayPoblacion = [];
for (let i = 0; i < indicadoresPeru.length; i++) {
  const populationIndicatorTypeCode = indicadoresPeru[i].indicatorCode.substring(0,6);
  if(populationIndicatorTypeCode === "SP.POP") {
    const populationIndicatorTypeName = indicadoresPeru[i].indicatorName;
    newArrayPoblacion.push(populationIndicatorTypeName);
  }
}
//console.log(newArrayPoblacion);
 let obtenerListaIndicadorPoblacion = " ";
 newArrayPoblacion.forEach((myArrayPoblacion) => {
   const li = `
   <li> ${myArrayPoblacion} </li>
   `;
   obtenerListaIndicadorPoblacion += li;
 })

 const ulContainerPoblacion = document.getElementById("container-list-poblacion");
 ulContainerPoblacion.innerHTML = obtenerListaIndicadorPoblacion;

 //obtenemos lista de indicadores educacion Peru
 const newArrayEducacion = [];
 for (let i = 0; i < indicadoresPeru.length; i++) {
   const educationIndicatorTypeCode = indicadoresPeru[i].indicatorCode.substring(0,6);
   if(educationIndicatorTypeCode === "SE.TER" || educationIndicatorTypeCode === "SE.SEC") {
     const educationIndicatorTypeName = indicadoresPeru[i].indicatorName;
     newArrayEducacion.push(educationIndicatorTypeName);
   }
 }
 //console.log(newArrayEducacion);

  let obtenerListaIndicadorEducacion = " ";
  newArrayEducacion.forEach((myArrayEducacion) => {
    const li = `
    <li> ${myArrayEducacion} </li>
    `;
    obtenerListaIndicadorEducacion += li;
  })

  const ulContainerEducacion = document.getElementById("container-list-education");
  ulContainerEducacion.innerHTML = obtenerListaIndicadorEducacion;

  //obtenemos lista de indicadores empleo Peru
  const newArrayEmpleo = [];
  for (let i = 0; i < indicadoresPeru.length; i++) {
    const empleoIndicatorTypeCode = indicadoresPeru[i].indicatorCode.substring(0,6);
    if(empleoIndicatorTypeCode === "SL.EMP") {
      const empleoIndicatorTypeName = indicadoresPeru[i].indicatorName;
      newArrayEmpleo.push(empleoIndicatorTypeName);
    }
  }
  //console.log(newArrayEmpleo);

   let obtenerListaIndicadorEmpleo = " ";
   newArrayEmpleo.forEach((myArrayEmpleo) => {
     const li = `
     <li> ${myArrayEmpleo} </li>
     `;
     obtenerListaIndicadorEmpleo += li;
   })

   const ulContainerEmpleo = document.getElementById("container-list-empleo");
   ulContainerEmpleo.innerHTML = obtenerListaIndicadorEmpleo;

   //obtenemos lista de indicadores desempleo Peru
   const newArrayDesempleo = [];
   for (let i = 0; i < indicadoresPeru.length; i++) {
     const desempleoIndicatorTypeCode = indicadoresPeru[i].indicatorCode.substring(0,6);
     if(desempleoIndicatorTypeCode === "SL.UEM") {
       const desempleoIndicatorTypeName = indicadoresPeru[i].indicatorName;
       newArrayDesempleo.push(desempleoIndicatorTypeName);
     }
   }
   //console.log(newArrayDesempleo);

    let obtenerListaIndicadorDesempleo = " ";
    newArrayDesempleo.forEach((myArrayDesempleo) => {
      const li = `
      <li> ${myArrayDesempleo} </li>
      `;
      obtenerListaIndicadorDesempleo += li;
    })

    const ulContainerDesempleo = document.getElementById("container-list-desempleo");
    ulContainerDesempleo.innerHTML = obtenerListaIndicadorDesempleo;

    //mostrando indicadoresPeru
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";


    const indicator = document.getElementById("select-indicator");
    const selectIndicator = () => {
      if (indicator.selectedIndex === 0) {
        document.getElementById("two").style.display = "block";
        document.getElementById("three").style.display = "none";
        document.getElementById("four").style.display = "none";
        document.getElementById("five").style.display = "none";
      }
      else if (indicator.selectedIndex === 1) {
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "block";
        document.getElementById("four").style.display = "none";
        document.getElementById("five").style.display = "none";
      }
      else if (indicator.selectedIndex === 2) {
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "none";
        document.getElementById("four").style.display = "block";
        document.getElementById("five").style.display = "none";
      }
      else{
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "none";
        document.getElementById("four").style.display = "none";
        document.getElementById("five").style.display = "block";
      }
    };
    indicator.addEventListener("click", selectIndicator);
