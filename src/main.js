let listNav = document.getElementById('list-menu');
let navBar = document.getElementById('js-navbar');
navBar.addEventListener('click', function() {
  listNav.classList.toggle('active');
});
const worldBankIndicators = WORLDBANK.PER.indicators;
let getPopulationList = '';
worldbank.population(worldBankIndicators).forEach(populationElement => {
  const populationList = `<li ><a class="indicator-name"> ${populationElement.indicatorName} </a></li>`;
  getPopulationList += populationList;
});
const ulContainerPoblacion = document.getElementById('container-list-population');
ulContainerPoblacion.innerHTML = getPopulationList;
let getEducationList = '';
worldbank.education(worldBankIndicators).forEach(educationElement => {
  const educationList = `<li><a class="indicator-name"> ${educationElement.indicatorName} </a></li>`;
  getEducationList += educationList;
});
const ulContainerEducation = document.getElementById('container-list-education');
ulContainerEducation.innerHTML = getEducationList;
let getSecondaryEducationList = '';
worldbank.secondaryEducation(worldBankIndicators).forEach(secondaryEducationElement => {
  const secondaryEducationList = `<li><a class="indicator-name">${secondaryEducationElement.indicatorName} </a></li>`;
  getSecondaryEducationList += secondaryEducationList;
});
const ulContainerSecondaryEducation = document.getElementById('container-list-secondary-education');
ulContainerSecondaryEducation.innerHTML = getSecondaryEducationList;
let getEmploymentList = '';
worldbank.employment(worldBankIndicators).forEach(employmentElement => {
  const employmentList = `<li><a class="indicator-name"> ${employmentElement.indicatorName} </a></li>`;
  getEmploymentList += employmentList;
});
const ulContainerEmployment = document.getElementById('container-list-employment');
ulContainerEmployment.innerHTML = getEmploymentList;
let getUnemploymentList = '';
worldbank.unemployment(worldBankIndicators).forEach(unemploymentElement => {
  const unemploymentList = `<li><a class="indicator-name">${unemploymentElement.indicatorName} </a></li>`;
  getUnemploymentList += unemploymentList;
});
const ulContainerUnemployment = document.getElementById('container-list-unemployment');
ulContainerUnemployment.innerHTML = getUnemploymentList;
document.getElementById('dasboard').style.display = 'block';
document.getElementById('one').style.display = 'block';
document.getElementById('two').style.display = 'block';
document.getElementById('three').style.display = 'none';
document.getElementById('four').style.display = 'none';
document.getElementById('five').style.display = 'none';
document.getElementById('six').style.display = 'none';
document.getElementById('countries').style.display = 'none';
document.getElementById('section-data').style.display = 'none';
document.getElementById("option-country").style.display = 'none';
document.getElementById("option-start").style.display = 'block';
document.getElementById("option-we-are").style.display = 'none';
document.getElementById("option-indicators").style.display = 'none';

const indicatorSelect = document.getElementById('select-indicator');
const showIndicator = () => {
  if (indicatorSelect.selectedIndex === 0) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'block';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 1) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'block';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 2) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'block';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 3) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'block';
    document.getElementById('six').style.display = 'none';
  } else {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'block';
  }
};
indicatorSelect.addEventListener('click', showIndicator);
let searchData = [];
let hijos = document.querySelectorAll('ol.padre > li > a.indicator-name');
for (let unHijo of hijos) {
  unHijo.addEventListener('click', (event) => {
    const hijo = event.target;
    const nameTypeIndicator = document.getElementById('name-type-indicator');  
    const name = hijo.innerText.trim();
    nameTypeIndicator.innerHTML = name;
    searchData[0] = name;
    document.getElementById('countries').style.display = 'block';
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';  
  });
}
const groupFlags = document.getElementById('group-flags');
groupFlags.addEventListener('click', (event) => {
  const country = event.target.value;
  searchData[1] = country;
  document.getElementById('section-data').style.display = 'block';
  const staticData = document.getElementById('static-data');
  const descData = document.getElementById('desc-data'); 
  staticData.style.display = 'block';  
  descData.style.display = 'none';
  let getPopulationList = '';
  worldbank.getAndShowData(WORLDBANK,searchData[1] ,searchData[0]).forEach((element) => {
      const populationList = `<li class='list-style-none' ><a class='indicator-name card-title font-Prompt fomt-size-18'> <span>Año:</span> ${element[0]} <span>=</span> ${element[1]} </a></li>` ;
      getPopulationList += populationList;     
  });  
  staticData.innerHTML = getPopulationList;
  const showAverage=document.getElementById('show-average');
  showAverage.innerHTML=calculateAverage(worldbank.getAndShowData(WORLDBANK,searchData[1] ,searchData[0]));
});
const btnSortDataDown=document.getElementById('btn-sort-data-down');
btnSortDataDown.addEventListener('click',() => {
  let getDescDataList = '';
  worldbank.sortData(getAndShowData(WORLDBANK,searchData[1] ,searchData[0])).forEach((element) => {
      const descDataList = `<li class='list-style-none' ><a class='indicator-name card-title font-Prompt fomt-size-18'> <span>Año:</span> ${element[0]} <span>=</span> ${element[1]} </a></li>` ;
      getDescDataList += descDataList;
  });
  const staticData = document.getElementById('static-data');
  const descData = document.getElementById('desc-data'); 
  staticData.style.display='none';
  descData.style.display='block';
  descData.innerHTML = getDescDataList;
});

const btnStart=document.getElementById("inicio");
btnStart.addEventListener('click',() =>{
  const optionCountry=document.getElementById("option-country");
  const optionStart=document.getElementById("option-start");
  const optionWeAre=document.getElementById("option-we-are");
  const optionIndicator=document.getElementById("option-indicators");
  optionCountry.style.display="none";
  optionStart.style.display="block";
  optionWeAre.style.display="none";
  optionIndicator.style.display="none";
} )

const btnCountry=document.getElementById("paises");
btnCountry.addEventListener('click',() =>{
  const optionCountry=document.getElementById("option-country");
  const optionStart=document.getElementById("option-start");
  const optionWeAre=document.getElementById("option-we-are");
  const optionIndicator=document.getElementById("option-indicators");
  optionCountry.style.display="block";
  optionStart.style.display="none";
  optionWeAre.style.display="none";
  optionIndicator.style.display="none";

})

const btnWeAre=document.getElementById("somos");
btnWeAre.addEventListener('click',() =>{
  const optionCountry=document.getElementById("option-country");
  const optionStart=document.getElementById("option-start");
  const optionWeAre=document.getElementById("option-we-are");
  const optionIndicator=document.getElementById("option-indicators");
  optionWeAre.style.display="block";
  optionIndicator.style.display="none";
  optionCountry.style.display="none";
  optionStart.style.display="none";
})

const btnIndicator=document.getElementById("indicadores");
btnIndicator.addEventListener('click',() =>{
  const optionCountry=document.getElementById("option-country");
  const optionStart=document.getElementById("option-start");
  const optionWeAre=document.getElementById("option-we-are");
  const optionIndicator=document.getElementById("option-indicators");
  optionIndicator.style.display="block";
  optionCountry.style.display="none";
  optionStart.style.display="none";
  optionWeAre.style.display="none";
})
