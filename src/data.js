const example = () => {
  return 'example';
};
window.example = example;
const population = (arr) => {
  let populationArr = [];
  populationArr = arr.filter(populationElement => populationElement.indicatorCode.substring(0, 6) === 'SP.POP');
  return populationArr;
};
const fetchPopulation = (arr) => {
  const url1 = 'http://127.0.0.1:5500/src/data/worldbank/worldbank.json';   
  fetch(url1)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('La llamada a la API falló');
      }
    })
    .then((arr) => {
      console.log(arr);
      return arr;
    });
};
const education = (arr) => {
  let educationArr = [];
  educationArr = arr.filter(educationElement => educationElement.indicatorCode.substring(0, 6) === 'SE.TER');
  return educationArr;
};
const secondaryEducation = (arr) => {
  let secondaryEducationArr = [];
  secondaryEducationArr = arr.filter(secondaryEducationElement => secondaryEducationElement.indicatorCode.substring(0, 6) === 'SE.SEC');
  return secondaryEducationArr;
};
const employment = (arr) => {
  let employmentArr = [];
  employmentArr = arr.filter(employmentElement => employmentElement.indicatorCode.substring(0, 6) === 'SL.EMP');
  return employmentArr;
};
const unemployment = (arr) => {
  let unemploymentArr = [];
  unemploymentArr = arr.filter(unemploymentElement => unemploymentElement.indicatorCode.substring(0, 6) === 'SL.UEM');
  return unemploymentArr;
};
const converToInt = (data) => {
  const result = data.map((x) => { 
    const array = []; 
    array[0] = parseInt(x[0], 10) ;
    array[1] = (x[1] === '' ? 0 : parseFloat(x[1]));  
    return array; 
  });
  return result;
};
const calculateAverage = (data) => {
  const initial = 0;
  const arrSum = data.reduce((sum, current) => sum + current[1], initial); 
  const total = arrSum / data.length;
  return total;
};

const finalData = (dataFilter) => {
  const entriesObject = Object.entries(dataFilter[0].data);
  return converToInt(entriesObject);
};

const filterToData = (data, string) => {
  let arr = [];
  arr = data.filter(element => element.indicatorName === string);
  return finalData(arr);
};
const getAndShowData = (datas, country, string) => {
  const worldBankIndicatorsForCountry = datas[country]['indicators'];
  return filterToData(worldBankIndicatorsForCountry, string) ;
};
const compareDesc = (element1, element2) => {
  if (parseInt(element1[0]) < parseInt(element2[0])) {
    return 1;  
  }
  if (parseInt(element1[0]) > parseInt(element2[0])) {
    return -1;  
  }
  return 0;
};
const compareAsc = (element1, element2) => {
  if (parseInt(element1[0]) < parseInt(element2[0])) {
    return -1;  
  }
  if (parseInt(element1[0]) > parseInt(element2[0])) {
    return 1;  
  }
  return 0;
};
const sortData = (parametro, typeOfOrder) => {
  switch (typeOfOrder) {
  case 'desc':
    parametro.sort(compareDesc);
    return parametro;
  case 'asc':
    parametro.sort(compareAsc);
    parametro.sort(compareAsc);
    return parametro;
  }
};
 

cargarJSON();

window.worldbank = {
  population,
  education,
  secondaryEducation,
  employment,
  unemployment,
  getAndShowData,
  sortData,
  calculateAverage
};