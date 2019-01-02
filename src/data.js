// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window et

const example = () => {
  return 'example';
};
window.example = example;

population = (arr, string) => {
  let populationArr = [];
  populationArr = arr.filter(populationElement => populationElement.indicatorCode.substring(0, 6) === string)
  return populationArr;
};
education = (arr, string) => {
  let educationArr = [];
  educationArr = arr.filter(educationElement => educationElement.indicatorCode.substring(0, 6) === string)
  return educationArr;
};
secondaryEducation = (arr, string) => {
  let secondaryEducationArr = [];
  secondaryEducationArr = arr.filter(secondaryEducationElement => secondaryEducationElement.indicatorCode.substring(0, 6) === string)
  return secondaryEducationArr;
};
employment = (arr, string) => {
   let employmentArr = [];
   employmentArr = arr.filter(employmentElement => employmentElement.indicatorCode.substring(0, 6) === string)
   return employmentArr;
};
unemployment = (arr, string) => {
  let unemploymentArr = [];
  unemploymentArr = arr.filter(unemploymentElement => unemploymentElement.indicatorCode.substring(0, 6) === string)
  return unemploymentArr;
};

unemployment = (arr, string) => {
  let unemploymentArr = [];
  unemploymentArr = arr.filter(unemploymentElement => unemploymentElement.indicatorCode.substring(0, 6) === string)
  return unemploymentArr;
}; 


data=(country,string)=>{
  let arr = [];
  const worldBankIndicatorsForCountry = WORLDBANK[country]['indicators'];
  arr = worldBankIndicatorsForCountry.filter(element => element.indicatorName === string );
  entriesObject= arr.map((element) => {
    return Object.entries(element.data);
  });
  return entriesObject;
  };

window.worldbank = {
  population,
  education,
  secondaryEducation,
  employment,
  unemployment
};
