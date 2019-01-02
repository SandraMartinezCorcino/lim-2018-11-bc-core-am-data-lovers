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

const getAndShowData = (datas,country, string) => {
  let arr = [];
  const worldBankIndicatorsForCountry = datas[country]['indicators'];
  arr = worldBankIndicatorsForCountry.filter(element => element.indicatorName === string);
  const entriesObject = arr.map((element) => {
    return Object.entries(element.data);
  });
  return entriesObject;
};

const compare = (a,b) =>{
if ( parseInt(a[0])  < parseInt(b[0]) ) {
   return 1;  
}
if (parseInt(a[0])>parseInt(b[0])) {
    return -1;  
}
    return 0;
};

const sortData = (parametro) => {
 parametro.sort(compare);
 return parametro;
}



window.worldbank = {
  population,
  education,
  secondaryEducation,
  employment,
  unemployment,
  getAndShowData,
};
