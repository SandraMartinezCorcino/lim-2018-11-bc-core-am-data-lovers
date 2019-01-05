// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window et

const example = () => {
  return 'example';
};
window.example = example;

const population = (arr) => {
  let populationArr = [];
  populationArr = arr.filter(populationElement => populationElement.indicatorCode.substring(0, 6) === 'SP.POP');
  return populationArr;
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


const converToInt = (parametro) => {
  const result = parametro[0].map( (x) => {
    const array=[]; 
    array[0]= parseInt(x[0], 10) ;
    array[1]= x[1] ;
    return  array; 
    });
  return result;
} 
const calculateAverage=(data) => {
  initial = 0;
  const arrSum = data.reduce((sum, current) => sum + current[1] , initial ); 
  const total= arrSum/data.length;
  return total;
}
const getAndShowData = (datas,country, string) => {
  let arr = [];
  const worldBankIndicatorsForCountry = datas[country]['indicators'];
  arr = worldBankIndicatorsForCountry.filter(element => element.indicatorName === string);
  const entriesObject = Object.entries(arr[0].data);
  return converToInt(entriesObject);
};

const compare = (element1, element2) => {
  if (parseInt(element1[0]) < parseInt(element2[0])) {
    return 1;  
  }
  if (parseInt(element1[0]) > parseInt(element2[0])) {
    return -1;  
  }
  return 0;
};
const sortData = (parametro) => {
  parametro.sort(compare);
  return parametro;
};

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