const worldBankIndicators = WORLDBANK.PER.indicators;

//obtener lista de indicadores que se van a pintar en <ul>
let getPopulationList = "";
worldbank.population(worldBankIndicators,"SP.POP").forEach(populationElement => {
  console.log(populationElement);
  const populationList = `<li ><a class="indicator-name"> ${populationElement.indicatorName} </a></li>`;
  getPopulationList += populationList;
});

const ulContainerPoblacion = document.getElementById("container-list-population");
ulContainerPoblacion.innerHTML = getPopulationList;//pintamos lista de indicadores poblacion

let getEducationList = "";
worldbank.education(worldBankIndicators,"SE.TER").forEach(educationElement => {
  const educationList = `<li><a class="indicator-name"> ${educationElement.indicatorName} </a></li>`;
  getEducationList += educationList;
});
const ulContainerEducation = document.getElementById("container-list-education");
ulContainerEducation.innerHTML = getEducationList;//pintamos lista de indicadores educación terciaria

let getSecondaryEducationList = "";
worldbank.secondaryEducation(worldBankIndicators,"SE.SEC").forEach(secondaryEducationElement => {
  const secondaryEducationList = `<li><a class="indicator-name">${secondaryEducationElement.indicatorName} </a></li>`;
  getSecondaryEducationList += secondaryEducationList;
});
const ulContainerSecondaryEducation = document.getElementById("container-list-secondary-education");
ulContainerSecondaryEducation.innerHTML = getSecondaryEducationList;//pintamos lista de indicadores educación secundaria

let getEmploymentList = "";
worldbank.employment(worldBankIndicators,"SL.EMP").forEach(employmentElement => {
  const employmentList = `<li><a class="indicator-name"> ${employmentElement.indicatorName} </a></li>`;
  getEmploymentList += employmentList;
});
const ulContainerEmployment = document.getElementById("container-list-employment");
ulContainerEmployment.innerHTML = getEmploymentList;//pintamos lista de indicadores empleo

let getUnemploymentList = "";
worldbank.unemployment(worldBankIndicators,"SL.UEM").forEach(unemploymentElement => {
  const unemploymentList = `<li><a class="indicator-name">${unemploymentElement.indicatorName} </a></li>`;
  getUnemploymentList += unemploymentList;
});
const ulContainerUnemployment = document.getElementById("container-list-unemployment");
ulContainerUnemployment.innerHTML = getUnemploymentList;//pintamos lista de indicadores desempleo


//mostrando por tipo de indicador que pide el usuario
document.getElementById("dasboard").style.display = "block";
document.getElementById("one").style.display = "block";
document.getElementById("two").style.display = "block";
document.getElementById("three").style.display = "none";
document.getElementById("four").style.display = "none";
document.getElementById("five").style.display = "none";
document.getElementById("six").style.display = "none";
document.getElementById("countries").style.display = "none";
document.getElementById("section-data").style.display="none";


const indicatorSelect = document.getElementById("select-indicator");
const btnStart=document.getElementById('btn-start');
const showStar = () =>{
  document.getElementById("sidebar").style.display='none';
  
  document.getElementById("about-us").style.display='none';
  document.getElementById("dasboard").style.display = "block";
  document.getElementById("one").style.display='block';

};
const showIndicator = () => {
  if (indicatorSelect.selectedIndex === 0) {
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "block";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none";
  }
  else if (indicatorSelect.selectedIndex === 1) {
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "block";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none";
  }
  else if (indicatorSelect.selectedIndex === 2) {
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "block";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none";
  }
  else if(indicatorSelect.selectedIndex === 3){
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "block";
    document.getElementById("six").style.display = "none";
  }
  else {
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "block";
  }
};

indicatorSelect.addEventListener("click", showIndicator);
const btnIndicator=document.getElementById("btn-indicator");

let searchData=[];
let hijos = document.querySelectorAll("ol.padre > li > a.indicator-name");
console.log(hijos);
for (unHijo of hijos) {
      unHijo.addEventListener("click",  (event) =>{
        const hijo = event.target;
        const nameTypeIndicator =document.getElementById("name-type-indicator");  
        const name = hijo.innerText.trim();
        nameTypeIndicator.innerHTML=name;
        searchData[0]=name;
        document.getElementById("countries").style.display = "block";
        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "none";
        document.getElementById("four").style.display = "none";
        document.getElementById("five").style.display = "none";
        document.getElementById("six").style.display = "none";
         
       
    });
}
const groupFlags = document.getElementById('group-flags');
groupFlags.addEventListener('click',(event)=>{
    const country=event.target.value;
    searchData[1]=country;
    console.log(country);
    document.getElementById("section-data").style.display = "block";
    const staticData=document.getElementById("static-data");
   
    
    //let activities = [];
    activities= data(searchData[1],searchData[0]);
    let getPopulationList = "";
    
    data(searchData[1],searchData[0]).forEach((element)=>{

  element.forEach((element1)=>{
    const populationList = `<li ><a class="indicator-name"> ${element1} </a></li>` ;
    getPopulationList += populationList;
        } )
        
});

staticData.innerHTML = getPopulationList;


   
  } );

  
/*
 
    //staticData.innerHTML=data(searchData[1],searchData[0])+ "<br>"; 
   /* data(searchData[1],searchData[0]).forEach((element)=>{

      element.forEach((element1)=>{
        console.log(element1+'s');
       // staticData.innerHTML=element1+'s';
            } )
            staticData.innerHTML=element1+'s'; 
    });
btnIndicator.addEventListener('click',() => {
const indicatorName=document.getElementById("indicator-name");
const name=indicatorName.innerHTML.trim();
data('PER',name);
//console.log(data('PER','Población, mujeres (% del total)'));
console.log(data('PER',name));
} );*/



